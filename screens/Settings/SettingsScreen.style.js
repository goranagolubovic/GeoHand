import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
    justifyContent:'space-evenly'
        },
    search:{
        height:30,
        width:250,
        marginTop:30,
        fontSize:10
       },
   content:{
    marginTop:60,
    width:300,
    height:300,
   },
    link:{
        color:"blue",
        textDecorationLine:"underline"
    }
  });

  export default styles