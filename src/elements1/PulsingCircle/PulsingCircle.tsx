import React, { useState, useEffect } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Text
} from 'react-native';

const PULSING_INTERVAL = 500;
const CIRCLE_RADIUS = 50;

const PulsingCircle: React.FC<PulsingCircleProps> = (props) => {

    const [scale, setState] = useState(new Animated.Value(1));

    useEffect(() => {
        props.pulse && cyclicAnimate();
    });

    const cyclicAnimate = () => {
        Animated.sequence([
            Animated.timing(
                scale, {
                toValue: 1.1,
                duration: PULSING_INTERVAL,
                useNativeDriver: true
            }),
            Animated.timing(
                scale, {
                toValue: 1,
                duration: PULSING_INTERVAL,
                useNativeDriver: true
            }),
        ]).start(() => cyclicAnimate())
    }

    return (

        <View {...props}>

            <Animated.View style={[styles.circle, { transform: [{ scale: scale }] }]}>

                <Text style={styles.text}>{props.number}</Text>

            </Animated.View>

        </View>

    )

}

interface PulsingCircleProps {
    [key: string]: any,
}

const styles = StyleSheet.create({
    circle: {
        height: 32,
        width: 32,
        backgroundColor: 'green',
        borderRadius: CIRCLE_RADIUS,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
    }
});

export default PulsingCircle;