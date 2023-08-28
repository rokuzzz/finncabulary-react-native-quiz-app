import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomButton from '../components/authentication/CustomButton';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <CustomButton
        onPress={() => FIREBASE_AUTH.signOut()}
        text='Logout'
        type='PRIMARY'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default ProfileScreen;
