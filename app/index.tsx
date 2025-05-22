import { useState } from "react";
import { Button, Text, View } from "react-native";

const Counter = () => {
  const[count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increament" onPress={()=>setCount(count+1)}></Button>
      <Button title="Decreament" onPress={()=>setCount(count-1)}></Button>
    </View>

  );
};
export default function Index() {
  return (
    <View>
      
      <Counter />
    </View>
  );
}
