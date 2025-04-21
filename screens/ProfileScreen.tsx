import React, { useLayoutEffect, useState } from 'react';
const userId = 'demensdeum';
const profileLink = `https://metalapp.com/user/${userId}`;
import { Linking, Share } from 'react-native';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import styles from '../styles';

export default function ProfileScreen({ navigation }) {
  const [input, setInput] = useState('');

  const initialPosts = [
    { id: '1', text: 'Только что переслушал альбом Slayer — всё ещё шик!' },
    { id: '2', text: 'Жду концерт БАУ в нашем городе! Кто идёт?' },
    { id: '3', text: 'Сегодня на репетиции родился новый рифф 🤘' },
  ];

  const favoriteBands = [
    'Slayer',
    'BАУ',
    'Behemoth',
    'Motionless In White',
    'Ghost',
  ];

  const [posts, setPosts] = useState(initialPosts);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Messages')}
          style={{ marginRight: 16 }}
        >
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
    <TouchableOpacity
      onPress={() => navigation.navigate('PostReplies', { post: item })}
    >
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

          <TouchableOpacity
            style={{
              backgroundColor: '#222',
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderRadius: 8,
              marginTop: 16,
              alignSelf: 'center',
            }}
            onPress={() =>
              Share.share({
                message: `Посмотри профиль true металлиста: ${profileLink}`,
              })
            }
          >
            <Text style={{ color: '#fff', fontSize: 16 }}>📤 Поделиться профилем</Text>
          </TouchableOpacity>

          <Text style={[styles.tabText, { marginTop: 20, marginBottom: 8 }]}>Любимые группы:</Text>
          <Text style={styles.postItem}>
            {favoriteBands.join(', ')}
          </Text>

          <Text style={[styles.tabText, { marginTop: 20, marginBottom: 8 }]}>Соцсети:</Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            <TouchableOpacity onPress={() => Linking.openURL('https://t.me/demensdeum')}>
              <Text style={styles.postItem}>📱 Telegram</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/demensdeum')}>
              <Text style={styles.postItem}>🐙 Instagram</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/@demensdeum_live')}>
              <Text style={styles.postItem}>▶️ YT</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://x.com/demensdeum')}>
              <Text style={styles.postItem}>✖️ X</Text>
            </TouchableOpacity>
          </View>

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
