import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
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
  'Slipknot',
  'Deftones',
  'Limp Bizkit',
  'Linkin Park',
  'Mudvayne',
  'Static-X',
  'Coal Chamber',
  'Papa Roach',
  'Ill Niño',
  'Bring Me The Horizon',
  'Architects',
  'Motionless In White',
  'Bad Omens',
  'While She Sleeps',
  'Northlane',
  'Currents',
  'Polaris',
  'Spiritbox',
  'Loathe',
  'Thornhill',
  'Fit For A King',
  'Make Them Suffer',
  'As I Lay Dying',
  'Parkway Drive',
  'Lamb of God',
  'Napalm Death',
  'Cannibal Corpse',
  'Chelsea Grin',
  'Whitechapel',
  'Suicide Silence',
  'Thy Art Is Murder',
  'Shadow of Intent',
  'Sleep Token',
  'I Prevail',
  'Wage War',
  'Starset',
  'Breaking Benjamin',
  'Nothing More',
  'Ice Nine Kills',
  'Ghost',
];

export default function GroupsScreen() {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');

  const filteredBands = metalBands.filter((band) =>
    band.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={localStyles.container}>
      <Text style={[styles.tabText, { marginVertical: 16 }]}>Метал-группы</Text>

      <TextInput
        style={localStyles.searchInput}
        placeholder="Поиск по названию..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filteredBands}
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
  searchInput: {
    backgroundColor: '#111',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 12,
    borderColor: '#333',
    borderWidth: 1,
  },
});
