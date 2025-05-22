import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={()=>setCount(count+1)}></Button>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})