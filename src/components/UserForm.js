import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AppTextInput from './AppTextInput'

const userForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Your Details </Text>
      <AppTextInput InputLabel={"Username"} placeholder={"Enter your name"} />
      <AppTextInput InputLabel={"Title"} placeholder={"Enter your title"} />
      <AppTextInput InputLabel={"Bio"} placeholder={"Enter your bio"} multilines numberOfLines={4}/>
      <AppTextInput InputLabel={"Linkedin"} placeholder={"Enter your linkedin"} />
      <AppTextInput InputLabel={"GitHub"} placeholder={"Enter your gitHub"} />
      <AppTextInput InputLabel={"WebSite"} placeholder={"Enter your webSite"} />
      <Pressable style={styles.imageButton}>
        <Text style={styles.buttonText}>
          Upload Image
        </Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Upload Image
        </Text>
      </Pressable>
    </View>
  )
}

export default userForm

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "#249781",
    borderRadius: 10,
    padding: 8,
    marginVertical: 16,
    marginBottom:50 
  },
  text: {
    color: "#9caec7",
    fontSize: 18,
    fontWeight: "medium",
    marginVertical: 8
  },
  buttonText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"bold",
    textAlign:"center"
  },
  imageButton:{
    padding:8,
    borderRadius:10,
    marginVertical:8,
    borderWidth:3,
    borderColor: "#249781"
  },
  button:{
    backgroundColor:"#249781",
    padding:12,
    borderRadius:10,
    marginVertical:8
  }
  
})