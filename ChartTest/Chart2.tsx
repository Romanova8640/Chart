

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { data } from './data';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;


const App = () => {
  const [randomData, setRandomData] = useState([
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100                
  ]);

 
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function refresh_data(){
    setRandomData([
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100                
    ])
  }

  return (
    <View style = {styles.screen}>
      <View style = {styles.button}>
        <TouchableOpacity style={{backgroundColor:'blue'}}  onPress={refresh_data}>
          <Text style={{fontSize:20, color:'white'}}>Refresh</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.graph}>
        <View style = {{flex: 1}}>
          <Text style = {styles.text}>Bezier Line Chart</Text>
        </View>

        <View style={{flex: 2}}>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{ data: randomData }]
          }}
          width={Math.floor(Dimensions.get("window").width * 0.6)} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>

    </View>

  </View>)
};

const styles = StyleSheet.create({
  screen: {
  flex: 1,
  alignItems: 'stretch',
  justifyContent: 'center',
  backgroundColor:'green'
  },
  button: {
  alignSelf: 'center',
  justifyContent: 'center',
  flex: 1
  },
  graph: {
  flex: 3,
  alignItems: 'center',
  justifyContent: 'center'
  },
  text:{
    fontSize:20,
    color:'white'
  }
});

export default App;
