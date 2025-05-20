import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Footer({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.7}
        accessibilityLabel="Ir para página inicial"
      >
        <FontAwesome name="home" size={32} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Add')}
        style={styles.addButton}
        activeOpacity={0.7}
        accessibilityLabel="Adicionar novo jogador"
      >
        <FontAwesome name="plus" size={32} color="#ddd" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Favoritos')}
        activeOpacity={0.7}
        accessibilityLabel="Ver jogadores favoritos"
      >
        <FontAwesome name="bookmark" size={32} color="#ccc" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(55, 65, 81, 0.7)',
    borderRadius: 100,
    paddingHorizontal: 30,
    paddingVertical: 12,
    width: '90%',
    maxWidth: 400,
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  addButton: {
    backgroundColor: '#4B5563',
    borderRadius: 100,
    padding: 14,
  },
});
