import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import ConfirmOTP from '../ConfirmOTP';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
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
    return <ConfirmOTP phoneNumber={fullPhoneNumber} />;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image_logo}
        source={require('../../../components/assets/logo1.png')}
      />
      <View style={styles.country_input}>
        <View style={styles.country_picker__container}>
          <CountryPicker
            theme={DARK_THEME}
            countryCode={countryCode}
            withFilter="false"
            withFlag
            withCallingCode={true}
            onSelect={country => setCountryCode(country.cca2)}
            defaultCode="+90"
          />
          <Text style={styles.country_code_text}>{countryCode}</Text>
        </View>

        <TextInput
          style={styles.phone_input}
          value={phoneNumber}
          placeholder="Telefon Numarası"
          placeholderTextColor="gray"
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity
        style={styles.button_phone}
        title="Devam"
        onPress={handlePhoneAuth}>
        <Text style={styles.button_continue}>DEVAM</Text>
      </TouchableOpacity>

      {/* line */}
      <KeyboardAvoidingView
        style={styles.container_line}
        behavior="padding"
        keyboardVerticalOffset={100}>
        <View style={styles.line_view}>
          <View style={styles.line}></View>
          <View style={styles.text_container_line}>
            <Text style={styles.text_line}>veya</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default FirstPage;
