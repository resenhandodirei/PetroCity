import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image } from 'react-native';
import api from '../../services/api'; // Importa o serviço de API
import { styles } from './CatsViewStyles'; // Importa os estilos do arquivo separado

// Define a interface para o estado do componente
interface AppState {
  cats: { url: string }[]; // Ajustado para refletir os dados retornados pela API
  error: string | null;
}

// Componente que renderiza informações de cada gato
interface CatsProps {
  data: { url: string }; // Ajustado para refletir os dados corretos
}

class Cats extends React.Component<CatsProps> {
  render() {
    return (
      <View style={styles.catItem}>
        <Image style={styles.foto} source={{ uri: this.props.data.url }} />
      </View>
    );
  }
}

// Componente principal que consome a API e exibe os gatos
export default class CatsView extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      cats: [],
      error: null,
    };
  }

  // Método chamado quando o componente for montado
  async componentDidMount() {
    try {
      const catsData = await api.fetchCats(); // Chama a função fetchCats
      this.setState({ cats: catsData }); // Atualiza o estado com os dados retornados
    } catch (error) {
      this.setState({ error: 'Erro ao carregar os gatos' });
    }
  }

  render() {
    const { cats, error } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        {error && <Text style={styles.error}>{error}</Text>}
        <FlatList
          data={cats}
          keyExtractor={(_, index) => index.toString()} // Usando índice como chave
          renderItem={({ item }) => <Cats data={item} />}
          contentContainerStyle={styles.list}
        />
      </SafeAreaView>
    );
  }
}
