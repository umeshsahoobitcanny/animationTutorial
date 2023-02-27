import {StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';

const App = () => {
  const position = new Animated.ValueXY({x: 0, y: 0});
  // Animated.timing(position, {toValue: {x: 200, y: 500}}).start();
  Animated.spring(position, {
    toValue: {x: 200, y: 500},
    speed: 2,
    bounciness: 20,
  }).start();
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          height: 80,
          width: 80,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
          transform: [{translateX: position.x}, {translateY: position.y}],
        }}>
        <Text>hello</Text>
      </Animated.View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
