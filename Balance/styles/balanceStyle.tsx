import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const {width, height}=Dimensions.get('screen')

export const styles=StyleSheet.create({
    container:{
        marginTop: height/15,
        flex:0.9,
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:20,
        textAlign:'center'
    },
    chart:{
        marginVertical: 50,
		borderRadius: 16,
    },
    card:{
        backgroundColor:'white',
        marginVertical:14,
        height:80,
        borderRadius:3,
        marginHorizontal:20,
        elevation:2
    },
    labelCard:{
        fontSize:19,
        fontWeight:'700',
        paddingLeft:2,
        color:'white'
    },
    containerDate:{
        flexDirection:'row'
    },
    containerRow:{
        flexDirection:'column',
        flex:0.5
    }
    
})

export const chartConfig={
    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    useShadowColorFromDataset: true
}