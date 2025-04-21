import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

const news = [
  {
    id: '1',
    title: 'Slayer объявили воссоединение на 2025 год!',
    content: 'Полный состав возвращается на сцену и объявляет мировой тур.',
  },
  {
    id: '2',
    title: 'Metallica выпускает ремастеры старых альбомов',
    content: 'Все классические альбомы получат новое звучание и редкие бонусы.',
  },
  {
    id: '3',
    title: 'Новый альбом Behemoth выйдет в мае',
    content: 'Готовится мрачнейшая запись в истории коллектива.',
  },
  {
    id: '4',
    title: 'Iron Maiden запускают тур по Европе',
    content: 'Легендарная группа снова в дороге с новым шоу и декорациями.',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Article', { title: item.title, content: item.content })}>
            <Text style={styles.homeItem}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
