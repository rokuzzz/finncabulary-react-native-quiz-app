import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 15,
    marginBottom: 10,

    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',

    color: '#000080',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    paddingHorizontal: 15,
    marginBottom: 40,

    fontSize: 18,
    textAlign: 'center',

    color: '#000080',
  },
});

export { styles };
