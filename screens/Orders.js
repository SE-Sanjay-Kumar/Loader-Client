import React from "react";
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import { TextInput, Button, Text, Appbar, DataTable } from 'react-native-paper';
import tailwind from "twrnc";

export default Orders = () =>{
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
                <DataTable.Row >
                    <DataTable.Cell>01</DataTable.Cell>
                    <DataTable.Cell>Sugarcane</DataTable.Cell>
                    <DataTable.Cell>
                        <TouchableOpacity onPress={()=>{}}>
                            <Text>On the way</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row >
                    <DataTable.Cell>02</DataTable.Cell>
                    <DataTable.Cell>Steel</DataTable.Cell>
                    <DataTable.Cell >
                    <TouchableOpacity  onPress={()=>{}}>
                            <Text>Completed</Text>
                        </TouchableOpacity>
                    </DataTable.Cell>
                </DataTable.Row>
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