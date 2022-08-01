import Header from '@components/refactor/Header';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import FollowArrow from './FollowArrow';
import Scan from './Scan';
import VideoComponent from './VideoComponent';

export default function Welcome() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground style={styles.imageBackground} resizeMode='cover' source={require('@images/bg.png')}>
        <Header
          size={170}
          urlImage={require('@images/welcome.png')}
        />
        <VideoComponent />
        <FollowArrow />
        <Scan />
      </ImageBackground>
    </ScrollView>
  )
}

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