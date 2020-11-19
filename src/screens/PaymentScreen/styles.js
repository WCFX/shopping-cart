import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerItem: {
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  textFood: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
  },
  textSideDish: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 18,
  },
  textPrice: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
  },
  buttonFood: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sideDishContainerColumn: {
    flexDirection: 'column',
    marginVertical: 20,

  },
  sideDishContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  }
  
});


export default styles;