import React,{useState} from 'react'
import {Text,View,StatusBar,Modal, StyleSheet,Linking} from 'react-native'
import { TextInput, Button} from 'react-native-paper'


const CreateEmployee = (props) =>{


        const [name,setName]= useState("")
        const [phone,setPhone] = useState("")
        const [email,setEmail] = useState("")
        const [salary,setSalary] = useState("")
        const [picture,setPicture] = useState("")
        const [modal,setModal] = useState(false)
    
        

    return(

        <View style = {styles.mytextInput}>


{/* <StatusBar backgroundColor={"#2e04d4"}></StatusBar> */}
        <TextInput label='Name'  value={name} theme = {theme} mode = 'outlined' onChangeText = {text => setName (text)}/>
        <TextInput label='Phone' value={phone} mode = 'outlined' theme = {theme} keyboardType= 'number-pad'  onChangeText = {text =>setPhone(text)}/>
        <TextInput label='Email'  value = {email} mode = 'outlined'theme = {theme} onChangeText = {text =>setEmail(text)}/>
        <TextInput label='Salary'  value = {salary} mode = 'outlined'theme = {theme} onChangeText = {text =>setSalary(text)}/>
        <TextInput label='Picture'  value = {picture} mode = 'outlined'theme = {theme} onChangeText = {text =>setPicture(text)}/>
        
        
       
      <View style = {{flexDirection : 'column', justifyContent : 'space-between', margin : 10, }}>
        <Button icon= "camera" mode='contained'  onPress={() =>setModal(true)}>Click Here</Button>
        

        <Button icon= "upload" mode='contained'  onPress={() =>setModal(true)}>Upload Image</Button>
        </View>

        



     


       <View>
        <Modal

transparent = {true}
visible = {modal}
animationType = 'fade'
onRequestClose={() => {

    setModal(false)

}}



>

<View style = {styles.mymodal}>

<View style = {styles.mybutton}>
<Button icon= "facebook" mode='contained' theme={theme} Linking = 'https://www.facebook.com' onPress={() =>setModal(true)}>Submit</Button>

<Button icon= "instagram" mode='contained'  onPress={() =>setModal(true)}>Cancel</Button>

</View>
</View>




</Modal>
</View>


        </View>





    )
    






}



const theme = {

    colors : {

        primary : '#a807d9'

    }

}

const styles = StyleSheet.create({



   mybb : {

   
   flexDirection : 'column',
 
   width : '100%',
   marginTop : 10,
   
 
   
    
   

   },

  mytextInput : {
     
      flexDirection : 'column',
      margin : 5,
      alignContent : 'space-around',
      
    
 
    



  }  ,
  mybutton : {

flexDirection : 'row',
justifyContent : 'space-between',
width : "100%",
marginBottom :20,
padding : 10,

    

  },

  mymodal : {

    flexDirection : 'row',
    position : 'absolute',
    bottom : 2,
    backgroundColor : 'yellow'
   




  }


})

export default CreateEmployee;