import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {getUserList} from '../../_redux/Post/action';
import {getDelete} from '../../_redux/Post/action';
import styles from './PostListStyles';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const Index = ({navigation}) => {
  const dispatch = useDispatch();
  const {userData, start} = useSelector(store => store.userDataReducer);

  useEffect(() => {
    dispatch(getUserList());
  }, [start]);

  const _endReached = () => {
    console.log('end');
    dispatch({type: 'Increase', payload: start + 10});
  };

  const Delete = item => {
    dispatch(getDelete(item, userData));
  };

  const Updation=(index,item)=>{
 console.log(index)
 navigation.navigate('Update',{index,item})
  }

  const _renderItem = ({item}) => {
    return (
      item.title && (
        <TouchableOpacity
          onPress={() => {
            let i = userData.findIndex(ind => ind === item);
            console.log('pressed index', i);
            navigation.navigate('PostDetails', {DATA: userData[i]});
          }}>
          <View style={styles.renderContainer}>
            <Image
              style={styles.image}
              source={{uri: 'https://picsum.photos/200/300'}}
            />
            <View style={styles.innerView}>
              <Text>{item.id} </Text>
              <Text>{item.title}</Text>

              <View
                style={styles.textViews}>
                <TouchableOpacity onPress={()=>{ let i=userData.indexOf(item);
                Updation(i,item);
                }}
                >
                  <Text
                    style={styles.text}>
                    Update
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Delete(item);
                  }}>
                  <Text
                    style={styles.text}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    );
  };

  return (
    <SafeAreaView style={styles.safeview}>
      <View>
        <Text style={styles.posttext}>Post List</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddData',{name:'Add'});
          }}>
          <Text style={styles.posttext}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={userData}
        renderItem={_renderItem}
        bounces={false}
        onEndReached={_endReached}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Index;
