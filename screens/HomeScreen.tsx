import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/MainNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const garageSales = [
    { id: 1, title: 'Garage Sale 1', latitude: 43.6465, longitude: -79.4173 },
    { id: 2, title: 'Garage Sale 2', latitude: 43.6460, longitude: -79.4200 },
  ];

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
            title={sale.title}
          />
        ))}
      </MapView>
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
});

export default HomeScreen;
