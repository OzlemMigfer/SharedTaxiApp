import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import ConfirmOTP from '../ConfirmOTP';
import CountryPicker from 'react-native-country-picker-modal';
import styles from './FirstPage.styles';

const FirstPage = () => {
  const [countryCode, setCountryCode] = useState('TR');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationStarted, setVerificationStarted] = useState(false);


  const handlePhoneAuth = () => {
    setVerificationStarted(true);
  };

  if (verificationStarted) {
    const fullPhoneNumber = `+90${phoneNumber}`;
    return (
      <ConfirmOTP phoneNumber={fullPhoneNumber} />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.country_code}>
        <CountryPicker
          countryCode={countryCode}
          withFilter="false"
          withFlag
          withCallingCode={true}
          onSelect={(country) => setCountryCode(country.cca2)}
          defaultCode="+90"
        />
        <Text style={styles.country_code_text}>{countryCode}</Text>

        <TextInput
          value={phoneNumber}
          placeholder="Telefon Numarası"
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType='phone-pad'
        />
      </View>
      <Button title="Devam" onPress={handlePhoneAuth} />
    </View>
  );
};

export default FirstPage;
