import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './EMailPage.styles';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const EMailPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({});
    }
  }, []);
  
  
  //save the mail
  const saveEmail = async () => {
    try {
      const response = await firestore().collection('emails').add({ userEmail });
      console.log('E-posta başarıyla eklendi:', response);
    } catch (error) {
      console.error('E-posta kaydetme hatası:', error);
      alert('Hata', 'E-posta kaydetme hatası: ' + error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Text style={styles.header}>E-Posta Adresinizi Giriniz</Text>
        <TextInput
          style={styles.input}
          value={userEmail}
          placeholder="example@example.com"
          placeholderTextColor="gray"
          onChangeText={setUserEmail}>  
        </TextInput>
      </View>
      
      <View style={styles.footer_container}>
        <TouchableOpacity style={styles.button_next} onPress={saveEmail}>
          <Text style={styles.button_next_text}>İleri</Text>
        </TouchableOpacity>
        <View style={styles.triangle}></View>
      </View>
    </View>
  );
};

export default EMailPage;
