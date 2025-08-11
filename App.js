import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import FormData from './src/components/FormData';
import UserForm from './src/components/UserForm';
import mainAPI from './src/apis/mainAPI';  

const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  const [userDetails, setUserDetails] = useState({});

   const handleFetchData = async () => {
      const result = await mainAPI.get('/users');
      setUserDetails(result.data[0]);
      console.log('User saved:', result.data);
  };
  const handleSubmit = async (userData) => {
      const result = await mainAPI.post('/users', userData);
      setUserDetails(result.data);
      console.log('User saved:', result.data);
  };

  useEffect(()=>{
    handleFetchData();
  },[]);

  return (
    <ScrollView style={styles.container}>
      <FormData userDetails={userDetails}/>
      <UserForm submit={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121933',
    paddingVertical: statusBarHeight,
    paddingHorizontal: 16,
  },
});
