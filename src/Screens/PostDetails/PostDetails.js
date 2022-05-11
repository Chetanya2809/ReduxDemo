import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from './PostDetailsStyle';
import cardDetails from '../../_redux/PostDetails/action';

export default function Second({route}) {
  const dispatch=useDispatch()
  const {comm}=useSelector(store=>store.CommReducer)
  const [show, setShow] = useState(false);

  useEffect(() => {
   dispatch(cardDetails(route))
  }, [route.params.DATA.id]);

  const _renderItem = ({item}) => {
    console.log('item', item);
    return (
      show && (
        <View style={styles.renderbody}>
           <Image
          style={styles.image}
          source={{uri:'https://picsum.photos/200/300'}}
          />
          <Text>{item.body} </Text>
        </View>
      )
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainView}>
        <View style={styles.cardview}>
          <Text style={styles.text}>{route.params.DATA.id}</Text>
          <Text style={styles.text2}>{route.params.DATA.title} </Text>
        </View>
      </View>
      <Text style={styles.text1}>Comments</Text>
      <Text
        style={styles.showText}
        onPress={() => {
          setShow(!show);
        }}>
        {!show ? 'Show' : 'Hide'}
      </Text>
      <FlatList
        style={styles.flatView}
        data={comm}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
}

