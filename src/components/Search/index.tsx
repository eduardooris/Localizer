import { Platform, StyleSheet, TextInput, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { DesignSystem } from "../../util/Style/DesignSystem";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
interface SearchProps {
    onChangeText: (text: string) => void;
    value: string;
    placeholder: string;
}
export default function Search({ onChangeText, value, placeholder }: SearchProps) {
    return (
        <View style={styles.container}>

            <View style={styles.containerInput}>
                <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} style={styles.input} />
            </View>
            <View style={styles.containerIcon}>
                <MaterialIcons name="search" color={DesignSystem.colors.white} size={DesignSystem.icons.small} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: hp("7%"),
        marginHorizontal: "3%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: DesignSystem.colors.primary,
        borderRadius: 100,
        padding: "1%",
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: .3,
                shadowRadius: 5,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    containerIcon: {
        backgroundColor: DesignSystem.colors.secondary,
        borderRadius: 100,
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: 'center'
    },
    containerInput: {
        flex: 1,
        paddingHorizontal: 10,
    },
    input: {
        color: DesignSystem.colors.secondary,
        fontSize: DesignSystem.typography.small,
    },

})