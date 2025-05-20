import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ImageBackground, Text, Dimensions } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JogadorCard from '../components/JogadorCard';

const { height } = Dimensions.get('window');

export default function HomeScreen({ navigation, jogadores, favoritos, setFavoritos }) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [jogadoresFiltradosSemArthur, setJogadoresFiltradosSemArthur] = useState([]);
  const [filteredJogadores, setFilteredJogadores] = useState([]);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (searchVisible) {
      setSearchQuery('');
    }
  };

  // Filtra para remover Artur Jorge do Botafogo assim que a lista 'jogadores' mudar
  useEffect(() => {
    const filtrados = jogadores.filter(
      jogador => !(jogador.nome === 'Artur Jorge' && jogador.time === 'Botafogo')
    );
    setJogadoresFiltradosSemArthur(filtrados);
  }, [jogadores]);

  // Aplica filtro de busca sobre a lista já filtrada sem Artur
  useEffect(() => {
    if (searchQuery) {
      const filtered = jogadoresFiltradosSemArthur.filter(jogador =>
        jogador.nome?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        jogador.time?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        jogador.posicao?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredJogadores(filtered);
    } else {
      setFilteredJogadores(jogadoresFiltradosSemArthur);
    }
  }, [searchQuery, jogadoresFiltradosSemArthur]);

  const toggleFavorito = (jogador) => {
    setFavoritos(prev => {
      const isFavorito = prev.some(fav => fav._id === jogador._id);
      return isFavorito
        ? prev.filter(fav => fav._id !== jogador._id)
        : [...prev, jogador];
    });
  };

  return (
    <ImageBackground source={require('../../assets/fundo.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Header
          onSearchPress={toggleSearch}
          searchVisible={searchVisible}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <View style={styles.listContainer}>
          <FlatList
            data={filteredJogadores}
            keyExtractor={(item, index) => item._id ? item._id.toString() : index.toString()}
            renderItem={({ item }) => (
              <JogadorCard
                jogador={item}
                isFavorito={favoritos.some(fav => fav._id === item._id)}
                onViewPress={() => navigation.navigate('Edit', { jogador: item })}
                onFavoritePress={() => toggleFavorito(item)}
                showFavorite={true}
                showDelete={false}
              />
            )}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>
                  {searchQuery ? 'Nenhum jogador encontrado' : 'Nenhum jogador cadastrado'}
                </Text>
              </View>
            }
          />
        </View>

        <Footer navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  overlay: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 80,
    paddingHorizontal: 20
  },
  listContainer: {
    height: height * 0.65,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  emptyText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  }
});
