import React from "react";
import {View, StyleSheet, ScrollView,Image} from 'react-native'
import { TextInput, Button, Text, Appbar , Avatar} from 'react-native-paper';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import Book2 from "./Book2";
import tailwind from "twrnc";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker from 'react-native-image-picker';
import * as yup from 'yup';
import { Formik } from 'formik';


export default Book1 = ({navigation}) =>{
    const route=useRoute();
    const [id, setClientId] = React.useState(route.params.id);
  
    const ToS2=(FormData)=>{
        FormData.clientid=id;
        navigation.navigate('Page 2',{
            data: FormData,
        })
    }

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
            <Formik
              validationSchema={OrderProcessingSchema}
              initialValues={{ ordername: '', weight: '', size:'' }}
              >
              {
                (
                  {
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    isValid
                  }
                ) => (
                  <View>
                    <TextInput
                      placeholder='Order Name'
                      onChangeText={handleChange('ordername')}
                      value={values.ordername}
                      underlineColor='transparent'
                      style={tailwind`m-5 rounded-2xl rounded-t-2xl text-center`}
                    />
                    {errors.username &&
                      <Text style={styles.error}>{errors.username}</Text>
                    }
                    <TextInput
                      placeholder='Weight'
                      onChangeText={handleChange('weight')}
                      value={values.weight}
                      keyboardType='number-pad'
                      underlineColor='transparent'
                      style={tailwind`m-5 rounded-2xl rounded-t-2xl text-center`}
                    />
                    {errors.weight &&
                      <Text style={styles.error}>{errors.weight}</Text>
                    }
                    <TextInput
                      placeholder='Size'
                      onChangeText={handleChange('size')}
                      value={values.size}
                      keyboardType='number-pad'
                      underlineColor='transparent'
                      style={tailwind`m-5 rounded-2xl rounded-t-2xl text-center`}
                    />
                    {errors.size &&
                      <Text style={styles.error}>{errors.size}</Text>
                    }
                    <Button style={tailwind `mx-15 bg-amber-400 text-black mb-2`} mode="contained" onPress={()=>{ToS2(values)}}><Text style={tailwind`font-bold`}>Next</Text></Button>
                    <Text style={tailwind`font-semibold text-center mb-2 text-gray-500`}>--OR--</Text>
                    <Button style={tailwind` mx-15 bg-amber-400 text-black mb-0`} mode="contained" onPress={()=>{
                        navigation.navigate('Login')
                    }}><Text style={tailwind`font-bold`}>LogOut</Text></Button>
                    
                  </View>
                )
              }
            </Formik>
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

const OrderProcessingSchema = yup.object().shape({
    ordername: yup.string().required('Order Name is Required'),
    weight: yup.string().required('Weight is required'),
    size: yup.string().required('Size is required')
  
  })
  
