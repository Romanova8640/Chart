

import React, {useState} from 'react';
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


const Chart1 = () => {

  return (
    <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
					bezier
					data={data}
         
					width={Dimensions.get('window').width}
					height={Dimensions.get('window').height*0.50}
					chartConfig={{
						backgroundColor: '#1cc910',
						backgroundGradientFrom: '#eff3ff',
						backgroundGradientTo: '#efefef',
						decimalPlaces: 2,
            useShadowColorFromDataset: true,
						color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
						style: {
							borderRadius: 16,
						},
					}}
					style={{
						marginVertical: 8,
						borderRadius: 16,
					}}
				/>
        <TouchableOpacity 
        style={{backgroundColor:'#ccd5ae', width:150, marginHorizontal:110, height:40,}}
        onPress={()=>{
          data.datasets.map(({data}:any)=>{
           const data2= data+Math.random().toFixed(2);
           data=[...data,data2]
           console.log(data)
           return data;
          })
        }} >
          <Text style={{color:'white', fontSize:20, fontWeight:'bold', textAlign:'center', marginVertical:4.5, borderRadius:5}}>Click Me!</Text>
        </TouchableOpacity>
</View>
  );
};



export default Chart1;
