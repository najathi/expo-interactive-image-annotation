import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import ProductFeatures1 from './src/groups1/ProductFeatures/ProductFeatures';
import ProductFeatures2 from './src/groups2/ProductFeatures/ProductFeatures';

export default function App() {

  const [screen, setScreen] = useState(1);

  let render: any;

  if (screen === 1) {

    render = (
      <View style={styles.containerScreen}>

        <Button
          title="Without Model"
          onPress={() => setScreen(2)} />

        <ProductFeatures1 />

      </View>
    );

  } else {

    render = (

      <View style={styles.containerScreen}>

        <Button
          title="With Model"
          onPress={() => setScreen(1)} />

        <ProductFeatures2 />

      </View>

    );

  }

  return (
    <View style={styles.container}>

      {render}

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScreen: {
    margin: 50,
  }
});
