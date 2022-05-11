import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../Screens/PostList/Index';
import PostDetails from '../Screens/PostDetails/PostDetails';
import AddData from '../Screens/AddData/index'
import { NavigationContainer } from '@react-navigation/native';
import Update from '../Screens/UpdateData/Update'
const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Index" component={Index}/>
        <Stack.Screen name='PostDetails' component={PostDetails}/>
        <Stack.Screen name='AddData' component={AddData}/>
        <Stack.Screen name='Update' component={Update}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default MyStack