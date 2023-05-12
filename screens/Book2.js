import React from "react";
import {View, StyleSheet, Image} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import tailwind from "twrnc";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default Book2 = ({navigation}) =>{
    return(
        <View style={tailwind`bg-white`}>
            <View style={tailwind`h-1/2`}>
                <Image  style={[tailwind``,{resizeMode: "cover", width: responsiveWidth(100), height: responsiveHeight(50)}]}
                 source={require('../screens/pictures/schedule.png')}/>
            
            </View>
            <View style={tailwind`h-1/2 bg-violet-300 rounded-t-3xl`}>
                <Text style={tailwind`text-center text-2xl font-extrabold m-5`}>Schedule Booking</Text>
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    placeholder="Departure Time"
                    underlineColor='transparent'
                    />
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    placeholder="Departure Date"
                    underlineColor='transparent'
                    />
                
                <Button style={tailwind` mx-15 bg-amber-400 text-black mt-5`} mode="contained" onPress={()=>{
                    navigation.navigate('Page 3')
                }}><Text>Next</Text></Button>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container : {
        margin: 20
    },
    heading: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    
})