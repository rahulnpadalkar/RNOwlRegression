import React from 'react';
import {Button} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

export const HomeScreen = ({navigation}) => {
  const navigateToGallery = () => {
    navigation.navigate('Gallery');
  };

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        buttonColor="green"
        onPress={navigateToGallery}
        testID="openGallery">
        Open Gallery
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
