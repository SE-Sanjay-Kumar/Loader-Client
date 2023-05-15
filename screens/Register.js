import { View, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { TextInput, Button, Text, Appbar, RadioButton } from 'react-native-paper';
import { Formik } from 'formik';
import { useTheme } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HideKeyboard from '../components/HideKeyboard';
import * as yup from 'yup';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
<<<<<<< HEAD
import React, { useState } from 'react';
import Snackbar from "react-native-snackbar"
import tailwind from 'twrnc';
import { register } from '../src/services/client_service';
=======
import { useState } from 'react';
import Snackbar from "react-native-snackbar"
import tailwind from 'twrnc';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f

export default Register = ({navigation}) => {
  const theme = useTheme();
  const styles = useStyles(theme);
<<<<<<< HEAD
  const initialFormState = {
    username: '',
    password: '',
    confirmpassword: '',
    cnic: '',
    companyName: '',
    phonenumber: '',
  };
  
  const [formData, setFormData] = useState(initialFormState);
  
    
    const goBack =()=>{
      navigation.navigate('Login');
    }
    
    const [agree, setAgree] = useState(false);
    const registerFunc=(formData)=>{
      if(agree){
        setAgree(false)
        register(formData)
        .then(() => {
        setFormData(initialFormState);
        goBack();
        Snackbar.show({
          text: 'Successfully Registered',
          duration: Snackbar.LENGTH_SHORT,
          action: {
            text: 'close',
            textColor: 'green',
            onPress: () => { /* Do something. */ },
          },
        });
      })
      .catch((err) => {
        if (err.response) {
          Snackbar.show({
            text: 'Error In Registration\n Are You Already Registered?',
            duration: Snackbar.LENGTH_SHORT,
            action: {
              text: 'close',
              textColor: 'green',
              onPress: () => { /* Do something. */ },
            },
          });
          console.log("Error Response"+err.response.data.msg);
        } else if (err.request) {
          Snackbar.show({
            text: 'Error In Registration\n Please Notify Us.',
            duration: Snackbar.LENGTH_SHORT,
            action: {
              text: 'close',
              textColor: 'green',
              onPress: () => { /* Do something. */ },
            },
          });
          console.log("Error Request");
          console.log(err.request);
        } else {
          Snackbar.show({
            text: 'Error In Registration\n Please Notify Us.',
            duration: Snackbar.LENGTH_SHORT,
            action: {
              text: 'close',
              textColor: 'green',
              onPress: () => { /* Do something. */ },
            },
          });
            console.log("Error Else");
          console.log(err.message);
        }
      });
    }
    else
      {
        Snackbar.show({
          text: 'Please Accept Terms and Conditions by selecting checkbox.',
          duration: Snackbar.LENGTH_SHORT,
          action: {
            text: 'close',
            textColor: 'green',
            onPress: () => { /* Do something. */ },
          },
        });
      }

}

=======
  const goBack =()=>{
    navigation.navigate('Login');
  }
  const [agree, setAgree] = useState(false);
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
  return (
    <HideKeyboard>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={tailwind`bg-pink-200`}>
          <View style={tailwind`h-1/3 `}>
            <Image source={require('../screens/pictures/logo.jpg')}
<<<<<<< HEAD
              style={tailwind`max-h-full max-w-full  rounded-full`}></Image>
=======
              style={[tailwind``,{resizeMode: "cover", width: responsiveWidth(100)}]}></Image>
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f

            
          </View>
          <ScrollView style={tailwind`h-2/3 `}>
          <Text style={tailwind`text-center text-2xl font-mono font-extrabold text-sky-900
<<<<<<< HEAD
                                  underline pb-0 `}>REGISTRATION FORM</Text>
=======
                                  underline pb-0 dark:text-white `}>REGISTRATION FORM</Text>
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{
                username: '',
<<<<<<< HEAD
                password: '',
                confirmpassword: '',
                cnic: '',
=======
                email: '',
                password: '',
                cnic: '',
                confirmpassword: '',
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
                companyName: '',
                phonenumber: '',
              }}
              onSubmit={(values, actions) => {
<<<<<<< HEAD

=======
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
                actions.resetForm();
                Snackbar.show({
                  text: 'Registered',
                  duration: Snackbar.LENGTH_SHORT,
                  action: {
                    text: 'close',
                    textColor: 'green',
                    onPress: () => { /* Do something. */ },
                  },
                });
<<<<<<< HEAD
                
=======
                console.log(values);
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
              }}
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
                      placeholder='Username'
                      // label='Enter user name'
                      onChangeText={handleChange('username')}
                      value={values.username}
                      underlineColor='transparent'
<<<<<<< HEAD
                      style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
=======
                      style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl dark:text-white rounded-t-2xl text-center`}
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
                    />
                    {errors.username &&
                      <Text style={styles.error}>{errors.username}</Text>
                    }
                    <TextInput
<<<<<<< HEAD
=======
                      placeholder='logan@abc.com'
                      // label='Enter Email'
                      onChangeText={handleChange('email')}
                      value={values.email}
                      underlineColor='transparent'
                      style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                    />
                    {errors.email &&
                      <Text style={styles.error}>{errors.email}</Text>
                    }
                    <TextInput
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
                      style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                      // label='Enter Password'
                      placeholder='Password'
                      secureTextEntry={true}
                      underlineColor='transparent'
                      onChangeText={handleChange('password')}
                      value={values.password}
                    />
                    {errors.password &&
                      <Text style={styles.error}>{errors.password}</Text>
                    }
                    <TextInput
                      style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                      // label='Confirm Password'
                      placeholder='Confirm Password'
                      secureTextEntry={true}
                      underlineColor='transparent'
                      onChangeText={handleChange('confirmpassword')}
                      value={values.confirmpassword}
                    />
                    {errors.confirmpassword &&
                      <Text style={styles.error}>{errors.confirmpassword}</Text>
                    }
                    <TextInput
                      style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                      // label='CNIC'
                      placeholder='CNIC'
                      onChangeText={handleChange('cnic')}
                      underlineColor='transparent'
                      value={values.cnic}
                      keyboardType='numeric'
                    />
                    {errors.cnic &&
                      <Text style={styles.error}>{errors.cnic}</Text>
                    }
                    <TextInput
                      style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                      // label='Phone Number'
                      placeholder='Phone Number'
                      onChangeText={handleChange('phonenumber')}
                      value={values.phonenumber}
                      underlineColor='transparent'
                      keyboardType='number-pad'
                    />
                    {errors.phonenumber &&
                      <Text style={styles.error}>{errors.phonenumber}</Text>
                    }
                    <TextInput
                      style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl rounded-t-2xl text-center`}
                      // label='Compnay Name'
                      placeholder='Company Name'
                      onChangeText={handleChange('companyName')}
                      underlineColor='transparent'
                      value={values.companyName}
                    />
                    {errors.companyName &&
                      <Text style={styles.error}>{errors.companyName}</Text>
                    }
                    
                    <View  style={tailwind`flex-row items-center ml-20`}> 
                      <RadioButton
                          value={agree}
                          status={agree ? 'checked' : 'unchecked'}
                          onPress={() => {
                            setAgree(true)
                          }}/>
<<<<<<< HEAD
                      <Text  style={tailwind`font-bold text-sm`}>I agree to terms and conditions</Text>
=======
                      <Text style={tailwind`font-bold text-sm text-black`}>I agree to terms and conditions</Text>
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
                    </View>  
                    
                    <View>
                      <Button 
                        textColor='black'
                        style={tailwind`mx-20 bg-amber-400 mb-10`}
                        mode='contained'
<<<<<<< HEAD
                        onPress={() => {registerFunc(values)}}
=======
                        onPress={goBack}
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
                        disabled={!isValid}
                      >
                        <Text style={tailwind`text-center font-bold`}>Register</Text>
                      </Button>
                      </View>

                    
                  </View>
                )
              }
            </Formik>
          </ScrollView>
        </View>
      </SafeAreaView>
      </KeyboardAwareScrollView>

    </HideKeyboard>
  )
}



const useStyles = (theme) => (StyleSheet.create({
  sidebutton: {
    marginTop: hp('2%'),
    width: wp('30%'),
    backgroundColor: theme.colors.greey,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  error: {
    fontSize: 10,
    color: 'red'
  }
}))

const loginValidationSchema = yup.object().shape({
  username: yup.string().required('User name is Required'),
  phonenumber: yup
    .string().min(11, ({ min }) => `Phone Number must be atleast ${min} numbers`)
    .required('Phone Number is required'),
    
    // .matches(/(03)(\d){11}\b/, 'Enter a valid phone number')
    // .required('Phone number is required'),
<<<<<<< HEAD
  cnic: yup.string().min(13, ({ min }) => `CNIC must be at least ${min} characters`)
=======
  cnic: yup.string().min(14, ({ min }) => `CNIC must be at least ${min} characters`)
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
    .required('CNIC is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
<<<<<<< HEAD
=======
  email: yup.string().email("please enter valid email").required("Email address is required"),
>>>>>>> c472c8e5cd6e5583721499c71ce139e8faafcd0f
  companyName: yup.string().required("company name is required")
})
