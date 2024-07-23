import React, { useState } from 'react';
import { StyleSheet, View, Button, Modal, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/MainNavigator';
import CustomMarker from '../components/CustomMarker';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

type GarageSale = {
  id: number;
  title: string;
  latitude: number;
  longitude: number;
  description: string;
  address: string;
  image: any;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedSale, setSelectedSale] = useState<GarageSale | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const garageSales: GarageSale[] = [
    { id: 1, title: 'Garage Sale 1', latitude: 43.6465, longitude: -79.4173, description: 'Lots of great items!', address: '123 Trinity St, Toronto, ON', image: require('../assets/placeholdersale1.jpg') },
    { id: 2, title: 'Garage Sale 2', latitude: 43.6460, longitude: -79.4200, description: 'Cheap and affordable goods.', address: '456 Bellwoods Ave, Toronto, ON', image: require('../assets/placeholdersale2.jpg') },
  ];

  const handleMarkerPress = (sale: GarageSale) => {
    setSelectedSale(sale);
  };

  const handleCalloutPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedSale(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: 43.6465,
        longitude: -79.4173,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        {garageSales.map(sale => (
          <Marker
            key={sale.id}
            coordinate={{ latitude: sale.latitude, longitude: sale.longitude }}
            onPress={() => handleMarkerPress(sale)}
          >
            <CustomMarker image={sale.image} />
            <Callout onPress={handleCalloutPress}>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{sale.title}</Text>
                <Text style={styles.calloutDescription}>{sale.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      {selectedSale && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={selectedSale.image} style={styles.image} />
              <Text style={styles.title}>{selectedSale.title}</Text>
              <Text style={styles.description}>{selectedSale.description}</Text>
              <Text style={styles.address}>{selectedSale.address}</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  callout: {
    width: 150,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  calloutDescription: {
    fontSize: 14,
    color: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  address: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
