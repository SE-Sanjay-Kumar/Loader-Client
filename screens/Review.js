import React from "react";
import {View, StyleSheet} from 'react-native'
import { TextInput, Button, Text} from 'react-native-paper';
import Snackbar from "react-native-snackbar";
import tailwind from "twrnc";
import { useRoute } from "@react-navigation/native";
import { getReview, addReview } from "../src/services/client_service";


export default Review = () =>{
    const route=useRoute();
    const [order,setOrder]=route.params.data;
    const [review,setReview]=React.useState();
    const PostReview=()=>{
        order.Review=review;
        addReview(order).then((response)=>{
            Snackbar.show({
                text: "Submitted the Review.",
                duration: Snackbar.LENGTH_SHORT,
                action: {
                  text: 'close',
                  textColor: 'green',
                  onPress: () => { /* Do something. */ },
                },
              });
        })
    .catch((err)=>{
        if(err.response){
            console.log(err.response);
        }
        else if(err.request){
            console.log(err.request);
        }
        else {
            console.log(err);
        }
    })    
    }
    React.useEffect(()=>{
        getReview(order).then((response)=>{
            setReview(response.data.review);
        })
    .catch((err)=>{
        if(err.response){
            console.log(err.response);
        }
        else if(err.request){
            console.log(err.request);
        }
        else {
            console.log(err);
        }
    })    ;
    });
    return(
        <View style={tailwind`bg-pink-200 h-full`}>
            <Text style={tailwind`text-center text-2xl font-mono font-extrabold text-sky-900
                                    underline pb-0 my-5 `}>Review Our Service</Text>
            <TextInput
                    style={tailwind`my-5 mx-10 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor="transparent"
                    placeholder=''
                    value={order.orderId}
                    label='Enter Order ID'
            />
            <TextInput
                    style={tailwind`my-5 mx-10 mb-0 rounded-b-2xl rounded-t-2xl text-center h-50`}
                    underlineColor="transparent"
                    placeholder=''
                    label='Add Review'
                    value={review}
                    onChangeText={value=>setReview(value)}
            />
            <Button style={tailwind` my-5 mx-15 bg-amber-400 text-black`} mode="contained" onPress={()=>{PostReview()}}>Submit</Button>
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