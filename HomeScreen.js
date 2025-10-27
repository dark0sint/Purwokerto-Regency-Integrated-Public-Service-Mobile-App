// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://your-laravel-api-url/api/services')
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  return (
    <View>
      <Text>Integrated Public Services - Purwokerto Regency</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ServiceDetail', { service: item })}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
