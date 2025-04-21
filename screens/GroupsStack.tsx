// screens/GroupsStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupsScreen from './GroupsScreen';
import GroupDetailsScreen from './GroupDetailsScreen';

const Stack = createNativeStackNavigator();

export default function GroupsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GroupsList" component={GroupsScreen} options={{ title: 'Группы' }} />
      <Stack.Screen name="GroupDetails" component={GroupDetailsScreen} options={{ title: 'Инфо о группе' }} />
    </Stack.Navigator>
  );
}
