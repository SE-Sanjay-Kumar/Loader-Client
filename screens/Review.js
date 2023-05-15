import React from "react";
import {View, StyleSheet} from 'react-native'
import { TextInput, Button, Text} from 'react-native-paper';
import Snackbar from "react-native-snackbar";
import tailwind from "twrnc";
<<<<<<< HEAD
=======
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f


export default Review = () =>{
    return(
        <View style={tailwind`bg-pink-200 h-full`}>
            <Text style={tailwind`text-center text-2xl font-mono font-extrabold text-sky-900
                                    underline pb-0 my-5 `}>Review Our Service</Text>
            <TextInput
                    style={tailwind`my-5 mx-10 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor="transparent"
                    placeholder=''
                    label='Enter Order ID'
            />
            <TextInput
                    style={tailwind`my-5 mx-10 mb-0 rounded-b-2xl rounded-t-2xl text-center h-50`}
                    underlineColor="transparent"
                    placeholder=''
                    label='Add Review'
            />
            <Button style={tailwind` my-5 mx-15 bg-amber-400 text-black`} mode="contained" onPress={()=>{
                Snackbar.show({
                    text: 'Review recorded, Thank You!',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                      text: 'close',
                      textColor: 'green',
                      onPress: () => { /* Do something. */ },
                    },
                  });
            }}>Submit</Button>
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
    bigField: {
        margin: 20,
        height: 100
    }
})