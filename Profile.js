// import react from "react";
// import {View, StyleSheet, Text,Image,Linking,Platform } from 'react-native'
// import { Title,Card,Button } from "react-native-paper";
// import { MaterialIcons,FontAwesome } from '@expo/vector-icons';
// import { LinearGradient, } from "expo-linear-gradient";

// const Profile = () => {
// const OpenDial = () => {
//    if (Platform.OS === "android"){
//     Linking.openURL("tel:12345")
// }

//     else{

//         Linking.openURL("telprompt : 123")

//     }
 
// }
//     return(


//         <View>
           

//         <LinearGradient
            
//         colors={["#71ff05", "#eaff05"]}

//         style = {{width : '100%' , height :150}}
//         />

// <Image style = {{height : 140, width : 140, borderRadius : 140/2, marginTop : -60, flexDirection: 'row' ,alignSelf: 'center', borderColor : '#05a643', borderWidth: 5}} source= {require('../logo/assets/style.png')}

// >  



// </Image>
        
        
// <View style = {styles.myfont}>
// <Title style = {{fontSize : 24,  }}>Clever Salah is Here</Title>
// <Text style = {{fontSize : 15, }}>React Native Developer</Text>

            
//          </View>   
            
            
//         <Card style = {styles.mycard}onPress={() => {

//             Linking.openURL("mailto: johnads829@gmail.com")

//         }}>
//         <View style = {styles.emailk}>
//         <MaterialIcons name="email" color={"#f0cc02"} size = {40} />
//         <Text style = {{marginLeft : 10 , fontWeight : 'bold',  fontSize : 18}}>: johnads829@gmail.com</Text>
//             </View>
//             </Card>

//             <Card style = {styles.mycard} onPress = {() =>OpenDial('tel : 12345')}>
//         <View style = {styles.emailk}>
//         <MaterialIcons name="phone" color={"#09ad0b"} size = {40} />
//         <Text style = {{marginLeft : 10 , fontWeight : 'bold',  fontSize : 18}}>: 7329019727 </Text>
//             </View>
//             </Card>

//             <Card style = {styles.mycard} >
//         <View style = {styles.emailk}>
//         <MaterialIcons name="money" color={"#09ad0b"} size = {40} />
//         <Text style = {{marginLeft : 10 , fontWeight : 'bold',  fontSize : 18}}>: 35000 (LPA)</Text>
//             </View>
//             </Card>


//             <View style = {{margin :10, padding : 18,   flexDirection : 'row', justifyContent : 'space-around'}}>

//                     <Button icon= 'account-edit' mode= 'contained' onPress = {() => console.log(alert('Edit Your Profile Here'))}>Edit</Button>
//                     <Button icon= 'delete' mode= 'contained' onPress={() => console.log(alert ('Your Account is Deleted Successfully'))}>Delete Acccount</Button>



//             </View>



//         </View>




//     )




// }

// const styles = StyleSheet.create({

// mycard : {

       
//         margin : 6,
//         opacity : 1.2,
//         shadowColor : 'black',
//         borderWidth : 3,
     
   
       
//         backgroundColor : 'whitesmoke',
        


// },
// emailk : {

//     flexDirection : 'row',
//     alignItems : 'center',
  


// },

// myfont : {

   
    
//         justifyContent : 'center',
//         alignItems : 'center',
   
//     height :60,
    

// },




// })

// export default Profile;