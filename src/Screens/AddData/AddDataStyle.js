import {StyleSheet, Dimensions} from 'react-native';

const {width,height}=Dimensions.get('screen')
const styles = StyleSheet.create({
    safeView: {flex: 1},
    tchView: {
      alignItems: 'center',
      width: width / 3,
      borderRadius: 10,
      borderWidth: 1,
      justifyContent: 'center',
      height: height / 20,
      alignSelf: 'center',
      backgroundColor: '#00B8D4',
    },
    txtInp: {
      borderWidth: 1,
      width: width / 1.4,
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
  
    View: {
      borderRadius: 10,
      margin: 30,
      borderWidth: 1,
      height: height / 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
    },
  });

  export default styles
  