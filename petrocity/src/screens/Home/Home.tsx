import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import styles from "./HomeStyles"; // Certifique-se de que o arquivo está no caminho correto

// Defina as possíveis rotas do aplicativo
type RootStackParamList = {
  CatsView: undefined;
  DogsView: undefined;
};

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Tipagem da navegação

  return (
    <View style={styles.container}>
      <View style={styles.spacer} />

      <Text style={styles.title}>
        Selecione quais animais fofinhos você deseja visualizar
      </Text>

      <TouchableOpacity
        style={[styles.button, { width: "50%" }]} // Largura dinâmica para o botão
        onPress={() => navigation.navigate("CatsView")}
      >
        <Text style={styles.buttonText}>Ver gatinhos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { width: "50%" }]}
        onPress={() => navigation.navigate("DogsView")}
      >
        <Text style={styles.buttonText}>Ver cachorrinhos</Text>
      </TouchableOpacity>

      <View style={styles.spacer} />
    </View>
  );
};

export default Home;
