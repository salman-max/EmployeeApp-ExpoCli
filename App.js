// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import CreateEmployee from './CreateEmployee';
import Profile from './Profile';
// import Profile from './Profile';
const Stack = createStackNavigator();

const Myoptions = {

  

      title : 'Home',
      headerTintColor : 'white',

      headerStyle : {

        backgroundColor : '#6a44ff'

      }



   

}


function App() {

  return (



<Stack.Navigator>
    <Stack.Screen name="Home" component={Home} 
    
   options = {Myoptions}
    
    
    /> 
      <Stack.Screen name="Creat" component={CreateEmployee}
      
      options = {{...Myoptions, title: "Create Employee"}}
      
      />
      <Stack.Screen name="Pro" component={Profile}
      options = {{...Myoptions, title:"Profile"}}
            
      />
     
    </Stack.Navigator>



  
 
 




  );
}


export default () => {
  return(


<NavigationContainer>

<App/>

</NavigationContainer>



  )


}

