import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    marginBottom: 2,
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
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#add8e6',
    marginVertical: 5,
    width: 150,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    color: '#000080',
    fontWeight: 'bold',
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
