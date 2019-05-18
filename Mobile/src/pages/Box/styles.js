import {StyleSheet}from 'react-native';

const styles = StyleSheet.create({
  container:
  {
   flex:1,
   backgroundColor:'#FFF'
  },
    boxTitle:
  {
      marginTop:50,
      textAlign:'center',
      fontSize:24,
      fontWeight:'bold',
      color:'#34D35F'
  },
  list:
  {
      marginTop:30
  },
  file:
  {
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 20
  },
  separator:
  {
      height:1,
      backgroundColor: '#FFF',
  },
  fileInfo:
  {
      flexDirection:'row',
      alignItems:'center'
  },
  fileTitle:
  {
      fontSize:16,
      color:'#34D35F',
  }
});

export default styles;