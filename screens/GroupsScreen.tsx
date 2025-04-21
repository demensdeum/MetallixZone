import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

const metalBands = [
  'Metallica',
  'Slayer',
  'Iron Maiden',
  'Pantera',
  'Megadeth',
  'Black Sabbath',
  'Sepultura',
  'Gojira',
  'Behemoth',
  'Death',
  'Opeth',
  'Katatonia',
  'Judas Priest',
  'Tool',
  'Korn',
  'Lamb of God',
  'Napalm Death',
  'Cannibal Corpse',
  'Slipknot',
  'Ghost',
];

export default function GroupsScreen() {
  const navigation = useNavigation();

  return (
    <View style={localStyles.container}>
      <Text style={[styles.tabText, { marginVertical: 16 }]}>Метал-группы</Text>
      <FlatList
        data={metalBands}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('GroupDetails', { bandName: item })}
          >
            <Text style={localStyles.bandItem}>• {item}</Text>
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
  bandItem: {
    fontSize: 18,
    marginVertical: 6,
    color: '#fff',
  },
});
