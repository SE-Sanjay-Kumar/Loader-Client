import React from "react";
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import { TextInput, Button, Text, Appbar, DataTable } from 'react-native-paper';
import tailwind from "twrnc";
import { getAllOrder } from "../src/services/client_service";
import { useRoute } from "@react-navigation/native";
export default Orders = ({navigation}) =>{
    const route=useRoute();
    const id=global.id;
    const [allOrders,setAllOrders]=React.useState([]);
    const [order,setOrder]=React.useState([]);
    
    const updatePrice=(order)=>{
        order.clientid=order.client.id;
        order.orderId=order.orderId;
        console.log("Please see this"+order.clientid);
        order.statusId=order.status.statusId;
        console.log("From orders"+JSON.stringify(order));
        navigation.navigate('Page 4',{
            data: order});
    }

    const review=(order)=>{
        order.orderId=order.orderId;
        navigation.navigate('Review',{
            data: order});
    }

    React.useEffect(()=>{
            getAllOrder().then((response)=>{
                        setAllOrders(response.data);
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
        <View style={tailwind`bg-pink-200 h-full`}>
            <Text style={tailwind`text-center text-2xl font-mono font-extrabold text-sky-900
                                  underline pb-0 `}>Orders list</Text>
            <DataTable style={tailwind`border-dotted`}>
                <DataTable.Header style={tailwind`text-center text-lg font-mono font-extrabold text-sky-900
                                  underline pb-0 bg-amber-300`}>
                    <DataTable.Title><Text>ID</Text></DataTable.Title>
                    <DataTable.Title><Text>Order Name</Text></DataTable.Title>
                    <DataTable.Title><Text>Status</Text></DataTable.Title>
                    
                </DataTable.Header>


                {allOrders.map((order, index) => (
                    (order.client.id==id) ? (
                    <DataTable.Row key={index}>
                        <DataTable.Cell>{order.orderId}</DataTable.Cell>
                        <DataTable.Cell>{order.orderName}</DataTable.Cell>
                        <DataTable.Cell>{order.status.status}</DataTable.Cell>
                        {order.status.statusId==1 ? (
                            <Button mode="outlined" style={{marginLeft:10}} onPress={() => navigation.navigate('TrackOrders',{
                            order: order,})}>
                            <Text>Track Order</Text>                            
                        </Button>):null}
                        {order.status.statusId==2 ? (
                            <Button mode="outlined" style={{marginLeft:10}} onPress={() => {updatePrice(order)}}>
                            <Text>Update Price</Text>                            
                        </Button>):null}

                        {order.status.statusId==4 ? (
                            <Button mode="outlined" style={{marginLeft:10}} onPress={() => {review(order)}}>
                            <Text>Review</Text>                            
                        </Button>):null}

                    </DataTable.Row>) : null
                ))}
            </DataTable>
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