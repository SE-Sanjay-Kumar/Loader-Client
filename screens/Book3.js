import React from "react";
import {View, StyleSheet, Image, ScrollView} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import tailwind from "twrnc";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default Book3 = ({navigation}) =>{
    return(
        <View>
            <View style={tailwind`h-1/2`}>
                <Image style={{resizeMode: "contain", width: responsiveWidth(100), height: responsiveHeight(50)}} 
                source={require('./pictures/map.png')} />
            </View>

            <View style={tailwind`h-1/2 rounded-t-3xl bg-violet-300`}>
                <Text style={tailwind`text-center text-xl font-extrabold m-5`}>Add Location</Text>
                <TextInput
                    style={tailwind`mx-5 mb-2 rounded-2xl rounded-t-2xl text-center  `}
                    underlineColor='transparent'
                    placeholder="PickUp Location"
                    />
                <TextInput
                    style={tailwind`mx-5 mb-2 rounded-2xl rounded-t-2xl text-center  `}
                    underlineColor='transparent'
                    placeholder="Dropoff Location"
                    />
                <TextInput
                    style={tailwind`mx-5 mb-2 rounded-2xl rounded-t-2xl text-center  `}
                    underlineColor='transparent'
                    placeholder="Labour Required"
                    />
                <Button style={tailwind` mx-15 bg-amber-400 text-black mt-2`} mode="contained"onPress={()=>{
                    navigation.navigate('Page 4')
                }}><Text>Next</Text></Button>
            </View>
            
        
        </View>
    )
}
const styles=StyleSheet.create({
    container : {
        margin: 12
    },
    heading: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    
})
