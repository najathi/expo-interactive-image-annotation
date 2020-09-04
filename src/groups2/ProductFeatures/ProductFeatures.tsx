import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';

import InteractiveImage from '../../elements2/InteractiveImage/InteractiveImage';

interface ProductFeaturesProps {
    [key: string]: any,
}

const { height, width } = Dimensions.get('window');

const ProductFeatures: React.FC<ProductFeaturesProps> = (props) => {

    const annotations = [
        {
            x1: 22,
            x2: 32,
            y1: 13,
            y2: 23,
            number: 1,
            onPress: () => console.log('Bullet No. 1')
        },
        {
            x1: 41,
            x2: 51,
            y1: 23,
            y2: 33,
            number: 2,
            onPress: () => console.log('Bullet No. 2')
        },
        {
            x1: 30,
            x2: 40,
            y1: 31,
            y2: 41,
            number: 3,
            onPress: () => console.log('Bullet No. 3')
        },
        {
            x1: 65,
            x2: 75,
            y1: 15,
            y2: 25,
            number: 4,
            onPress: () => console.log('Bullet No. 4')
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