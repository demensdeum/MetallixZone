import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

const communities = [
  { id: '1', name: 'Братство Чёрного Метала' },
  { id: '2', name: 'Дум и Слякоть' },
  { id: '3', name: 'Трэш-Юниты' },
  { id: '4', name: 'Воины Пауэр-Метала' },
  { id: '5', name: 'Смертельный Альянс Металистов' },
  { id: '6', name: 'Фолк-метал под балалайку' },
  { id: '7', name: 'Прогрессивщики, что не прогулялись' },
  { id: '8', name: 'Мошпит с ямой и лосинами' },
  { id: '9', name: 'Симфоническая тьма и пафос' },
  { id: '10', name: 'Олдскул, тяжёлый рок и пиво' },
  { id: '11', name: 'Гранджеры из подвала' },
  { id: '12', name: 'Нирвана, фланель и тоска' },
  { id: '13', name: 'Меч и Дракон: Пауэр-Метал клан' },
  { id: '14', name: 'Песни про эльфов и двойной куплет' },
];


type Community = {
  id: string;
  name: string;
};

export default function CommunitiesScreen() {
  const navigation = useNavigation();

  const handlePress = (community: Community) => {
    navigation.navigate('CommunityDetails', { communityId: community.id });
  };

  return (
    <View style={localStyles.container}>
      <Text style={[styles.tabText, { marginVertical: 16 }]}>Метал-сообщества</Text>
      <FlatList
        data={communities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text style={localStyles.communityItem}>• {item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  communityItem: {
    fontSize: 18,
    marginVertical: 6,
    color: '#fff',
  },
});
