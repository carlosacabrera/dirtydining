import React, { Component } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { StatusBar } from 'react-native'
import { ApolloProvider } from 'react-apollo'

import client from './config/client'
import store from './config/store'
import styles from './config/styles'

import { Container } from './components/Container'
import Home from './screens/Home'


EStyleSheet.build(styles)

export default class DirtyDining extends Component {
  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <Container>
          <StatusBar translucent={true} barStyle="light-content" />
          <Home /> 
        </Container>
      </ApolloProvider>
    )
  }
}