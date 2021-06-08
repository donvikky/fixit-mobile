import React from "react";
import {StyleSheet} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Constants from 'expo-constants';

const Screen = ({children, style}) => {
    return (
        <SafeAreaProvider style={[styles.container, style]}>
            {children}
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:Constants.statusBarHeight
    }
});

export default Screen;