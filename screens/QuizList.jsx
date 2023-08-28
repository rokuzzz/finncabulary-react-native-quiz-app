import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const QuizList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        {
          'This page is under development.\n List of quizzes will be available soon.'
        }
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    textAlign: 'center',
  },
});

export default QuizList;
