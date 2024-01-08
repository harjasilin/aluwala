import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';

import { useDispatch } from "react-redux";
import { signUp } from "../action/authAction";

const SignUp = ({ navigation }) => {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassowd, setConfirmPassowd] = useState('')
    const [imageURL, setImageURL] = useState('')
    const isValidEmail = (email) => {
        const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailPattern.test(email);
    };
    const handleAdd = () => {
        if (!userName || !email || !phone || !password || !confirmPassowd || !imageURL) {
            Alert.alert('Please enter each filed.')
            return;
        }
        if (!isValidEmail(email)) {
            Alert.alert('Invalid email address');
            return;
        }
        if (userName.length < 6) {
            Alert.alert('Please enter atleast 6 character.')
            return;
        }
        if (phone.length !== 10) {
            Alert.alert('Please enter valid phone number.')
            return;
        }
        if (password !== confirmPassowd) {
            Alert.alert('Password mismatch')
            return;
        }
        const user = {
            userName,
            email,
            phone,
            password,
            imageURL
        }
         dispatch(signUp(user))
        navigation.navigate('SignIn')
    }
    const onpickerClick = async () => {
        const options = {
        }
        const result = await launchImageLibrary(options);
        setImageURL(result.assets[0]?.uri)
    }

    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.screen}>
                <TouchableOpacity onPress={onpickerClick} style={{ marginTop: 50, alignSelf: 'center', }}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: imageURL ? imageURL : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=' }} style={{ height: 100, width: 100, borderRadius: 50 }} />
                    </View>
                    <Text style={{ color: '#1f1f5d' }}>Click here to upload image</Text>
                </TouchableOpacity>
                <TextInput style={styles.input}
                    placeholder='Enter User Name'
                    value={userName}
                    onChangeText={(e) => setUserName(e)}
                />
                <TextInput style={styles.input}
                    placeholder='Enter Email'
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                />
                <TextInput style={styles.input}
                    placeholder='Enter Phone Number'
                    keyboardType="numeric"
                    maxLength={10}
                    value={phone}
                    onChangeText={(e) => setPhone(e)}
                />
                <TextInput style={styles.input}
                    placeholder='Enter Password'
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)}
                />
                <TextInput style={styles.input}
                    placeholder='Enter Conform Paasword'
                    value={confirmPassowd}
                    secureTextEntry={true}
                    onChangeText={(e) => setConfirmPassowd(e)}
                />
                <TouchableOpacity onPress={handleAdd}
                    style={
                        styles.button
                    }>
                    <Text style={{ fontSize: 18, color: 'white' }}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.footerText}>Have an account SIGN IN</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}
export default SignUp
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    screen: {
        marginTop: '10%',
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
    },
    imageContainer: {
        height: 103,
        width: 103,
        borderRadius: 51,
        borderColor: '#1f1f5d',
        alignSelf: 'center',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});