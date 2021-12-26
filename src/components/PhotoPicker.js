import React, { useState } from 'react'
import { View, StyleSheet, Image, Button, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'



export const PhotoPicker = ({onPick}) => {
  const [image, setImage] = useState(null)
   // This function is triggered when the "Open camera" button pressed
   const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9]
    })

    if (!result.cancelled) {
      setImage(result.uri);
      onPick(result.uri)
    }
  }
  return (
    <View style={styles.wrapper}>
      <Button 
        title='Сделать фото'
        onPress={openCamera} 
       
      />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
})
