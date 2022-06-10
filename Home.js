import react from "react";
import {View,Text, StyleSheet, StatusBar,FlatList, Image} from 'react-native'
import {Card,FAB} from "react-native-paper";
import Profile from "./Profile";


const Home = ({navigation}) => {
    const data = [

        {id : 1, name: "Sallauddin", position:"Graphic Designer",} ,
        {id : 2, name: "Hussain", position:"Mirror Artist"} ,
        {id : 3, name: "Azam", position:"Mechanical Engineer"},
        
       ]  
      

const MyEmployees = ((item) =>{
    return(

<View style = {{margin :10, justifyContent : 'space-between',}}>

    <StatusBar backgroundColor={'#6aff'}></StatusBar>
    <View>
        <Card style =  {styles.mycard} onPress = {()=>navigation.navigate("Pro")}>
      
    <Image style = {{height:60, marginTop : 20, justifyContent: 'center',width : '100%', width :60,  borderRadius : 30,padding : 60 }}
    source= {require('../logo/assets/style.png')}></Image>

<View style = {{flexDirection : 'row',shadowColor: '#171717', opacity : 0.9, shadowRadius  : 10 , shadowOffset : {width : -2, height :6 } ,  alignItems : 'center',  justifyContent : 'center', backgroundColor : 'white'}}>

<Text style = {{flex : 1,fontWeight : 'bold', paddingLeft : 6}}>{item.id} </Text>


    <Text style = {{flex : 1, alignItems : 'center', fontWeight : 'bold'}}>{item.name}</Text>
    <Text>{item.position}</Text>

</View>







    </Card>
    
    </View>

    </View>

    )


    






})


return(
    <View style = {{flex : 1,marginBottom : 30, }}>

<FlatList data={data}
renderItem = {({item}) =>{

return MyEmployees(item)

}}

keyExtractor = {item =>{item.id}}



></FlatList>

<FAB  onPress={() =>navigation.navigate("Creat")}
 

    style={styles.fab}
    small = {false}
    theme = {{colors:{accent:'blue'}}} 
    icon="plus"
 
  />


    {MyEmployees}

    </View>
    

)






}


const styles = StyleSheet.create({

   

    mycard : {


        
        borderRadius : 4,
      
        width : '100%',
    
        
        backgroundColor : '#c8ff00',

        
  
        
        
        


    },
      fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
      },




})

export default Home;