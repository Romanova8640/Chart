import React from "react";
import {Text, View, Dimensions, Pressable, ScrollView} from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { chartConfig, styles } from "./styles/balanceStyle";
import DatePicker from "./DatePicker";
import {data} from '../data'
import { width,height } from "./styles/balanceStyle";

const Balance =()=>{
    return(
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.container}>
          <View style={styles.containerDate}>
         <View style={styles.containerRow}>
        
         <DatePicker/>
         </View>
         <View style={styles.containerRow}>
         <DatePicker/>
         </View>
          </View>
            <LineChart
					bezier
					data={data}
					width={width - 16}
					height={200}
					chartConfig={chartConfig}
					style={styles.chart}   
				/>
         
                <View>
                   
                    <Pressable style={styles.card}>
                        <Text style={[styles.labelCard, {backgroundColor:'#55a630'}]}>Ingresos</Text>
                    </Pressable>
                    <Pressable style={styles.card}>
                        <Text style={[styles.labelCard,{backgroundColor:'red'}]}>Gastos</Text>
                    </Pressable>
                    <Pressable style={styles.card}>
                        <Text style={[styles.labelCard, {backgroundColor:'#fdd85d'}]}>Diferencia</Text>
                    </Pressable>
                  
                </View>
              
        </View>
        </ScrollView>
    )
}

export default Balance;