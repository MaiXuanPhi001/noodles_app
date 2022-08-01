import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const Header = (props: any) => {

    const { urlImage, size } = props

    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.imageLogo} source={require('@images/logo.png')} />
            <Image resizeMode='contain' style={[styles.image, {width: size}]} source={urlImage} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    image: {
        marginTop: 40, 
    },
    imageLogo: {
        marginTop: 50,
        width: 120,
        height: 70
    },
    container: {
        alignItems: 'center'
    }
})