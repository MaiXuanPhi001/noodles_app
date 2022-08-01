import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ItemNoodles = (props: any) => {
    const { data, method, noodlesImage } = props
    const [choose, setChoose] = useState(false)

    const choosenoodles = () => {
        setChoose(!choose)
    }

    return (
        <TouchableOpacity
            onPress={choosenoodles}
            disabled={!data.noodles[method]}
            style={styles.noodlesContainer}
        >
            {(choose && data.noodles[method]) &&
                <Image
                    style={styles.noodlesChoose}
                    source={require('@images/noodlesChoose.png')}
                    resizeMode='contain'
                />
            }

            {data.noodles[method] ?
                <Image
                    style={styles.noodlesImage}
                    source={noodlesImage}
                    resizeMode='contain'
                /> :
                <>
                    <Image
                        style={[styles.noodlesImage, { position: 'absolute' }]}
                        source={require('@images/noodlesDisable.png')}
                        resizeMode='contain'
                    />
                    <Text style={styles.textUnavailable}>Unavailable</Text>
                </>

            }
        </TouchableOpacity>
    )
}

export default ItemNoodles

const styles = StyleSheet.create({
    textUnavailable: {
        position: 'absolute',
        bottom: -10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#A09A9A'
    },
    noodlesChoose: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    noodlesImage: {
        width: '100%',
        height: '100%'
    },
    noodlesContainer: {
        width: 80,
        height: 110
    },
})