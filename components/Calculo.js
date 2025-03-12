import { Text, View, StyleSheet } from "react-native";

export default function Calculo({ nomeP, valorO, valorP }) {
    return (
        <View style={styles.estilo}>
            <Text style={styles.texto}>Nome do Produto: {nomeP}</Text>
            <Text style={styles.texto}>Valor Original: {valorO}</Text>
            <Text style={styles.texto}>Valor Acrescentado: {valorO * valorP / 100}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  texto: {
    margin:2,
    fontSize: 20
  },
  estilo: {
    marginTop: 20,
    backgroundColor: '#ff7'
  }
});