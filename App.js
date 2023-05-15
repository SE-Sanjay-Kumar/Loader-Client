import {Image} from 'react-native';
import { createContext } from 'react';
import { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Register from './screens/Register';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
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



// const theme = {
//   ...MD3LightTheme,
//   colors: {
//     ...MD3LightTheme.colors,
//     pinky: '#D0AEE5',
//     greey: '#D6D6D6'
//   }
// }

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    // theme={theme}
    
    <PaperProvider >  
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer style={tailwind`bg-violet-300`} >
            
            <Drawer.Navigator
            initialParams={{ id: '5' }} 
            screenOptions={{
              drawerStyle: { backgroundColor: '#c4b5fd' },
              drawerPosition: 'left',
              headerStyle: {backgroundColor: '#d9b3ff'},
              headerShown: false,
              fontWeight: 'bold'
              }}>
              <Drawer.Screen name="Login" component={Login} options={{
                  drawerItemStyle: { height: 0 },drawerLockMode: 'locked-closed',gestureEnabled: false,
                  swipeEnabled: false,
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