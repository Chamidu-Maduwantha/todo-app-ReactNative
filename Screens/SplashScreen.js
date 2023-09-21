import React from "react";
import { View ,Text,StyleSheet} from "react-native";

const SplashScreen = () => {


    return(
        <View style = {styles.container}>

            <Text style = {styles.text}>Manage your Tasks with</Text>
            <Text style = {styles.text2}>TaskWise</Text>

        </View>


    );
}


const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 32,
        color: '#E74C3C',
    }

});

export default SplashScreen;