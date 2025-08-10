import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants"
import FormData from './src/components/FormData';
import UserForm from './src/components/UserForm';

const statusBarHeight = Constants.statusBarHeight

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <FormData />
      <UserForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121933',     
    paddingVertical: statusBarHeight,
    paddingHorizontal:16
  },
});
