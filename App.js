import {Image, TouchableOpacity, useColorScheme, View, Text} from 'react-native'
import { MD3LightTheme, Provider as PaperProvider, Switch, TouchableRipple, Button } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Register from './screens/Register';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItem, createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Login from './screens/Login';
import 'react-native-gesture-handler';
import ViewProfile from './screens/ViewProfile';
import Book1 from './screens/Book1';
import Orders from './screens/Orders';
import TrackOrders from './screens/TrackOrders';
import Review from './screens/Review';
import Book2 from './screens/Book2';
import Book3 from './screens/Book3';
import Book4 from './screens/Book4';
import tailwind from 'twrnc';
import Payment from './screens/Payment';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import {en,ur} from './translation/Localization'
import { useState } from 'react';
import * as localize from "react-native-localize"
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
// import en from './translation/en.json';
// import ur from './translation/ur.json';

// selectedLanguage();{
//   i18next.init({
//     interpolation: {
//       escapeValue: false
//     },
//     lng: this.state.selectedLanguage,
//     resources: {
//       en: {
//         common: en
//     },
//     ur: {
//       common: ur  
//     },
//   },
//   });
// }

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  let [locale , setLocale] = useState(localize.locale);
  i18next.fallbacks = true;
  i18next.translations = {en, ur};
  i18next.locale = locale;

  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    // theme={theme}
    <PaperProvider >  
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer style={[tailwind`bg-violet-300`, isDarkTheme
              ? { backgroundColor: 'black' }
              : { backgroundColor: 'white' }]} >

            <Drawer.Navigator initialRouteName="Login" drawerContent={props=>{
                      return (
                        <DrawerContentScrollView {...props}>
                          <DrawerItemList {...props} />
                          {/* <TouchableRipple>
                            <View>
                              {locale != "en" ? <Button style={tailwind`bg-amber-400  `} mode='elevated' 
                                onPress={()=> setLocale("en")}>
                                  <Text style={tailwind`text-white`}>Translate to English</Text>
                                </Button> : undefined}
                                {locale != "ur" ? <Button style={tailwind`bg-amber-400  `} mode='elevated' 
                                onPress={()=> setLocale("ur")}>
                                  <Text style={tailwind`text-white`}>Translate to Urdu</Text>
                                </Button> : undefined}
                              
                            </View>
                          </TouchableRipple> */}
                        </DrawerContentScrollView>
                      )
                    }} 
                    
              screenOptions={{
              drawerStyle: { backgroundColor: '#c4b5fd' },
              drawerPosition: 'left',
              headerStyle: {backgroundColor: '#d9b3ff'},
              headerShown: false,
              fontWeight: 'bold'
              }}>
              <Drawer.Screen name="Login" component={Login} options={{
                  drawerItemStyle: { height: 0 }
                  }}/>
              <Drawer.Screen name='Home' component={Book1} />
              <Drawer.Screen name="View Profile" component={ViewProfile} />
              <Drawer.Screen name= "Orders" component={Orders}/>
              <Drawer.Screen name= "TrackOrders" component={TrackOrders} />
              <Drawer.Screen name="Review" component={Review}/>
              <Drawer.Screen name="Page 2" component={Book2} options={{
                   drawerItemStyle: { height: 0 }
                  }}/>
              <Drawer.Screen name="Page 3" component={Book3} options={{
                  drawerItemStyle: { height: 0 }
                  }}/>
              <Drawer.Screen name="Page 4" component={Book4} options={{
                  drawerItemStyle: { height: 0 }
                  }}/> 
              <Drawer.Screen name="Page 5" component={Payment} options={{
                  drawerItemStyle: { height: 0 }
                  }}/>
              
              <Drawer.Screen name="Register" component={Register} options={{
                  drawerItemStyle: { height: 0 }
                  }}/>

          
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>

  )
}

export default App;