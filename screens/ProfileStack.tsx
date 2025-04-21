import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';
import MessagesScreen from './MessagesScreen';
import ChatScreen from './ChatScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профиль' }} />
      <Stack.Screen name="Messages" component={MessagesScreen} options={{ title: 'Сообщения' }} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title: 'Чат' }} />
    </Stack.Navigator>
  );
}
