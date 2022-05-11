import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './AddDataStyle';
import {useDispatch} from 'react-redux';
import { AddedData} from '../../_redux/Post/action';

const Index = ({navigation,route}) => {
  console.log('prp', route);
  const [data, setData] = useState('');
  const [details, setDetails] = useState('');
  const dispatch = useDispatch();

  const addedData = () => {
    dispatch(AddedData(data,details))
    navigation.navigate('Index')
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.View}>
        <TextInput
       
          placeholder="Data...."
          style={styles.txtInp}
          value={data}
          onChangeText={value => {
            setData(value);
          }}
          clearButtonMode="always"
          multiline={true}
        />
        <TextInput

          placeholder="Details...."
          style={styles.txtInp}
          value={details}
          onChangeText={value => {
            setDetails(value);
          }}
          clearButtonMode="always"
          multiline={true}
        />
      </View>
      <TouchableOpacity
      disabled={data == "" || details == ""}
      style={styles.tchView} onPress={addedData}
      >
        <Text>{"Add"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;

