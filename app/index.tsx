import { useState } from "react";
import { Button, Text, View } from "react-native";

const Counter = () => {
  const[count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increament" onPress={()=>setCount(count+1)}/>
      <Button title="Decreament" onPress={()=>setCount(count-1)}/>
    </View>

  );
};

const Toggle = () => {
  const[isVisible, setIsVisible] = useState(true);

  return (
    <View>
      {isVisible && <Text>Now you see me</Text>}
      <Button title={isVisible ? "Hide ME!" : "Show Me"} onPress={()=>setIsVisible(!isVisible)}/>
    </View>

  );
};
export default function Index() {
  return (
    <View>
      
      <Toggle />
    </View>
  );
}
