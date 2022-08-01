import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { navigate } from '@components/navigation/Navigation'

const Scan = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: 60 }} />

            <Image
                resizeMode='contain'
                style={styles.imageScan}
                source={require('@images/frame16.png')}
            />

            <TouchableOpacity
                onPress={() => navigate('Infomation', null)}
            >
                <Image
                    style={styles.imageArrow}
                    resizeMode='contain'
                    source={require('@images/frame.png')}
                />
            </TouchableOpacity>
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