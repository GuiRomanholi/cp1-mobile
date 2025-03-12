import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';
import Calculo from './components/Calculo';

export default function App() {
  
  const [nomeProd, setNomeProd] = useState('');
  const [valorOrigem, setValorOrigem] = useState('');
  const [valorPorc, setValorPorc] = useState('');
  const [exibirCalculo, setExibirCalculo] = useState(false);

  const handleButtonClick = () =>{
    setExibirCalculo(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>CP-1 Guilherme Romanholi Santos</Text>
      <Text style={styles.texto}>RM: 557462</Text>

      <Image 
        source={require('./assets/cao.png')}
        style={styles.imagem}
      />

      <TextInput
        placeholder="Digite o nome do Produto"
        style={styles.input}
        value={nomeProd}
        onChangeText={(valor) => setNomeProd(valor)}
        keyboardAppearance='dark'
      />
      <TextInput
        placeholder="Digite o valor do Produto"
        style={styles.input}
        value={valorOrigem}
        onChangeText={(valor) => setValorOrigem(valor)}
        keyboardType='numeric'
        keyboardAppearance='dark'
      />
      <TextInput
        placeholder="Digite a porcetagem do aumento"
        style={styles.input}
        value={valorPorc}
        onChangeText={(valor) => setValorPorc(valor)}
        keyboardType='numeric'
        keyboardAppearance='dark'
      />

      <Button title='Clique' style={styles.btn} onPress={handleButtonClick}/>

      {exibirCalculo &&(
        <Calculo nomeP={nomeProd} valorO={valorOrigem} valorP={valorPorc}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 7,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 20,
    margin: 10
  },
  btn: {
    color: 'blue',
    borderRadius: 5,
  },
  texto: {
    margin: 8,
    fontSize: 20
  },
  imagem:{
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: 300,
    height: 300
  }
});
