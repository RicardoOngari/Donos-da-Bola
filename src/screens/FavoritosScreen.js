import React from 'react';
import { View, FlatList, StyleSheet, ImageBackground, Text } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JogadorCard from '../components/JogadorCard';

export default function FavoritosScreen({ navigation, favoritos, setFavoritos }) {
  const removeFavorito = (jogador) => {
    setFavoritos(prev => prev.filter(fav => fav.nome !== jogador.nome));
  };

  return (
    <ImageBackground source={require('../../assets/fundo.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Header />
        {favoritos.length > 0 ? (
          <FlatList
            data={favoritos}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => (
              <JogadorCard 
                jogador={item}
                isFavorito={true}
                onViewPress={() => navigation.navigate('Edit', { jogador: item })}
                onDeletePress={() => removeFavorito(item)}
                showFavorite={false}
                showDelete={true}
              />
            )}
            contentContainerStyle={styles.listContent}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum jogador favoritado ainda</Text>
          </View>
        )}
        <Footer navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1, paddingTop: 40, paddingBottom: 80, paddingHorizontal: 20 },
  listContent: { paddingBottom: 20 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 18, color: '#fff' }
});
