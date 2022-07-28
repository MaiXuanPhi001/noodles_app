import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Scan = () => {
    return (
        <View style={styles.container}>
            <View style={{width: 60}} />

            <Image
                resizeMode='contain'
                style={styles.imageScan}
                source={require('../../../assets/images/frame16.png')}
            />

            <Image
                style={styles.imageArrow}
                resizeMode='contain'
                source={require('../../../assets/images/frame.png')}
            />
        </View>
    )
}

export default Scan

const styles = StyleSheet.create({
    imageArrow: {
        width: 60,
    },
    imageScan: {
        width: 120,
        height: 130,
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 25
    }
})