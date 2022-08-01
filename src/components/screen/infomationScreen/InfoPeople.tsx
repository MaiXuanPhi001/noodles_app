import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InfoPeople = () => {
  return (
    <ImageBackground
      style={styles.imgBackground}
      source={require('@images/frameInfo.png')}
      resizeMode='contain'
    >
      <Image
        style={styles.avatar}
        source={require('@images/frame3.png')}
        resizeMode='contain'
      />

      <View>
        <Text style={styles.textField}>Full Name:</Text>
        <Text style={styles.textField}>Birthday:</Text>
        <Text style={styles.textField}>Gender:</Text>
        <Text style={styles.textField}>Department:</Text>
      </View>

      <View>
        <Text style={styles.textValue}>Alice Mie</Text>
        <Text style={styles.textValue}>12/10/1999</Text>
        <Text style={styles.textValue}>Female</Text>
        <Text style={styles.textValue}>Design</Text>
      </View>
    </ImageBackground>
  )
}

export default InfoPeople

const styles = StyleSheet.create({
  textValue: {
    color: '#880B0B',
  },
  textField: {
    color: '#880B0B',
    fontWeight: 'bold'
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'red'
  },
  imgBackground: {
    width: 310,
    height: 130,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})