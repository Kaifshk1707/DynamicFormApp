import { Alert, Image, Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { useState } from "react";
import AppTextInput from "./AppTextInput";
import ImageView from "./ImageView";
import * as ImagePicker from "expo-image-picker";

const UserForm = ({submit}) => {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [webSite, setWebSite] = useState("");
  const [image, setImage] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const pickImageGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
      
    } else {
      Alert.alert("You did not select any image");
    }
  };

  const handleUserName =()=>{
    if (userName.length < 3 ) {
      setUserNameError("Username should be at least 3 characters");
    } else if (userName.length > 20 ){
      setUserNameError("Username should be at least 20 characters");      
    }else{
      setUserNameError(null);
    }
  }

  const handleSubmit = () => {
    handleUserName();
    if (!userNameError) {
      
      const data = {
        userName,
        title,
        bio,
        isMember: isEnabled,
        linkedin,
        github,
        webSite,
        image,
      };
      submit(data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Your Details</Text>

      <View style={{ alignItems: "center" }}>
        {image ? (
          <ImageView URI={image} />
        ) : (
          <Image
            source={require("./../assets/images/empty.jpeg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              borderWidth: 3,
              borderColor: "#249781",
              resizeMode: "cover",
            }}
          />
        )}
      </View>

      <AppTextInput
        InputLabel={"Username"}
        placeholder={"Enter your name"}
        value={userName}
        onChangeText={setUserName}
      />
      {userNameError && <Text style={{ color: "red",fontSize:16 }}>{userNameError}</Text>}

      <AppTextInput
        InputLabel={"Title"}
        placeholder={"Enter your title"}
        value={title}
        onChangeText={setTitle}
      />

      <View style={{flexDirection:"row",alignItems:"center"}}>
        <Switch
          trackColor={{false: '#9caec7', true: '#9caec7'}}
          thumbColor={isEnabled ? '#249781' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text  style={{color:"#9caec7",fontSize:16}}>
          Are you a member of Code Club
        </Text>
      </View>

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
  );
};

export default UserForm;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "#249781",
    borderRadius: 10,
    padding: 8,
    marginVertical: 16,
    marginBottom: 50,
  },
  text: {
    color: "#9caec7",
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 8,
    alignSelf: "center",
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageButton: {
    padding: 8,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 3,
    borderColor: "#249781",
  },
  button: {
    backgroundColor: "#249781",
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
  },
});
