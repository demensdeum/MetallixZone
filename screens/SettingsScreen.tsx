// screens/SettingsScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function SettingsScreen() {
  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.tabText}>Настройки профиля</Text>
    </View>
  );
}
