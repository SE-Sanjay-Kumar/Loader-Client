import React from "react";
import {View, StyleSheet, ScrollView, Image} from 'react-native'
import { TextInput, Button, Text, Appbar, Avatar } from 'react-native-paper';
import tailwind from "twrnc";
import { getUser,updateUser } from "../src/services/client_service";
import Snackbar from "react-native-snackbar";
export default ViewProfile = () =>{
    const [user,setUser]=React.useState(
        {userName: '',
        cnic: '',
        phoneNumber: '',
        companyName: '',
        newPassword: '',
        confirmPassword: '',
    }
    );
    const [users,setUsers]=React.useState();
    const updateProfile=()=>{
        user.id=global.id;
        if(user.newPassword==null){
            console.log('ne hao')
            user.newPassword=users.password;
            updateUser(user).then((response)=>{
                Snackbar.show({
                    text: "Successfully Updated Profile.",
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
                console.log(err.response.data);
            }
            else if(err.request){
                console.log(err.request);
            }
            else {
                console.log(err);
            }
        })  ;
        }
        else if(user.newPassword==user.confirmPassword){
            updateUser(user).then((response)=>{
                Snackbar.show({
                    text: "Successfully Updated Profile.",
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
            })}
        
    }
    React.useEffect(()=>{
        getUser(global.id).then((response)=>{
                setUser(response.data);
                setUsers(response.data);
                console.log(user);
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
          
    },[]);
    
    return(
        <View style={tailwind`bg-pink-200`}>
            
            <ScrollView style={tailwind`h-1/1 bg-violet-300 rounded-t-3xl`}>
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor='transparent'
                    placeholder=""
                    value={user.userName}
                    label='Name'
                    onChangeText={(value) => setUser({ ...user, userName: value })}
                    />

                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor='transparent'
                    placeholder=""
                    value={user.cnic.toString()}
                    label='CNIC'
                    onChangeText={(value) => setUser({ ...user, cnic: value })}
                    />
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor='transparent'
                    placeholder=""
                    value={user.phoneNumber}
                    label='Phone Number'
                    onChangeText={(value) => setUser({ ...user, phoneNumber: value })}
                    />
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor='transparent'
                    placeholder=""
                    value={user.companyName}
                    label='Business'
                    onChangeText={(value) => setUser({ ...user, companyName: value })}
                    />
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor='transparent'
                    placeholder=""
                    label='New Password'
                    onChangeText={(value) => setUser({ ...user, newPassword: value })}
                    />
                <TextInput
                    style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    underlineColor='transparent'
                    placeholder=""
                    label='Confirm Password'
                    onChangeText={(value) => setUser({ ...user, confirmPassword: value })}
                    />
                <Button style={tailwind`mx-20 bg-amber-400 my-5`} mode="contained" onPress={updateProfile}>Update Profile</Button>
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
