// screens/CommunityDetailsScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function CommunityDetailsScreen({ route }) {
  const { communityId } = route.params;

  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.tabText}>Информация о сообществе ID: {communityId}</Text>
    </View>
  );
}
