import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerItem: {
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderColor: '#ccc',
    marginHorizontal: 20,
    marginTop: 20,
  },
  textFood: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 22,
    color: '#424242',
  },
  textSideDish: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
    color: '#595959',
  },
  textPrice: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
    color: '#424242',
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