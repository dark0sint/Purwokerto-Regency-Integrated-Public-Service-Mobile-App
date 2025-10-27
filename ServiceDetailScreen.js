// screens/ServiceDetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ServiceDetailScreen({ route }) {
  const { service } = route.params;

  return (
    <View>
      <Text>{service.name}</Text>
      <Text>{service.description}</Text>
      <Button title="Apply" onPress={() => alert('Application submitted!')} />
    </View>
  );
}
