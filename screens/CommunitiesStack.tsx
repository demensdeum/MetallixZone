// screens/CommunitiesStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommunitiesScreen from './CommunitiesScreen';
import CommunityDetailsScreen from './CommunityDetailsScreen';

const Stack = createNativeStackNavigator();

export default function CommunitiesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Communities" component={CommunitiesScreen} options={{ title: 'Сообщества' }} />
      <Stack.Screen name="CommunityDetails" component={CommunityDetailsScreen} options={{ title: 'Детали сообщества' }} />
    </Stack.Navigator>
  );
}
