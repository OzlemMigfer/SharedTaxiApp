import {Text, View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './ConfirmOTP.styles';
import auth from '@react-native-firebase/auth';


const ConfirmOTP = ({phoneNumber}) => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerification = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      await confirmation.confirm(verificationCode);
      // Doğrulama işlemi başarılıysa, kullanıcıyı uygulamanın ana sayfasına yönlendir
    } catch (error) {
      // Doğrulama işlemi başarısızsa, kullanıcıya hata mesajı göster
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>ConfirmOTP</Text>
      <TextInput 
        value={verificationCode}
        placeholder="Doğrulama Kodu" 
        onChangeText={setVerificationCode}
      />
      <Button title="Gönder" onPress={handleVerification} />
    </View>
  );
};

export default ConfirmOTP;
