import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

type CustomMarkerProps = {
  image: any;
};

const CustomMarker: React.FC<CustomMarkerProps> = ({ image }) => {
  return (
    <View style={styles.markerContainer}>
      <Image source={require('../assets/marker-background.png')} style={styles.markerBackground} />
      <Image source={image} style={styles.markerImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerBackground: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  markerImage: {
    width: 33, 
    height: 33, 
    borderRadius: 20,
    marginTop: -10,
  },
});

export default CustomMarker;
