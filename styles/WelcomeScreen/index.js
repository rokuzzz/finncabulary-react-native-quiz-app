import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    marginBottom: 2,

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  slogan: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: 'white',
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  button: {
    width: 150,
    padding: 10,
    marginVertical: 5,

    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#add8e6',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#000080',
  },
});

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.button, { backgroundColor: '#add8e6' }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export { styles, CustomButton };
