import React from "react";
import {View, StyleSheet, ScrollView,Image} from 'react-native'
import { TextInput, Button, Text, Appbar , Avatar} from 'react-native-paper';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import Book2 from "./Book2";
import tailwind from "twrnc";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker from 'react-native-image-picker';


export default Book1 = ({navigation}) =>{
    const route=useRoute();
    const [id, setClientId] = React.useState(route.params.id);
    console.log(id);
    return(
        <View style={tailwind`bg-violet-300`} >
            
            <View style={tailwind`h-1/2`}>
                <TouchableOpacity style={tailwind`flex-initial `} >
                    <Image source={require('../screens/pictures/left.png')}></Image>
                </TouchableOpacity>
                <Text style={tailwind`text-center text-2xl font-extrabold `}>BOOKING</Text>
                <Avatar.Image size={150}
                  style={tailwind`my-10 mx-25 `}
                  source={require('./pictures/item.jpg')} />
                <Button style={tailwind` mx-15 bg-amber-400 text-black mb-0`}
                        mode="contained" onPress={() => { /* Do something. */ }} ><Text style={tailwind`font-bold`}
                                          >Upload Item Image</Text></Button>
            </View>
            
            <View style={tailwind`h-1/2 `}>
                <TextInput
                        style={tailwind`mx-5 mb-2 rounded-2xl rounded-t-2xl text-center  `}
                        placeholder='Order Name'
                        underlineColor='transparent'
                />
                <TextInput
                        style={tailwind`mx-5 mb-2 rounded-2xl rounded-t-2xl text-center`}
                        placeholder='Weight'
                        underlineColor='transparent'
                />
                <TextInput
                        style={tailwind`mx-5 mb-2 rounded-2xl rounded-t-2xl text-center`} 
                        underlineColor='transparent'
                        placeholder='Size of Goods'
                />



                <Button style={tailwind` mx-15 bg-amber-400 text-black mb-2`} mode="contained" onPress={()=>{
                    navigation.navigate('Page 2')
                }}><Text style={tailwind`font-bold`}>Next</Text></Button>
                <Text style={tailwind`font-semibold text-center mb-2 text-gray-500`}>--OR--</Text>
                <Button style={tailwind` mx-15 bg-amber-400 text-black mb-0`} mode="contained" onPress={()=>{
                    navigation.navigate('Login')
                }}><Text style={tailwind`font-bold`}>LogOut</Text></Button>

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
