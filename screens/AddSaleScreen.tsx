import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/MainNavigator';

type AddSaleScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddSale'>;

type Props = {
  navigation: AddSaleScreenNavigationProp;
};

const AddSaleScreen: React.FC<Props> = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleAddSale = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text>Latitude</Text>
      <TextInput style={styles.input} value={latitude} onChangeText={setLatitude} keyboardType="numeric" />
      <Text>Longitude</Text>
      <TextInput style={styles.input} value={longitude} onChangeText={setLongitude} keyboardType="numeric" />
      <Button title="Add Sale" onPress={handleAddSale} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
});

export default AddSaleScreen;
