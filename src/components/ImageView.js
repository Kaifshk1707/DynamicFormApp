import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageView = ({ URI }) => {
    return (
        <Image
            source={{
                uri: URI
            }}
            style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                borderWidth: 3,
                borderColor: '#249781',
            }}
        />
    )
}

export default ImageView