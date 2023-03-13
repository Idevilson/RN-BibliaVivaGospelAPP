import React, { useEffect } from "react"
import { View, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';


export function Loading() {

    return(
        <View style={styles.animationContainer}>
            <LottieView
                autoPlay
                style={{
                    width: 300,
                    height: 300,
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../../../assets/loadingAnimation.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});