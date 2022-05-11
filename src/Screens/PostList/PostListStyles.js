import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  renderContainer: {
    backgroundColor: 'black',
  },
  innerView: {
    borderWidth: 2,
    backgroundColor: 'coral',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
  },
  safeview: {
    backgroundColor: 'black',
    flex: 1,
  },
  posttext: {
    fontSize: 40,
    color: 'white',
    alignSelf: 'center',
  },
  add: {
    fontSize: 40,
    color: 'white',
    alignSelf: 'center',
  },
  image: {
    height: 120,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  textViews: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 3,
    width: '100%',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
