import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import styles from '../styles';

export default function ProfileScreen({ navigation }) {
  const [input, setInput] = React.useState('');

  const initialPosts = [
    { id: '1', text: 'Только что переслушал альбом Slayer — всё ещё шик!' },
    { id: '2', text: 'Жду концерт Gojira в нашем городе! Кто идёт?' },
    { id: '3', text: 'Сегодня на репетиции родился новый рифф 🤘' },
  ];

  const [posts, setPosts] = React.useState(initialPosts);

  // 👇 Добавляем кнопку "Сообщения" в заголовок
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Messages')} style={{ marginRight: 16 }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>💬</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handlePost = () => {
    if (input.trim()) {
      setPosts([{ id: Date.now().toString(), text: input }, ...posts]);
      setInput('');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('PostReplies', { post: item })}>
      <View style={styles.postItemContainer}>
        <Text style={styles.postItem}>{item.text}</Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Text style={styles.postLike}>❤️</Text>
          <Text style={styles.postDelete}>Удалить</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={{ backgroundColor: '#111' }}
      contentContainerStyle={{ padding: 20 }}
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListHeaderComponent={
        <View style={styles.profileContainer}>
          <Image source={{ uri: 'https://i.pravatar.cc/200' }} style={styles.avatar} />
          <Text style={styles.profileName}>хеви-металист</Text>
          <Text style={styles.profileFlag}>🇧🇷</Text>
          <Text style={styles.profileDescription}>Статус: true metal 🤘</Text>
          <Text style={styles.profileDescription}>Люблю рок-метал. Играю в группе атланты тьмы.</Text>

          <View style={styles.postBox}>
            <Text style={styles.postLabel}>Новая мысль:</Text>
            <TextInput
              style={styles.postInput}
              placeholder="Напиши что-нибудь..."
              placeholderTextColor="#888"
              value={input}
              onChangeText={setInput}
            />
            <TouchableOpacity style={styles.postButton} onPress={handlePost}>
              <Text style={styles.postButtonText}>Опубликовать</Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.tabText, { marginBottom: 8 }]}>Недавние мысли:</Text>
        </View>
      }
    />
  );
}
