import React from "react";
import {ImageBackground, View, Image, StyleSheet} from "react-native";
import { Button } from 'react-native-elements';

const WelcomeScreen = () => {

    return(
        <ImageBackground source={require('../../assets/repairs.jpeg')} style={styles.background}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            </View>
            <View style={styles.buttonsContainer}>
                <Button title="LOG IN" raised={true} type="solid" buttonStyle={styles.loginButton} />
                <Button title="REGISTER" raised type="solid"
                    containerStyle={{marginTop:10}}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        paddingBottom: 30,
        width: "100%"
    },
    logo: {
        width: 300,
        height: 300
    },
    logoContainer: {
        alignItems: "center",
        position: "absolute",
        top: 70,
        fontFamily: "Roboto"
    },
    registerButton: {
        marginTop: 0,
        top: 50
    },
    loginButton: {

    }

});

export default WelcomeScreen;