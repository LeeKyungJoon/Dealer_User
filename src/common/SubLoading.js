import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function SubLoading({ route, navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size="large" color="#459bfe" />
    </View>
  );
}
