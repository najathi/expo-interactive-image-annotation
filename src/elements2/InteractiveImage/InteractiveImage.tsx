import React, { useState } from 'react';
import { Animated, View, TouchableWithoutFeedback } from 'react-native';

import PulsingCircle from '../../elements1/PulsingCircle/PulsingCircle';

const InteractiveImage: React.FC<InteractiveImageProps> = (props) => {

    let currentAnnotation: any;

    const [scale, setScale] = useState(new Animated.Value(1));
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    const tansformStyles = {
        transform: [
            { scale: scale },

        ]
    }

    const normalizeAnnotation = (annotation: any) => {
        if (!annotation)
            return
        const x1 = annotation.x1 * props.imageWidth / 100
        const x2 = annotation.x2 * props.imageWidth / 100
        const y1 = annotation.y1 * props.imageHeight / 100
        const y2 = annotation.y2 * props.imageHeight / 100
        return { x1, x2, y1, y2 }
    }

    const getAnnotation = (x: any, y: any) => {
        let match: any;
        props.annotations && props.annotations.every((annotation: any) => {
            const { x1, x2, y1, y2 }: any = normalizeAnnotation(annotation)
            if (x > x1 && x < x2 && y > y1 && y < y2)
                match = annotation
            return !match
        })
        return match
    }

    const onImagePress = (e: any) => {
        const { nativeEvent: { locationX = 0, locationY = 0 } = {} }: any = e
        currentAnnotation = getAnnotation(locationX, locationY)

        if (currentAnnotation) {
            currentAnnotation.onPress();
        }
    }

    const renderTouchpoints = () => {
        return props.annotations && props.annotations.map((annotation: any, index: number) => {
            const style = {
                position: 'absolute',
                left: ((annotation.x2 + annotation.x1) / 200) * props.imageWidth,
                top: ((annotation.y2 + annotation.y1) / 200) * props.imageHeight,
            }
            return (
                <View pointerEvents='none' style={style} key={index}>

                    <PulsingCircle pulse number={annotation.number} />

                </View>
            )
        })
    }


    return (
        <View style={{ maxHeight: props.imageHeight, width: props.imageWidth, backgroundColor: 'pink' }} >

            <View
                style={{
                    maxHeight: props.imageHeight,
                    width: props.imageWidth,
                    backgroundColor: 'pink'
                }}>

                <TouchableWithoutFeedback
                    onPress={onImagePress}
                    style={{ height: props.imageHeight, width: props.imageWidth, backgroundColor: 'red' }}
                >

                    <Animated.Image
                        source={props.source}
                        style={[tansformStyles, { height: props.imageHeight, width: props.imageWidth, top: offsetY, left: offsetX }]}
                    />

                </TouchableWithoutFeedback>

            </View>

            {renderTouchpoints()}

        </View>
    )
}

interface InteractiveImageProps {
    [key: string]: any,
    imageWidth: number,
    imageHeight: number,
    source: any
}

export default InteractiveImage;