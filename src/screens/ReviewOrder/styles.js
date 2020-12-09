import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  containerOrder: {
    height: '35%',
    borderTopWidth: 1,
    borderTopColor: '#00d4df',
    backgroundColor: '#e9e9e9',
    paddingHorizontal: 20,
  },
  containerOrderValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  totalItensText: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 18,
    color: '#595959',
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
  containerPicker: {
    width: '100%',
  },
  containerPickerText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    color: '#424242',
  },
});

export default styles;
