import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { styles } from './styles';
import { CHARACTER_URL, characterData } from './constants';

export function Card() {
  const [data, setData] = useState<characterData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(CHARACTER_URL)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((char) => (
        <View key={char.id} style={styles.card}>
          <View style={styles.viewimg}>
            <Image style={styles.img} source={{ uri: char.image }} />
          </View>
          <View style={styles.viewcard}>
            <Text style={styles.title}>{char.name}</Text>
            <Text>Status: {char.status}</Text>
            <Text>Specie: {char.species}</Text>
            <Text>Gender: {char.gender}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}


