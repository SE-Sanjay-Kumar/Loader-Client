import React from "react";
import {View, StyleSheet, Image} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import tailwind from "twrnc";
<<<<<<< HEAD
=======
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f

export default Orders = () =>{
    return(
        <View style={tailwind`bg-pink-200 h-full`}>
            <View style={tailwind`h-1/3`}>
                <Text style={tailwind`text-center text-2xl font-mono font-extrabold text-sky-900
<<<<<<< HEAD
                                    underline pb-0 `}>Track Order</Text>
=======
                                    underline pb-0 mb-5 `}>Track Order</Text>
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
                <TextInput
                        style={tailwind`my-2 mx-10 mb-0 rounded-b-2xl rounded-t-2xl text-center`} 
                        placeholder=''
                        label='Enter Order ID'
                        underlineColor="transparent"
                />
                <Button style={tailwind` my-5 mx-15 bg-amber-400 text-black`} mode="contained" onPress={()=>{}}>
                    <Text>Enter</Text>
                </Button>
            </View>
            <View style={tailwind`h-2/3`}>
<<<<<<< HEAD
                <Image style={{width:500 , height:300}} 
                source={require('./pictures/map.png')} />
                
                <Text style={tailwind`text-center font-bold text-lg mt-5`}>Estimated arrival time:</Text>
                <TextInput disabled = 'true' 
                style={tailwind`my-2 mx-10 mb-0 rounded-b-2xl rounded-t-2xl text-center font-bold`} 
=======
                <Image style={{resizeMode: "contain", width: responsiveWidth(100), height: responsiveHeight(40)}}
                source={require('./pictures/map.png')} />
                
                <Text style={tailwind`text-center font-bold text-lg mt-5 text-black`}>Estimated arrival time:</Text>
                <TextInput disabled = 'true' 
                style={tailwind`my-2 mx-10 mb-0 rounded-b-2xl rounded-t-2xl text-center font-bold text-black`} 
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
                placeholder = "23:35:18">
                </TextInput>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container : {
        margin: 10
    },
    heading: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttton: {
        width: 200,
        margin: 10,
        marginLeft: 90
    }
    
})