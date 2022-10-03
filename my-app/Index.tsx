import * as  React from "react";
import { View } from "react-native";
import { TextInput, Button} from 'react-native-paper';

const Index = ({ navigation }: any) => {
    const { useState, useRef } = React;
    const [countryName, setCountryName] = useState("")
    const [minValueError, setMinValueError] = useState(true)

    const errorRef = useRef(false)

    const handleButtonPress = () => {
        navigation.push('Details1', { countryName })
    }

    const handleChange = (value: string) => {
        if (value.length < 3) {
            setMinValueError(true)
            errorRef.current = true;
        }
        else {
            setMinValueError(false)
            errorRef.current = false;
        }
        setCountryName(value)
    }


     return (
        <View style={{flex: 1, justifyContent: "center", width: "40%", alignSelf: "center"}}>
      <TextInput
      label="Enter Country"
      value={countryName}
      onChangeText={handleChange}
      mode="outlined"
    />

    <Button disabled={minValueError} style={{backgroundColor:"#6600ff", marginTop:45, borderRadius:5, width:100, justifyContent: "center", alignSelf: "center"}}
     mode="contained" onPress={handleButtonPress}>
    Submit
  </Button>
    </View>
    );
};

export default Index;