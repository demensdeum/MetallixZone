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
  { id: '1', name: 'Black Metal Brotherhood' },
  { id: '2', name: 'Doom & Sludge Collective' },
  { id: '3', name: 'Thrash United' },
  { id: '4', name: 'Power Metal Warriors' },
  { id: '5', name: 'Death Metal Alliance' },
  { id: '6', name: 'Folk Metal Circle' },
  { id: '7', name: 'Progressive Metalheads' },
  { id: '8', name: 'Metalcore Moshpit' },
  { id: '9', name: 'Symphonic Darkness' },
  { id: '10', name: 'Old School Metalheads' },
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
