import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import FollowArrow from './FollowArrow';
import Scan from './Scan';
import VideoComponent from './VideoComponent';

export default function Welcome() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground style={styles.image} resizeMode='cover' source={require('../../../../assets/images/bg.png')}>
        <Image resizeMode='contain' style={styles.imageLogo} source={require('../../../../assets/images/logo.png')} />
        <Image resizeMode='contain' style={styles.imageWelcome} source={require('../../../../assets/images/welcome.png')} />
        <VideoComponent />
        <FollowArrow />
        <Scan />
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageWelcome: {
    marginTop: 40,
    width: 170
  },
  imageLogo: {
    marginTop: 50,
    width: 120,
    height: 70
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  container: {
    flexGrow: 1,
  },
})