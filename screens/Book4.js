import React from "react";
import {View, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native'
import { TextInput, Button, Text, Appbar, DataTable } from 'react-native-paper';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import tailwind from "twrnc";
import { getAllOrder, getVehicleType, placeOrder } from "../src/services/client_service";

export default Book2 = ({navigation}) =>{
    
    const route=useRoute();
    const [orderDetails,setOrderDetails]=React.useState(route.params.order);
    console.log("From Order Details: "+orderDetails);
    const [allOrders,setAllOrders]=React.useState([]);
    const [price,setPrice]=React.useState(0);
    console.log(orderDetails)
    const Price=(value)=>{
        const val= parseInt(value);
        setPrice(val);
        orderDetails.price=price;
        placeOrder(orderDetails).then((response)=>{
            console.log("From Order"+response);
        })
        .catch((err)=>{
            if(err.response){
                console.log(er.response);
            }
            else if(err.request){
                console.log(err.request);
            }
            else {
                console.log(err);
            }
        });
        
    }

    React.useEffect(()=>{
            calculatePrice=()=>{
                
            }
                    getAllOrder().then((response)=>{
                        setAllOrders(response.data);
                        console.log(response.data);
                        
            })
            .catch((err)=>{
                if(err.response){
                    console.log(er.response);
                }
                else if(err.request){
                    console.log(err.request);
                }
                else {
                    console.log(err);
                }
            })    
    },[]);

    return(
        <View>
            <View style={tailwind`h-1/2`}>
                <Text>Final Order Screen</Text>
            </View>
            <View style={tailwind`h-1/2 bg-violet-200 rounded-t-3xl`}>
                
                <Text style={tailwind`text-lg font-bold text-center`}>Fare</Text>
                <TextInput
                      style={tailwind`mb-10 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center `}
                      label='Enter Price'
                      placeholder='Price Suggestion'
                      underlineColor='transparent'
                      keyboardType='number-pad'
                      onChangeText={value => setPrice(value)}
                    />

                <View style={tailwind`flex-row `}>
                <Button style={tailwind` bg-amber-400 text-black mt-2 mx-10`}  mode="contained" 
                    onPress={()=>{Price(price)}}>
                    <Text>Update Price</Text></Button>
                {
                    allOrders.map((order,index)=>(
                        ((order.client.id==orderDetails.id)&&(order.status.statusId=='2')) ? (
                            <Button style={tailwind`  bg-amber-400 text-black mt-2 mx-10`}  mode="contained" 
                                onPress={()=>{navigation.navigate('Page 5')}}>
                                <Text>Accept</Text></Button>

                        ): null
                    )
                    )
                }
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