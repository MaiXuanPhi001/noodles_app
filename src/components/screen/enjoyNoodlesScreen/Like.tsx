import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Like = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <Image
                style={styles.likeImage}
                resizeMode='contain'
                source={require('@images/like.png')}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.textEnjoy}>Enjoy your noodles </Text>
                <Image
                    style={styles.favourite}
                    resizeMode='contain'
                    source={require('@images/favourite.png')}
                />
            </View>
        </View>
    )
}

export default Like

const styles = StyleSheet.create({
    textEnjoy: {
        color: '#C71A1A',
        fontWeight: 'bold',
        fontSize: 20
    },
    favourite: {
        width: 30,
        height: 30
    },
    likeImage: {
        width: 200,
        height: 200
    },
})