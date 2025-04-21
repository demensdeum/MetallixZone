import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity, TextInput
} from 'react-native';
import styles from '../styles';

export default function PostRepliesScreen({ route }) {
  const { post } = route.params;
  const [replies, setReplies] = React.useState([]);
  const [replyText, setReplyText] = React.useState('');

  const handleReply = () => {
    if (replyText.trim()) {
      setReplies([{ id: Date.now().toString(), text: replyText }, ...replies]);
      setReplyText('');
    }
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.articleTitle}>Ответы на пост:</Text>
      <Text style={styles.articleContent}>{post.text}</Text>

      <View style={styles.postBox}>
        <TextInput
          style={styles.postInput}
          placeholder="Оставь комментарий..."
          placeholderTextColor="#888"
          value={replyText}
          onChangeText={setReplyText}
        />
        <TouchableOpacity style={styles.postButton} onPress={handleReply}>
          <Text style={styles.postButtonText}>Ответить</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={replies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postItemContainer}>
            <Text style={styles.postItem}>{item.text}</Text>
            <Text style={styles.postLike}>❤️</Text>
          </View>
        )}
      />
    </View>
  );
}
