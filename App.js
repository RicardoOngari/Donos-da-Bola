import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import api from './src/services/api';

import HomeScreen from './src/screens/HomeScreen';
import FavoritosScreen from './src/screens/FavoritosScreen';
import EditPlayerScreen from './src/screens/EditPlayerScreen';
import AddPlayerScreen from './src/screens/AddPlayerScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': Montserrat_700Bold,
  });

  const [favoritos, setFavoritos] = useState([]);
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    const fetchJogadores = async () => {
      try {
        // Aqui, só usar '/' porque baseURL já aponta para '/api/jogadores'
        const response = await api.get('/');
        setJogadores(response.data);
      } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
      }
    };
    fetchJogadores();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Carregando fontes...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' },
          }}
        >
          <Stack.Screen name="Home">
            {(props) => (
              <HomeScreen
                {...props}
                jogadores={jogadores}
                favoritos={favoritos}
                setFavoritos={setFavoritos}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Favoritos">
            {(props) => (
              <FavoritosScreen
                {...props}
                favoritos={favoritos}
                setFavoritos={setFavoritos}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Add">
            {(props) => (
              <AddPlayerScreen
                {...props}
                setJogadores={setJogadores}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Edit" component={EditPlayerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
