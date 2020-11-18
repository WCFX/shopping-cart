import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFlatlist: {

  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  title: {
    fontSize: 22,
    color: '#000'
  },
  description: {
    color: '#000'
  },
  price: {
    color: '#000'
  },
});


export default styles;