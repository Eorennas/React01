import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



function App() {
  const [img, setimg] = useState(require('./assets/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('')

  let frases = [
    'Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!',
    'É importante agradecer pelo hoje sem nunca desistir do amanhã!',
    'Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!',
    'Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!',
    'A gratidão é uma grande aliada do sucesso!',
  ];

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setTextoFrase('"'+frases[numeroAleatorio]+'"')
    setimg(require('./assets/biscoitoAberto.png'))
  }

  function reiniciar(){
    setimg(require('./assets/biscoito.png'))
    setTextoFrase('');
  };
  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />
      <Text style={styles.textofrase}>{textoFrase}</Text>
      <TouchableOpacity
      style={styles.botão}
      onPress={ quebraBiscoito}
      >
        <View style={styles.btnarea}>
          <Text style={styles.btnTexto}>Quebrar Biscoiito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.botão, {marginTop: 15, borderColor: '#121212'}]}
      onPress={reiniciar}
      >
        <View style={styles.btnarea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 230,
    height: 230
  },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botão:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 1,
    borderRadius: 25,
    
  },
  btnarea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'

  },
});

export default App;
