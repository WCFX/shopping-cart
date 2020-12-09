import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#b9b9b9',
  },
  title: {
    fontSize: 36,
    color: '#eee',
    fontFamily: 'Archivo_700Bold',
    marginBottom: 20,
  },
  backgroundImg: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOrder: {
    width: 300,
    height: 50,
    backgroundColor: '#01868b',
    borderWidth: 1,
    borderColor: '#01999c',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  buttonOrderText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 18,
    color: '#eee',
  },
});

export default styles;
