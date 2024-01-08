import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {

        const timer = setTimeout(() => {
            navigation.replace('SignIn');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Animatable.Image
                animation="zoomIn"
                duration={2500}
                delay={1500}
                source={require('./assets/SplashImage.jpeg')}
                style={styles.image}
            />


        </View>
    )
}
export default SplashScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    image: {
        width: 500, height: 200
    },
});