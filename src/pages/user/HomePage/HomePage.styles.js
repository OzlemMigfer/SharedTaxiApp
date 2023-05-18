import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: 'absolute',
    width: 600,
    height: 800,
  },
  header:{
    marginTop:20,
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    marginLeft:22,
    fontStyle:'italic'
  },
  body_container:{
    marginTop:25,
  },
  start_text:{
    fontSize:17,
    fontWeight:'bold',
    color:'#ffd017',
    marginLeft:22,
    marginBottom:-10
  },
  dropdown: {
    margin: 18,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  placeholderStyle: {
    //placeholder
    fontSize: 15,
    fontWeight: '400',
    color: '#fff1b9',
  },
  selectedTextStyle: {
    //listeden seçilen özellik
    fontSize: 15,
    color: '#fff1b9',
  },
  inputSearchStyle: {
    //arama çubuğu
    height: 40,
    fontSize: 16,
    borderColor: 'black',
    borderRadius: 5,
  },
  textItem:{
    color:'black',
    fontSize:15,
    fontWeight:'bold',
    marginLeft:8,
    marginBottom:3
  },
  footer_container: {
    marginTop: 450,
    alignSelf: 'flex-end',
    marginRight: 16,
    flexDirection:'row'
  },
  button_next: {
    backgroundColor: '#3e2ab8',
    alignItems: 'center',
    padding: 10,
    width: 100,
    marginTop: 20,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  button_next_text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 22,
    borderLeftWidth: 35,
    borderBottomWidth: 22,
    borderTopColor: 'transparent',
    borderRightColor:'transparent',
    borderBottomColor:'transparent',
    borderColor:'#3e2ab8',
    marginTop:20
  },
});
