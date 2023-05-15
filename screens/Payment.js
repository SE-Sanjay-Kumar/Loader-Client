import React, { useState } from "react";
import {View, StyleSheet, Image, ScrollView} from 'react-native'
import { TextInput, Button, Text, Appbar, RadioButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import tailwind from "twrnc";
import Snackbar from "react-native-snackbar";


export default function Payment(navigation) {
    const [agree, setAgree] = useState(true);
    const [agreeB, setAgreeB] = useState(false)
    const [checked,IsChecked] = useState('')
  return (
    <View style={tailwind`bg-violet-300 h-full`}>
      <Text style={tailwind`text-center text-3xl font-extrabold m-5`}>Payment Method</Text>
      <View style={tailwind`flex-row items-center`}>
        <RadioButton
        value={true}
        status={agree === true ? 'checked' : 'unchecked'}
        onPress={() => {
          setAgree(false)
        }}/>
        <Text>Cash On Delivery</Text></View>
      <View style={tailwind`flex-row items-center`}>
        <RadioButton
        value={false}
        status={agreeB === true ? 'checked' : 'unchecked'}
        onPress={() => {
          setAgreeB(true)
          
        }}
        />
        <Text>Online Payment</Text>
        
        
      </View>
      

      {agreeB && 
            <View>
                <TextInput
                      style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                      // label='Compnay Name'
                      placeholder='Name on Card'
                      underlineColor='transparent'
                      
                    />
                <TextInput
                      style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                      // label='Compnay Name'
                      placeholder='Card Number'
                      underlineColor='transparent'
                      keyboardType='numeric'
                    />
                <TextInput
                      style={tailwind`mt-2 mx-20 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                      // label='Compnay Name'
                      placeholder='CVV'
                      underlineColor='transparent'
                      keyboardType='numeric'
                    />    
            </View>
            }
      
      <Button style={tailwind` mx-15 bg-amber-400 text-black mt-20`} mode="contained" onPress={()=>{
                Snackbar.show({
                    text: 'Order Booked',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                      text: 'close',
                      textColor: 'green',
                      onPress: () => { },
                      
                    },
                  })
            }}><Text style={tailwind`font-bold`}>Confirm Order</Text></Button>
    </View>
  )
}