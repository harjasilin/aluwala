import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
    Animated,
    Easing,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const { width, height } = Dimensions.get('screen');

const SlideItem = ({ item }) => {
    const translateYImage = new Animated.Value(40);
    const navigation = useNavigation();
    Animated.timing(translateYImage, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.bounce,
    }).start();

    return (
        <TouchableOpacity
            style={styles.container}>
            <Animated.Image
                source={{ uri: item?.poster_path }}
                resizeMode="cover"
                style={[
                    styles.image,
                    {
                        // transform: [
                        //     {
                        //         translateY: translateYImage,
                        //     },
                        // ],
                    },
                ]}
            />
        </TouchableOpacity>
    );
};

export default SlideItem;

const styles = StyleSheet.create({
    container: {
        width,
        height: height * 0.3,
        alignItems: 'center',
    },
    image: {
        height: '80%',
        width: '90%',
    },

});
