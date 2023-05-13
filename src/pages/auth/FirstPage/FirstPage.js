import {Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const FirstPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [confirmData, setConfirmData] = useState('');

  const navigation = useNavigation();


  const sendOtp = async () => {
    try {
      const mobile = '+90' + mobileNumber;
      const response = await auth().signInWithPhoneNumber(mobile);
      setConfirmData(response);
      console.log(response);
      alert('Kod gönderildi lütfen kodu giriniz...');


      navigation.navigate({
        name: 'ConfirmOTP',
        params: {confirmData:confirmData}
      });
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <View>
      <Text>FirstPage</Text>
      <View>
        <TextInput
          placeholder="Telefon Numarası"
          onChangeText={value => setMobileNumber(value)}
        />
        <Button title="Devam" onPress={() => sendOtp()} />
      </View>
    </View>
  );
};

export default FirstPage;
