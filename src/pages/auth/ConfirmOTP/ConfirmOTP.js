import {Text, View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './ConfirmOTP.styles';
import { useRoute } from '@react-navigation/native';


const ConfirmOTP = () => {
  const route = useRoute();

  const[otpInput, setOtpInput] = useState('');

  const confirmData = route.params.confirmData;

  console.log(confirmData);

  const submitOtp = async() => {
    try {
      const response = await confirmData.confirm(otpInput);
      console.log(response);

      alert("Telefon Numaranız Doğrulandı.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>ConfirmOTP</Text>
      <TextInput 
        placeholder="Doğrulama Kodu" 
        onChangeText={(value) => setOtpInput(value)}
      />
      <Button title="Gönder" onPress={() => submitOtp()} />
    </View>
  );
};

export default ConfirmOTP;
