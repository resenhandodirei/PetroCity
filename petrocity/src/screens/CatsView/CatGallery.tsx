import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ScrollView, ActivityIndicator, Text } from 'react-native';
import { fetchCatImages, CatImage } from '../../services/api';

const CatGallery: React.FC = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadImages = async () => {
      const images = await fetchCatImages(10);
      setCatImages(images);
      setLoading(false);
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {catImages.map((cat) => (
          <Image
            key={cat.id}
            source={{ uri: cat.url }}
            style={styles.image}
            resizeMode="contain"
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CatGallery;
