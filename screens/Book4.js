import React from "react";
import {View, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import tailwind from "twrnc";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


export default Book2 = ({navigation}) =>{
    const data = [
        {
            id: "truck1",
            title: "Truck 1",
            image: require('../screens/pictures/icon.png'),
            price: "Rs. 2000"
        },
        {
            id: "truck2",
            title: "Truck 2",
            image: require('../screens/pictures/icon.png'),
            price: "Rs. 2000"
        },
        {
            id: "truck3",
            title: "Truck 3",
            image: require('../screens/pictures/icon.png'),
            price: "Rs. 2000"
        },
        {
            id: "truck4",
            title: "Truck 4",
            image: require('../screens/pictures/icon.png'),
            price: "Rs. 2000"
        }
    ]
    return(
        <View>
            <View style={tailwind`h-1/2`}>
                <Image style={{resizeMode: "contain", width: responsiveWidth(100), height: responsiveHeight(50)}} 
                source={require('./pictures/map.png')} />
            </View>
            <View style={tailwind`h-1/2 bg-violet-200 rounded-t-3xl`}>
                <Text style={tailwind`text-lg font-bold text-center text-black`}>Select a Vehicle</Text>
                <FlatList horizontal style={[tailwind``,{resizeMode: "contain", height: responsiveHeight(50)}]}
                    data={data} keyExtractor={(item) => item.id} 
                    renderItem={({item: {id, title, image, price}})=>(
                        <TouchableOpacity style={[tailwind`flex-col items-center h-20 `,{resizeMode: "contain", height: responsiveHeight(50)}]}>
                            <Image style={tailwind`w-20 h-20 mx-10`} source={image}></Image>
                            <Text style={tailwind`text-black`}>{title}</Text>
                            <Text style={tailwind`text-black`}>{price}</Text>
                        </TouchableOpacity>
                    )}/>
                <Text style={tailwind`text-lg font-bold text-center text-black`}>Fare</Text>
                <TextInput
                      style={tailwind` mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center `}
                      label='Enter Price'
                      placeholder='Price Suggestion'
                      underlineColor='transparent'
                      keyboardType='number-pad'
                    />
                <View style={tailwind`flex-row `}>
                <Button style={tailwind` bg-amber-400 text-black mt-2 mx-10`}  mode="contained" 
                    onPress={()=>{}}>
                    <Text>Update Price</Text></Button>
                <Button style={tailwind`  bg-amber-400 text-black mt-2 mx-10`}  mode="contained" 
                    onPress={()=>{navigation.navigate('Page 5')}}>
                    <Text>Accept</Text></Button>
                </View>
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