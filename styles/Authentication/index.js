import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#000080',
    paddingHorizontal: 15,
    marginBottom: 10,

    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000080',
    paddingHorizontal: 15,
    marginBottom: 40,
  },
});

export { styles };
