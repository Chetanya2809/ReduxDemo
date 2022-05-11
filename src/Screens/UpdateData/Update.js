import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../AddData/AddDataStyle';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const Index = ({navigation, route}) => {
  const {id} = route.params.item;
  const {index} = route.params;
  const [newtitle, setTitle] = useState(route.params.item.title);
  const [newbody, setBody] = useState(route.params.item.body);
  const dispatch = useDispatch();
  const {userData} = useSelector(store => store.userDataReducer);

  const update = () => {
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: newtitle,
        body: newbody,
      })
      .then(res => {
        const newData = userData;
        newData[index] = res.data;
        dispatch({type: 'UPDATE', payload: newData});
      });
    navigation.navigate('Index');
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.View}>
        <TextInput
          placeholder="Data...."
          style={styles.txtInp}
          value={newtitle}
          onChangeText={value => {
            setTitle(value);
          }}
          clearButtonMode="always"
          multiline={true}
        />
        <TextInput
          placeholder="Details...."
          style={styles.txtInp}
          value={newbody}
          onChangeText={value => {
            setBody(value);
          }}
          clearButtonMode="always"
          multiline={true}
        />
      </View>
      <TouchableOpacity style={styles.tchView} onPress={update} disabled={newtitle == '' || newbody == ''}
      
      >
        <Text>{'Update'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;
