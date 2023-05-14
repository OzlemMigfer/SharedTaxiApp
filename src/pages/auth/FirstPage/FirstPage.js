import {Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import ConfirmOTP from '../ConfirmOTP';

const FirstPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationStarted, setVerificationStarted] = useState(false);

  const handlePhoneAuth = () => {
    setVerificationStarted(true);
  };

  if (verificationStarted) {
    return (
      <ConfirmOTP phoneNumber={phoneNumber} />
    );
  }

  return (
    <View>
      <Text>FirstPage</Text>
      <View>
        <TextInput
          value={phoneNumber}
          placeholder="Telefon Numarası"
          onChangeText={setPhoneNumber}
        />
        <Button title="Devam" onPress={handlePhoneAuth} />
      </View>
    </View>
  );
};

export default FirstPage;
