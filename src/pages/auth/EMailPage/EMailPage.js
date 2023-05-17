import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './EMailPage.styles';
import { useNavigation } from '@react-navigation/native';

const EMailPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Text style={styles.header}>E-Posta Adresinizi Giriniz</Text>
        <TextInput
          style={styles.input}
          value={userEmail}
          placeholder="name@example.com"
          placeholderTextColor="gray"
          onChangeText={setUserEmail}
          keyboardType="phone-pad"
        ></TextInput>
      </View>
      <View style={styles.footer_container}>
        <TouchableOpacity style={styles.button_next}>
          <Text style={styles.button_next_text}>İleri</Text>
        </TouchableOpacity>
        <View style={styles.triangle}></View>
      </View>
    </View>
  );
};

export default EMailPage;
