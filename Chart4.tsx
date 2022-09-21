import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Dimensions, Pressable } from 'react-native';
import { LineChart } from 'react-native-chart-kit';


const  Chart4 = () => {
  const [isLoading, setLoading] = useState(true);
  const [dataApi, setData] = useState<any[]>([]);

  const getMovies = async () => {
   
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
     
  }

  useEffect(() => {
    getMovies();
    
  }, []);

const title:string[]=dataApi.map((item)=>{
  return(
    item.title
  )
})
const data=dataApi.map((item,key)=>{
  return(
    item.releaseYear
  )
})


 

const drawChart=()=>{
  return(
    <LineChart 
    data={{
      labels:[title],
      
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
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

  )
}
  return (
    <View style={{ flex: 1, padding: 24 }}>
   <Text>Ale</Text>
   {drawChart()}
  </View>
  );
};
export default Chart4