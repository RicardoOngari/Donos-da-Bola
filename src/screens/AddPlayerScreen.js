import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Text, Alert } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AddPlayerScreen({ navigation, setJogadores }) {
  const [nome, setNome] = useState('');
  const [posicao, setPosicao] = useState('');
  const [time, setTime] = useState('');
  const [idade, setIdade] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');

  const handleAdd = () => {
    if (!nome.trim() || !posicao.trim() || !time.trim()) {
      Alert.alert('Erro', 'Por favor, preencha Nome, Posição e Time.');
      return;
    }

    const novoJogador = {
      nome: nome.trim(),
      posicao: posicao.trim(),
      time: time.trim(),
      idade: idade ? parseInt(idade, 10) : null,
      nacionalidade: nacionalidade.trim() || 'Não informado',
      imagem: 'https://via.placeholder.com/100x100.png?text=' + nome.charAt(0).toUpperCase(),
      teamLogo: 'https://via.placeholder.com/32x32.png?text=TEAM',
      flag: 'https://via.placeholder.com/32x24.png?text=FLAG'
    };

    setJogadores(prev => [...prev, novoJogador]);

    // Limpar formulário para nova entrada
    setNome('');
    setPosicao('');
    setTime('');
    setIdade('');
    setNacionalidade('');

    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={require('../../assets/fundo.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Header />
        <View style={styles.container}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput 
            placeholder="Nome do jogador"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />
          
          <Text style={styles.label}>Posição:</Text>
          <TextInput 
            placeholder="Posição"
            style={styles.input}
            value={posicao}
            onChangeText={setPosicao}
          />
          
          <Text style={styles.label}>Time:</Text>
          <TextInput 
            placeholder="Time"
            style={styles.input}
            value={time}
            onChangeText={setTime}
          />
          
          <Text style={styles.label}>Idade:</Text>
          <TextInput 
            placeholder="Idade"
            style={styles.input}
            value={idade}
            onChangeText={setIdade}
            keyboardType="numeric"
          />
          
          <Text style={styles.label}>Nacionalidade:</Text>
          <TextInput 
            placeholder="Nacionalidade"
            style={styles.input}
            value={nacionalidade}
            onChangeText={setNacionalidade}
          />
          
          <Button title="Adicionar Jogador" onPress={handleAdd} />
        </View>
        <Footer navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1, paddingTop: 40, paddingBottom: 80, paddingHorizontal: 20 },
  container: { flex: 1, justifyContent: 'center' },
  input: { 
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16
  }
});
