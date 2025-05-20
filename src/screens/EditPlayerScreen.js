import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imagens from '../../utils/imagens'; // ajuste o caminho conforme sua organização

export default function EditPlayerScreen({ route, navigation }) {
  const { jogador } = route.params;

  return (
    <ImageBackground source={require('../../assets/fundo.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Header />

        <View style={styles.content}>
          <Image
            source={{
              uri:
                jogador.url_imagem && jogador.url_imagem !== ''
                  ? jogador.url_imagem
                  : `https://via.placeholder.com/150x150.png?text=${jogador.nome[0]}`,
            }}
            style={styles.playerImage}
          />
          <Text style={styles.playerName}>{jogador.nome}</Text>

          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailText}>Time: {jogador.time ?? 'Não informado'}</Text>
              {imagens.times[jogador.time] && (
                <Image source={{ uri: imagens.times[jogador.time] }} style={styles.logoTime} />
              )}
            </View>

            <Text style={styles.detailText}>Posição: {jogador.posicao ?? 'Não informado'}</Text>
            <Text style={styles.detailText}>Idade: {jogador.idade ?? 'Não informado'}</Text>

            <View style={styles.detailRow}>
              <Text style={styles.detailText}>
                Nacionalidade: {jogador.nacionalidade ?? 'Não informado'}
              </Text>
              {imagens.bandeiras[jogador.nacionalidade] && (
                <Image source={{ uri: imagens.bandeiras[jogador.nacionalidade] }} style={styles.bandeira} />
              )}
            </View>
          </View>
        </View>

        <Footer navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 80,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  playerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    backgroundColor: '#555',
  },
  playerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  detailText: {
    fontSize: 18,
    color: '#fff',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoTime: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  bandeira: {
    width: 30,
    height: 20,
    marginLeft: 10,
    resizeMode: 'contain',
    borderRadius: 3,
  },
});
