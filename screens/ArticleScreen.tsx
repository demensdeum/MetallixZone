import React from 'react';
import { ScrollView, Text } from 'react-native';
import styles from '../styles';

export default function ArticleScreen({ route }) {
  const { title, content } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.articleContainer}>
      <Text style={styles.articleTitle}>{title}</Text>
      <Text style={styles.articleContent}>{content}</Text>
    </ScrollView>
  );
}
