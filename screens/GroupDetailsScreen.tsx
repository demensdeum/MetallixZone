import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GroupDetailsScreen({ route }) {
  const { bandName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bandName}</Text>
      <Text style={styles.description}>
        Здесь будет информация о группе {bandName}. Можно добавить альбомы, жанр, годы активности, участников и т.д.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
  },
});
