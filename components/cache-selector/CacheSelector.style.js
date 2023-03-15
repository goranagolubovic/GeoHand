import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    title: {
      color: '#144e5a',
      fontSize: 20,
      fontWeight: '600'
    },
    switch:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    switchButton: {
        //transform: [{ scaleX: .8 }, { scaleY: .8 }] 
    }
  });

  export default styles;