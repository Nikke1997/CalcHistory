import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import { useState} from 'react';





export default function App() {
  const [Cont1, setCont1] = useState(''); 
  const [Cont2, setCont2] = useState('');
  const [data, setData] = useState([]);
const [Result, setResult] = useState('');





const Plus = () => {
  const resuult = parseInt(Cont1) + parseInt(Cont2);
  setResult(resuult);
setData([...data, {key: Cont1 + ' + ' + Cont2 + ' = ' + resuult}]);
}


const Minus = () => {
const resuult = parseInt(Cont1) - parseInt(Cont2);
setResult(resuult);
setData([...data, {key: Cont1 + ' - ' + Cont2 + ' = ' + resuult}]);
}






console.log("Dataaaaa", data);













  return (
    <View style={styles.container}>

      <Text>Result: {Result}</Text>
      <TextInput style={styles.textbox} 
      keyboardType='number-pad'
      onChangeText={setCont1}
        >
      </TextInput>
      <TextInput style={styles.textbox}
      keyboardType='number-pad'
      onChangeText={setCont2}
      ></TextInput>
      <View style={styles.operators}>
<View style={styles.buttons}>
<Button title="+" onPress={Plus}></Button>
      </View>
      <View style={styles.buttons}>
<Button title="-" onPress={Minus}></Button>
      </View>
      </View>
      <StatusBar style="auto" />
      <FlatList
      data={data}
      renderItem={({item}) =><Text>{item.key}</Text>} 
        keyExtractor={(item, index) => index.toString()}>
        </FlatList> 
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

  textbox: {
borderColor: 'black',
borderWidth: 2,
padding: 7,
width: '50%',
margin: 10,
  },
  operators: {
flexDirection: 'row',
justifyContent: 'space-evenly',
  },
  buttons: {
width: '20%',
borderColor: 'black',
borderWidth: 2,
margin: 10,

  }
});
