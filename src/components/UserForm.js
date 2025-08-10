import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppTextInput from './AppTextInput'
import ImageView from './ImageView'
import * as ImagePicker from "expo-image-picker";

const UserForm = () => {
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [webSite, setWebSite] = useState('');

  const pickImageGallery = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      console.log(result);
    }else{
      Alert.alert("You did not select any image")
    }
  }

  const handleSubmit = ()=>{
    const data ={
      userName, title, bio, linkedin, github
    }
    console.log(
     data
    );
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Your Details</Text>

      <View style={{ alignItems: "center" }}>
        <ImageView URI={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."} />
      </View>

      <AppTextInput
        InputLabel={"Username"}
        placeholder={"Enter your name"}
        value={userName}
        onChangeText={setUserName}
      />

      <AppTextInput
        InputLabel={"Title"}
        placeholder={"Enter your title"}
        value={title}
        onChangeText={setTitle}
      />

      <AppTextInput
        InputLabel={"Bio"}
        placeholder={"Enter your bio"}
        multilines
        numberOfLines={4}
        value={bio}
        onChangeText={setBio}
      />

      <AppTextInput
        InputLabel={"Linkedin"}
        placeholder={"Enter your linkedin"}
        value={linkedin}
        onChangeText={setLinkedin}
      />

      <AppTextInput
        InputLabel={"GitHub"}
        placeholder={"Enter your gitHub"}
        value={github}
        onChangeText={setGithub}
      />

      <AppTextInput
        InputLabel={"WebSite"}
        placeholder={"Enter your webSite"}
        value={webSite}
        onChangeText={setWebSite}
      />

      <Pressable style={styles.imageButton} onPress={pickImageGallery}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  )
}

export default UserForm

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "#249781",
    borderRadius: 10,
    padding: 8,
    marginVertical: 16,
    marginBottom: 50
  },
  text: {
    color: "#9caec7",
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 8,
    alignSelf: "center",
    padding: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  imageButton: {
    padding: 8,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 3,
    borderColor: "#249781"
  },
  button: {
    backgroundColor: "#249781",
    padding: 12,
    borderRadius: 10,
    marginVertical: 8
  }
})
