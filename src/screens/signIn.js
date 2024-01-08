import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { signIn as inside } from "../action/authAction";
const SignIn = ({ navigation }) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user.users)
    const handleSignIn = () => {
        const existingUser = users.filter((user) => user.value.userName === userName)
        if (existingUser.length > 0) {
            const existingPassword = existingUser[0].value.password
            if (existingPassword === password) {
                dispatch(inside(existingUser[0]));
                navigation.navigate('HomeScreen')
            } else {
                Alert.alert('Enter valid  password')
            }
        } else {
            Alert.alert('Enter valid user name')
        }
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.screen}>
                <TextInput style={styles.input}
                    placeholder='Enter User Name'
                    value={userName}
                    onChangeText={(e) => setUserName(e)}
                />
                <TextInput style={styles.input}
                    placeholder='Enter Password'
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)}
                />
                <TouchableOpacity
                    onPress={handleSignIn}
                    style={
                        styles.button
                    }>
                    <Text style={{ fontSize: 18, color: 'white' }}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.footerText}>Don't have an account SIGN UP</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default SignIn
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    screen: {
        marginTop: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:
    {
        height: 45,
        width: '90%',
        borderWidth: 1.5,
        borderColor: '#1f1f5d',
        marginTop: 20,
        borderRadius: 12,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#1f1f5d',
        height: 50, width: '90%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    footerText: {
        marginTop: 20,
        color: '#1f1f5d'
    }
});