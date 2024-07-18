import { TouchableOpacity, StyleSheet } from "react-native";
import { DesignSystem } from "../../util/Style/DesignSystem";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

interface ButtonAddProps {
    onPress?: () => void;
}

export default function ButtonAdd({ onPress }: ButtonAddProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <MaterialIcons name='add' color={DesignSystem.colors.white} size={DesignSystem.icons.medium} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DesignSystem.colors.secondary,
        width: 50,
        height: 50,
        borderRadius: 100,
    },
}); 