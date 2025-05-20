import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Header({ onSearchPress, searchVisible, searchQuery, onSearchChange, onSearchBlur }) {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/titulo.png')}
        style={styles.titulo}
        resizeMode="contain"
      />
      
      {searchVisible ? (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar jogador..."
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={onSearchChange}
            autoFocus={true}
            onBlur={onSearchBlur}
            accessibilityLabel="Campo de busca de jogador"
          />
          <TouchableOpacity
            onPress={onSearchBlur}
            style={styles.closeButton}
            accessibilityLabel="Fechar busca"
            accessibilityRole="button"
          >
            <FontAwesome name="times" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={onSearchPress}
          style={styles.searchButton}
          accessibilityLabel="Abrir busca"
          accessibilityRole="button"
        >
          <FontAwesome name="search" size={28} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    width: 220,
    height: 60,
    maxWidth: '60%',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
  closeButton: {
    marginLeft: 10,
    padding: 10,
  },
  searchButton: {
    padding: 10,
  },
});
