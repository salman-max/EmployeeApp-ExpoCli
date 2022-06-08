import react from "react";
import {View,Text, StyleSheet, StatusBar,FlatList, Image} from 'react-native'
import {Card,Colors,FAB} from "react-native-paper";


const SweetCard = (props) => {
    const data = [

        {id : 1, name: "Sallauddin", position:"Graphic Designer"} ,
        {id : 2, name: "Hussain", position:"Mirror Artist"} ,
        {id : 3, name: "Azam", position:"Mechanical Engineer"},
        {id : 4, name: "Rajkumar", position:"Entrepreneur"},
        {id : 5, name: "Murad", position:"Catering Owner"},
        {id : 6, name: "Hussain", position:"Mirror Artist"} ,
        {id : 7, name: "Azam", position:"Mechanical Engineer"},
        {id : 8, name: "Rajkumar", position:"Entrepreneur"},
        {id : 9, name: "Murad", position:"Catering Owner"},

]  


const MyEmployees = ((item) =>{
    return(

<View>
    <StatusBar backgroundColor={'orange'}></StatusBar>

        <Card style = {styles.mycard}>
        <View>
    <Image style = {{height:60, width :60, borderRadius : 30, flexDirection : 'column' , alignItems : 'center'}}
    source = {{uri : 'https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=549&q=80'}}></Image>

<View style = {styles.ttext}>



<Text>{item.id}</Text>
    <Text>{item.name}</Text>
    <Text>{item.position}</Text>

</View>



        </View>




    </Card>

    </View>

    )


    






})


return(
    <View>

<FlatList data={data}
renderItem = {({item}) =>{

return MyEmployees(item)

}}

keyExtractor = {item =>{item.id}}



></FlatList>

<FAB onPress = {() => { props.navigation.navigate("Create")
 

}}
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


        
        
        margin : 10,
        
        flexDirection : 'column',
        justifyContent : 'center',
        backgroundColor : 'yellow'


    },
      fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
      },

ttext : {

    fontSize : 20,
    flexDirection : 'row',
    alignSelf : 'center',
},



})

export default SweetCard;