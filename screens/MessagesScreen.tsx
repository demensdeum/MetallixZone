import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function MessagesScreen() {
  const navigation = useNavigation();

  const messages = [
    { id: '1', user: 'Алексей Гитарист', preview: 'Чувак, видел новый трек от Gojira?' },
    { id: '2', user: 'Наташа Металха', preview: 'Будешь на концерте в субботу?' },
    { id: '3', user: 'Сергей Барабан', preview: 'Погнали репетировать в гараж!' },
  ];

  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ChatScreen', { username: item.user })}
          >
            <Text style={styles.homeItem}>
              {item.user}: {item.preview}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
