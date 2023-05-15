import React from "react";
import {View, StyleSheet, ScrollView, Image} from 'react-native'
import { TextInput, Button, Text, Appbar, Avatar } from 'react-native-paper';
import tailwind from "twrnc";
export default ViewProfile = () =>{
    return(
        <View style={tailwind`bg-pink-200`}>
            <View style={tailwind`h-1/2 `}>
                <Text style={tailwind`text-center text-2xl font-mono font-extrabold text-sky-900
                                  underline pb-0 `}>Update Profile</Text>
                <Avatar.Image size={150}
                  style={tailwind`my-10 mx-25 `} source={require('./pictures/pic.png')}  />
                <Button style={tailwind`mx-20 bg-amber-400 mb-10`} mode="contained">Upload Image</Button>
            </View>

            <ScrollView style={tailwind`h-1/2 bg-violet-300 rounded-t-3xl`}>
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor='transparent'
                    placeholder=""
                    label='Name'
                    />
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor='transparent'
                    placeholder=""
                    label='Email'
                    />
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor='transparent'
                    placeholder=""
                    label='Username'
                    />
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor='transparent'
                    placeholder=""
                    label='Business'
                    />
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor='transparent'
                    placeholder=""
                    label='New Password'
                    />
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor='transparent'
                    placeholder=""
                    label='Confirm Password'
                    />
                <Button style={tailwind`mx-20 bg-amber-400 my-5`} mode="contained">Update Profile</Button>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        margin: 15
    },
    heading: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    
})
