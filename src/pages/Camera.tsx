import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  useCameraDevice,
  useCameraPermission,
  Camera as CameraVision,
} from 'react-native-vision-camera';

const Camera = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
//   const [devicePosition, setDevicePosition] = useState<'back' | 'front'>(
//     'back',
//   );

  const device = useCameraDevice('back');
  if (!hasPermission) {
    requestPermission();
  }

  console.log(hasPermission);
  if (!hasPermission) {
    return (
      <View>
        <Text>
          Y a pas les permissions, comment veux tu que je prenne une photo
        </Text>
      </View>
    );
  }
  if (undefined === device) {
    return (
      <View>
        <Text>Aucune camera Selectionner</Text>
      </View>
    );
  }
  return (
    <View>
      <CameraVision  style={{height:'100%', width:'100%'}} device={device} isActive={true} />
    </View>
  );
};

export default Camera;
