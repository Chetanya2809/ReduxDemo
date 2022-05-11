import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    image: {
      height: 30,
      width: '10%',
      borderRadius: 20,
      alignSelf:'flex-start'
    },
    renderbody: {
      borderWidth: 2,
      backgroundColor: 'coral',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderRadius: 20,
    },
    mainView: {
      backgroundColor: 'black',
      flex: 0.3,
    },
    flatView: {
      backgroundColor: 'black',
      flex: 0.7,
    },
    text: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
    },
    text1: {
      color: 'white',
      backgroundColor: 'black',
      fontSize: 30,
      fontWeight: '500',
    },
    cardview: {
      borderWidth: 2,
      backgroundColor: 'coral',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderRadius: 20,
    },
    text2: {
      fontSize: 20,
      color: 'white',
    },
    showText: {
      fontSize: 20,
      backgroundColor: 'black',
      color: 'white',
    },
  });

  export default styles