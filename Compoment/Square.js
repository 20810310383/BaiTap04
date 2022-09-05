import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Square() {
  return (
    <View style={styles.container}>
      {/* <Text>hi</Text>
      <StatusBar style="auto" /> */}
      <Text style = {styles.txt1}>Hình Số 1</Text>

      <Text style = {styles.txt2}>Hình Số 2</Text>

      <Text style = {styles.txt3}>Hình Số 3</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  txt1:{
    display: 'flex',
    width: 100,
    height: 100,
    backgroundColor: '#AAFF99',
    color: '#000099',
    fontWeight: '900',
    fontSize: 22,
    textAlign: 'center',
    paddingTop: 38
  },
  txt2:{
    display: 'flex',
    width: 100,
    height: 100,
    backgroundColor: '#4DFFE1',
    color: '#000099',
    fontWeight: '900',
    fontSize: 22,
    textAlign: 'center',
    paddingTop: 38,
    //marginLeft: 20
  },
  txt3:{
    display: 'flex',
    width: 100,
    height: 100,
    backgroundColor: '#FFFF19',
    color: '#000099',
    fontWeight: '900',
    fontSize: 22,
    textAlign: 'center',
    paddingTop: 38,
    //marginLeft: 20
  },
});
