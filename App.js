import React from 'react'
import MyStack from './src/Routes/index'
import { Provider } from 'react-redux'
import store from './src/Reducer/store'

export default function App() {
  return (
    <Provider store={store}>
  <MyStack/>
  </Provider>
  )
}