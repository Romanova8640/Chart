import React, {useState, useEffect} from "react";
import api from "./API";
import { LineChart } from "react-native-chart-kit";
import axios from 'axios'
import {Text} from 'react-native'

const Chart3=()=> {
  const [dataChart, setDataChart] = useState ({}); 
  useEffect(() => {
    const getMoviesFromApi = () => {
      return fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => {
          return json.movies;
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getMoviesFromApi()
  },[])
   return(
 <Text>Ale</Text>
   )}

export default Chart3