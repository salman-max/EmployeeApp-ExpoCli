// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// import AnimationPart from './Animation';
import SweetCard from './Home';
import CreateEmployee from './CreateEmployee';
// import Profile from './Profile';

function App() {
  return (

<View>
    <Stack.Navigator>

    <Stack.Screen name="Home" component={SweetCard}/>
    {/* <Stack.Screen name="Profil" component={Profile}/> */}

      <Stack.Screen name="Create" component={CreateEmployee} />
    </Stack.Navigator>
  
   


      {/* <Profile/> */}
      <CreateEmployee/>



      {/* <AnimationPart /> */}
      <SweetCard />

      <CreateEmployee />
      
       
 
      </View>






  );
}


export default() => {

  return(

    <NavigationContainer>
<App/>
</NavigationContainer>
  )
}   