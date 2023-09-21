import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

const SplashScreen = () => {
    const handlePress = () => {
        // Handle button press
      }
    return (
        <View style={styles.container}>
            <View style={styles.topTextContainer}>
                <Text style={styles.text}>Manage your Tasks with</Text>
                <Text style={styles.text2}>TaskWise</Text>
            </View>
            <View style={styles.middleImageContainer}>
                <Image
                source={require('../assets/log1.png')}
                style={styles.imagelog}
                />
            </View>
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
                <Text style={styles.buttonText}>Let's Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    topTextContainer: {
        alignItems: 'center',
        marginTop: 100, 
    },
    middleImageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    bottomButtonContainer: {
        marginBottom: 50, 
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 32,
        color: '#E74C3C',
    },
    imagelog: {
        width: 240,
        height: 240,
        resizeMode: 'contain',
    },
    buttonContainer: {
        width: 196,
        height: 50,
        backgroundColor: '#3498DB',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize : 18,
        color: '#fff',
        letterSpacing: 1.5,
    },
});

export default SplashScreen;
