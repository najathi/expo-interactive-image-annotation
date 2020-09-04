import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';

import InteractiveImage from '../../elements1/InteractiveImage/InteractiveImage';

interface ProductFeaturesProps {
    [key: string]: any,
}

const { height, width } = Dimensions.get('window')

const ProductFeatures: React.FC<ProductFeaturesProps> = (props) => {

    const annotations = [
        {
            x1: 22,
            x2: 32,
            y1: 13,
            y2: 23,
            description: 'Taylor Otwel',
            number: 1
        },
        {
            x1: 41,
            x2: 51,
            y1: 23,
            y2: 33,
            description: 'Jasmin',
            number: 2
        },
        {
            x1: 30,
            x2: 40,
            y1: 31,
            y2: 41,
            description: 'Mahir Taylor',
            number: 3
        },
        {
            x1: 65,
            x2: 75,
            y1: 15,
            y2: 25,
            description: 'Jemes Warn',
            number: 4
        },
    ]

    return (

        <View style={styles.imageContainer}>

            <InteractiveImage
                source={require('../../assets/app/friends.jpg')}
                imageHeight={width}
                imageWidth={height}
                annotations={annotations}
                style={{ flex: 1 }}
                popOverStyles={{ backgroundColor: 'white' }}
            />

        </View>

    )

}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    }
});

export default ProductFeatures;