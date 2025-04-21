import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ArticleScreen from './ArticleScreen';
import MessagesScreen from './MessagesScreen';
import PostRepliesScreen from './PostRepliesScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Лента" component={HomeScreen} />
      <Stack.Screen name="PostReplies" component={PostRepliesScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
}
