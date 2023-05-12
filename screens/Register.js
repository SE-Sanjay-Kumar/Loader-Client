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
import { useState } from 'react';
import Snackbar from "react-native-snackbar"
import tailwind from 'twrnc';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default Register = ({navigation}) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const goBack =()=>{
    navigation.navigate('Login');
  }
  const [agree, setAgree] = useState(false);
  return (
    <HideKeyboard>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={tailwind`bg-pink-200`}>
          <View style={tailwind`h-1/3 `}>
            <Image source={require('../screens/pictures/logo.jpg')}
              style={[tailwind``,{resizeMode: "cover", width: responsiveWidth(100)}]}></Image>

            
          </View>
          <ScrollView style={tailwind`h-2/3 `}>
          <Text style={tailwind`text-center text-2xl font-mono font-extrabold text-sky-900
                                  underline pb-0 dark:text-white `}>REGISTRATION FORM</Text>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{
                username: '',
                email: '',
                password: '',
                cnic: '',
                confirmpassword: '',
                companyName: '',
                phonenumber: '',
              }}
              onSubmit={(values, actions) => {
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
                console.log(values);
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
                      style={tailwind`mt-2 mx-5 mb-0 rounded-b-2xl dark:text-white rounded-t-2xl text-center`}
                    />
                    {errors.username &&
                      <Text style={styles.error}>{errors.username}</Text>
                    }
                    <TextInput
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
                      <Text style={tailwind`font-bold text-sm text-black`}>I agree to terms and conditions</Text>
                    </View>  
                    
                    <View>
                      <Button 
                        textColor='black'
                        style={tailwind`mx-20 bg-amber-400 mb-10`}
                        mode='contained'
                        onPress={goBack}
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
  cnic: yup.string().min(14, ({ min }) => `CNIC must be at least ${min} characters`)
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
  email: yup.string().email("please enter valid email").required("Email address is required"),
  companyName: yup.string().required("company name is required")
})
