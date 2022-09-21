import { StyleSheet } from "react-native";
import { width, height } from "./balanceStyle";

export const stylesDate=StyleSheet.create({
    touchable:{
        borderBottomColor:'#370031',
        borderBottomWidth:2,
        width:width/2.3,
        marginHorizontal:10
    },
    input:{
        fontSize:19,
        fontWeight:'500',
        textAlign:'center',
        color:'black'
    }
}
)