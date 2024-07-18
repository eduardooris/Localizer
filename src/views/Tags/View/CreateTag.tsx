import { View, StyleSheet } from "react-native";
import Container from "../../../components/Container/Container";
import { Text } from "../../../components/Text/Text";
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";
import { useViewModel } from "../ViewModel/CreateTag";
export default function CreateTag() {
    const { form, setForm, create, loading } = useViewModel()
    return (
        <Container icon="arrow-back-ios" title={"Cadastrar nova tag"}>
            <View style={style.container}>
                <View>
                    <Input
                        value={form.name}
                        onChangeText={e => setForm({ name: e })}
                        placeholder="Nome"
                    />
                    <Input
                        placeholder="sn"
                        value={form.sn}
                        onChangeText={e => setForm({ sn: e })}
                    />
                    <Input
                        placeholder="mac"
                        value={form.mac}
                        onChangeText={e => setForm({ mac: e })}
                    />
                    <Input
                        placeholder="uid"
                        value={form.uid}
                        onChangeText={e => setForm({ uid: e })}
                    />



                </View>
                <View style={style.containerButton}>
                    <Button size="medium" loading={loading} onPress={create}>Cadastrar</Button>
                </View>
            </View>
        </Container>
    )
}

const style = StyleSheet.create({
    container: { flex: 1, justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 },
    containerButton: {
        alignItems: 'center',
        marginBottom: 80
    },
});