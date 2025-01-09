import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import api from './src/services/api'; // Presumo que api seja uma instância do axios ou fetch

import Home from './src/screens/Home/Home'; // Verifique o caminho do componente Home

// Definição de tipos para navegação (caso tenha parâmetros ou não)
type RootStackParamList = {
  Home: undefined; // Ou adicione os parâmetros necessários
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [data, setData] = useState<any>(null); // Modifique o tipo conforme necessário

  // Função para consumir a API REST
  const fetchData = async () => {
    try {
      const response = await api.get('/endpoint'); // Substitua pelo seu endpoint real
      setData(response.data); // Armazena os dados na variável de estado
    } catch (error) {
      console.error('Erro ao consumir a API', error);
    }
  };

  useEffect(() => {
    fetchData(); // Chama a função quando o componente é montado
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <Home {...props} data={data} />}
        </Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
});
