import {
  Alert,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import AppTextInput from "./AppTextInput";
import ImageView from "./ImageView";
import * as ImagePicker from "expo-image-picker";
import { useForm, Controller } from "react-hook-form";

const UserForm = ({ submit }) => {
  const [image, setImage] = useState(null);

  const onSubmit = (data) => submit(data);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      member: false,
      title: "",
      bio: "",
      linkedin: "",
      github: "",
      website: "",
      image: "./../assets/images/empty.jpeg",
    },
  });

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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Your Details</Text>

      <View style={{ alignItems: "center" }}>
        <ImageView URI={image || "./../assets/images/empty.jpeg"} />
      </View>
      
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
          maxLength: 20,
        }}
        name="userName"
        render={({ field: { onChange, onBlur, value } }) => (
          <AppTextInput
            InputLabel="Username"
            placeholder="Enter your name"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.userName && (
        <Text style={{ color: "red", fontSize: 16 }}>
          Username must be between 3 and 20 characters
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
          maxLength: 20,
        }}
        name="title"
        render={({ field: {onChange, onBlur, value} }) => (
          <AppTextInput
            InputLabel="title"
            placeholder="Enter your title"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.title && (
        <Text style={{ color: "red", fontSize: 16 }}>
          Title must be between 3 and 20 characters
        </Text>
      )}

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Controller
          control={control}
          name="member"
          render={({ field: { onChange, value } }) => (
            <Switch
              trackColor={{ false: "#1d68d1ff", true: "#9caec7" }}
              thumbColor={value ? "#249781" : "#f4f3f4"}
              onValueChange={onChange}
              value={value}
            />
          )}
        />
        <Text style={{ color: "#9caec7", fontSize: 16 }}>
          Are you a member of Code Club
        </Text>
      </View>

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 8,
          maxLength: 100,
        }}
        name="bio"
        render={({ field: {onChange, onBlur, value} }) => (
          <AppTextInput
            InputLabel={"bio"}
            placeholder={"Enter your bio"}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            multilines
            numberOfLines={4}
          />
        )}
      />
      {errors.bio && (
        <Text style={{ color: "red", fontSize: 16 }}>
          Bio must be between 8 and 20 characters
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 10,
          maxLength: 20,
        }}
        name="linkedin"
        render={({ field: {onChange, onBlur, value} }) => (
          <AppTextInput
            InputLabel={"linkedin"}
            placeholder={"Enter your linkedin"}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.linkedin && (
        <Text style={{ color: "red", fontSize: 16 }}>
          Linkedin must be required
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 10,
          maxLength: 20,

        }}
        name="github"
        render={({ field: {onChange, onBlur, value} }) => (
          <AppTextInput
            InputLabel={"github"}
            placeholder={"Enter your github"}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {errors.github && (
        <Text style={{ color: "red", fontSize: 16 }}>
          GitHub must be required
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 10,
          maxLength: 20,
         
        }}
        name="website"
        render={({ field:{ onChange, onBlur, value} }) => (
          <AppTextInput
            InputLabel={"website"}
            placeholder={"Enter your website"}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
       {errors.website && (
        <Text style={{ color: "red", fontSize: 16 }}>
          WebSite must be required
        </Text>
      )}

      <Pressable style={styles.imageButton} onPress={pickImageGallery}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
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
