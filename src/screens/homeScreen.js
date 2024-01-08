import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import Slider from "../component/slider";
export const HomeScreen = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user.users)

    return (
        <View style={{ flex: 1, margin: 10, alignItems: 'center' }}>
            <Text style={Style.textStyle}>Welcome {users[0]?.value?.userName}</Text>
            <Text style={Style.textStyle}>
                Digital Truck Hiring{'\n'}
                Solution - A Complete{'\n'}
                Transport and{'\n'}
                Distribution Solution
            </Text>
            <View style={{ marginTop: 30 }}>
                <Slider />
            </View>

        </View>
    )
}
const Style = StyleSheet.create({
    textStyle: { fontSize: 25, color: 'black', fontWeight: 'bold', textAlign: 'center', marginTop: 20 }
})