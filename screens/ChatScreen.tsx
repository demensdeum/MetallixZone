import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function ChatScreen({ route }) {
  const { username } = route.params;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', from: 'me', text: 'Брат, ты слышал новый альбом БАУ?' },
    { id: '2', from: 'them', text: 'Конечно! Риффы просто мясо!' },
    { id: '3', from: 'me', text: 'Думаешь идти на концерт в Питере?' },
    { id: '4', from: 'them', text: 'Да! Уже билет в кармане! 🤘' },
  ]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), from: 'me', text: input.trim() },
      ]);
      setInput('');
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.from === 'me' ? styles.myMessage : styles.theirMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Напиши что-нибудь..."
          placeholderTextColor="#777"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Отправить</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  messageBubble: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    maxWidth: '80%',
  },
  myMessage: {
    backgroundColor: '#333',
    alignSelf: 'flex-end',
  },
  theirMessage: {
    backgroundColor: '#222',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#222',
    backgroundColor: '#111',
  },
  input: {
    flex: 1,
    backgroundColor: '#222',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: '#444',
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
