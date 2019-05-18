import {StyleSheet}from 'react-native';

const styles = StyleSheet.create({
  container:
  {
      flex:1,
      justifyContent: 'center',
      alignItems: 'stretch',
      paddingHorizontal: 30,
      backgroundColor: '#000',
  },
  logo:
  {
      width:180,
      height:180,
      alignSelf: 'center',
  },
  input:
  {
      height:48,
      backgroundColor:"#696969",
      borderWidth: 1,
      borderRadius: 5,
      fontSize: 15,
      paddingHorizontal:20,
      marginTop: 30
  },
  button:
  {
    height:48,
    backgroundColor:"#34D35F",
    borderRadius: 5,
    paddingHorizontal:20,
    marginTop: 20,
    justifyContent:'center',
    alignItems:'center'

  },
  TxtButton:
  {
      fontWeight:'bold',
      fontSize: 16,
      color:'#000'


  }
});

export default styles;