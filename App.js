import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camera = useRef(null);

  useEffect(() => {
    (async () => {
      const {library} = await MediaLibrary.requestPermissionsAsync(); 
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const snap = async () => {
    if (camera) {
      let photo = await camera.current.takePictureAsync();
      const asset = await MediaLibrary.createAssetAsync(photo.uri);

      console.log("photo =>",photo)
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={camera}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ flex: 0.1, alignSelf: 'flex-end', alignItems: 'center' }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{}}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 0.1, alignSelf:'center',alignItems: 'center',width:160 }}
            onPress={snap}>
            <Text style={{}}> Take Selfie</Text>
          </TouchableOpacity>
        </View>

      </Camera>
    </View>
  );
}


// export default function App() {

//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [operator, setoperator] = useState('');
//   const [result, setresult] = useState();
//   const calculate = () => {
//     if (operator === '+') {
//       setresult(parseInt(num1) + parseInt(num2));
//     }
//     else if (operator === '-') {
//       setresult(parseInt(num1) - parseInt(num2));
//     }
//     else if (operator === '*') {
//       setresult(parseInt(num1) * parseInt(num2));
//     }
//     else if (operator === '/') {
//       setresult(parseInt(num1) / parseInt(num2));
//     }
//     else {
//       alert('Enter Valid Operation')
//     }
//   }

//   return (
//     <View style={styles.container}>
{/* <Text style={styles.paragraph}>Hello {name} !!!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={counter}
        title='Update' /> */}
{/* <Image
        source={{uri : "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dGVkZHklMjBiZWFyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"}}
        style={{width:200,height:200, resizeMode: 'contain'}}
        /> */}
// <TextInput
//   onChangeText={(e) => setNum1(e)}
//   value={num1}
//   style={{ width: 300, borderColor: 'black', backgroundColor: 'grey', borderRadius: 5, margin: 10, color: 'white' }}
//   placeholder="Enter First Number"
//   keyboardType="numeric"
// />
{/* <Picker
        selectedValue={operator}
        onValueChange={
          setoperatorn(operator)
        }>
        <Picker.Item label="+" value="+" />
        <Picker.Item label="-" value="-" />
        <Picker.Item label="*" value="*" />
        <Picker.Item label="/" value="/" />
      </Picker> */}
{/* <TextInput
        onChangeText={() => setoperator}
        value={operator}
        style={{ width: 300, borderColor: 'black', backgroundColor: 'grey', borderRadius: 5, margin: 10, color: 'white' }}
        placeholder="Enter Opertion"
      /> */}
//       <Picker
//         selectedValue={operator}
//         style={{ height: 50, width: 400 }}
//         onValueChange={(itemValue) => setoperator(itemValue)}>
//         <Picker.Item label="+" value="+" />
//         <Picker.Item label="-" value="-" />
//         <Picker.Item label="*" value="*" />
//         <Picker.Item label="/" value="/" />
//       </Picker>
//       <TextInput
//         onChangeText={(e) => setNum2(e)}
//         value={num2}
//         style={{ width: 300, borderColor: 'black', backgroundColor: 'grey', borderRadius: 5, margin: 10, color: 'white' }}
//         placeholder="Enter Second Number"
//         keyboardType="numeric"
//       />
//       <Button
//         style={{ margn: 90 }}
//         onPress={calculate}
//         title='calculate'
//       />
//       <Text>{num1} {operator} {num2} = {result}</Text>


//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // marginHorizontal: 50,
//   },
//   paragraph: {
//     // flex: 0,
//     // justifyContent: 'center',
//     // alignItems : 'center',
//     marginHorizontal: 20,
//     fontSize: 39,
//     color: 'aqua',
//   }
// });
