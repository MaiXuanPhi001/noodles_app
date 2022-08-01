import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ItemNoodles from './ItemNoodles'

const db = {
    id: 0,
    name: 'abc',
    noodles: [true, true, true]
}

const NoodlesChoose = () => {
    const [data, setData] = useState(db)

    return (
        <View style={styles.container}>
            <View style={styles.noodlesContainer}>
                <ItemNoodles
                    data={data}
                    setData={setData}
                    method={0}
                    noodlesImage={require('@images/noodles1.png')}
                />
                <ItemNoodles
                    data={data}
                    setData={setData}
                    method={1}
                    noodlesImage={require('@images/noodles2.png')}
                />
                <ItemNoodles
                    data={data}
                    setData={setData}
                    method={2}
                    noodlesImage={require('@images/noodles3.png')}
                />
            </View>
            <Text style={styles.textContainer}>
                <Text style={styles.textQuantity}>3</Text> cups of  noodles left this month
            </Text>
        </View>
    )
}

export default NoodlesChoose

const styles = StyleSheet.create({
    textQuantity: {
        color: '#D91313',
        fontSize: 12
    },
    textContainer: {
        color: '#9C6666',
        fontWeight: 'bold',
        fontSize: 10,
        marginTop: 20
    },
    noodlesContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container: {
        width: '100%',
        alignItems: 'center',
    }
})