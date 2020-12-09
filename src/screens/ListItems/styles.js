import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerItem: {
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderColor: '#00d4df',
    marginHorizontal: 20,
    marginTop: 20,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 5,
  },
  principalFood: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    alignItems: 'center',
  },
  sideDishContainerColumn: {
    flexDirection: 'column',
    marginVertical: 20,
  },
  sideDishContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonAdd: {
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonAdd2: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  containerOrder: {
    height: '14%',
    borderTopWidth: 1,
    borderTopColor: '#00d4df',
    backgroundColor: '#e9e9e9',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    borderBottomColor: '#424242',
  },
  textOrder: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 22,
    color: '#424242',
  },
});

export default styles;
