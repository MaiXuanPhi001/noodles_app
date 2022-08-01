import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Header from '@components/refactor/Header'
import InfoPeople from './InfoPeople'
import NoodlesChoose from './NoodlesChoose'
import Button from '@components/refactor/Button'
import { navigate } from '@components/navigation/Navigation'

const Infomation = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground style={styles.imageBackground} resizeMode='cover' source={require('@images/bg.png')}>
        <Header
          size={200}
          urlImage={require('@images/information.png')}
        />
        <InfoPeople />
        <NoodlesChoose />
        <Button
          handler={() => navigate('EnjoyNoodles', null)}
          urlImage={require('@images/getNoodles.png')}
          marginTop={35}
        />
      </ImageBackground>
    </ScrollView>
  )
}

export default Infomation

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  container: {
    flexGrow: 1,
  },
})