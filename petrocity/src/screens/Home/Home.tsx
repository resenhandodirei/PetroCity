import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/types"; // Adjust the import path as necessary
import  styles from "./HomeStyles";

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const widthValue = `${50}%`; // Equivalente a UIScreen.main.bounds.width * 0.5

  return (
    <View style={styles.container}>
      <View style={styles.spacer} />
      <View style={styles.iconContainer}>
        <Image
          source={require("./assets/cat-icon.png")} // Substitua com seu ícone de gato
          style={styles.icon}
        />
        <Image
          source={require("./assets/dog-icon.png")} // Substitua com seu ícone de cachorro
          style={[styles.icon, styles.dogIcon]} // Espelhado horizontalmente
        />
      </View>
      <Text style={styles.title}>
        Selecione quais animais fofinhos você deseja visualizar
      </Text>

      <TouchableOpacity
        style={[styles.button, { width: widthValue }]}
        onPress={() => navigation.navigate("CatsView")}
      >
        <Text style={styles.buttonText}>Ver gatos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { width: widthValue }]}
        onPress={() => navigation.navigate("DogsView")}
      >
        <Text style={styles.buttonText}>Ver cachorrinhos</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
    </View>
  );
};

export default Home;
