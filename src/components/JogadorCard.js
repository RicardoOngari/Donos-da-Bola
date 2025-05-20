import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image as RNImage } from 'react-native';
import { Image } from 'expo-image';
import { FontAwesome } from '@expo/vector-icons';
import imagens from '../../utils/imagens';

const JogadorCard = ({
  jogador,
  isFavorito = false,
  onViewPress,
  onDeletePress,
  onFavoritePress,
  showFavorite = false,
  showDelete = false
}) => {
  const [showMsgFavorito, setShowMsgFavorito] = useState(false);

  const normalizarNomeTime = (nome) => {
    if (!nome) return '';
    return nome
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '')
      .replace(/-/g, '')
      .toLowerCase();
  };

  const imagensTimesNormalizadas = useMemo(() => {
    return Object.fromEntries(
      Object.entries(imagens.times).map(([key, value]) => [
        normalizarNomeTime(key),
        value
      ])
    );
  }, []);

  const handleFavoritePress = async () => {
    if (onFavoritePress) {
      await onFavoritePress(jogador.id);
    }
    setShowMsgFavorito(true);
    setTimeout(() => setShowMsgFavorito(false), 2000);
  };

  const escudoTime =
    imagensTimesNormalizadas[normalizarNomeTime(jogador.time)] ||
    'https://via.placeholder.com/32x32.png?text=T';
  const bandeira =
    imagens.bandeiras[jogador.nacionalidade] ||
    'https://via.placeholder.com/32x24.png?text=B';

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image
          source={{ uri: jogador.url_imagem }}
          style={styles.playerImage}
          placeholder={{ uri: `https://via.placeholder.com/100x100.png?text=${jogador.nome[0]}` }}
          transition={300}
          contentFit="cover"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.playerName} numberOfLines={1}>
            {jogador.nome}
          </Text>
          <View style={styles.flagsContainer}>
            <RNImage source={{ uri: escudoTime }} style={styles.icon} />
            <RNImage source={{ uri: bandeira }} style={styles.icon} />
          </View>
        </View>

        {/* BOTÕES E MENSAGEM */}
        <View style={styles.buttonsContainer}>
          {showMsgFavorito && <Text style={styles.msgFavorito}>Favoritado!</Text>}

          <View style={styles.buttonsRow}>
            <TouchableOpacity onPress={() => onViewPress(jogador)} style={styles.iconButton} activeOpacity={0.7}>
              <FontAwesome name="eye" size={20} color="#fff" />
            </TouchableOpacity>

            {showFavorite && (
              <TouchableOpacity onPress={handleFavoritePress} style={styles.iconButton} activeOpacity={1}>
                <FontAwesome name={isFavorito ? 'bookmark' : 'bookmark-o'} size={20} color="#fff" />
              </TouchableOpacity>
            )}

            {showDelete && (
              <TouchableOpacity
                onPress={() => onDeletePress(jogador.id)}
                style={styles.iconButton}
                activeOpacity={0.7}
              >
                <FontAwesome name="trash" size={20} color="#ff4444" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 20, 31, 0.8)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 74, 124, 0.3)',
    shadowColor: '#004a7c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },
  playerImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#003350',
  },
  infoContainer: {
    flex: 1,
    marginRight: 8,
  },
  playerName: {
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    marginBottom: 4,
  },
  flagsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  icon: {
    width: 28,
    height: 20,
    borderRadius: 4,
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -8,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 6,
    marginLeft: 4,
  },
  msgFavorito: {
    marginBottom: 6,
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 13,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    textAlign: 'center',
  },
});

export default JogadorCard;
