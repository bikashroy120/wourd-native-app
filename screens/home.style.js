import { StyleSheet } from "react-native";
import {COLORS,SIZES} from "../constants/index"

const styles = StyleSheet.create({
    appBarWrapper:{
        marginHorizontal:22,
        marginTop:SIZES.small,
    },
    appBar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    location:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.gray
    },
    cartCount:{
        position:"absolute",
        bottom:16,
        backgroundColor:"green",
        width:16,
        height:16,
        zIndex:22,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center"
    },
    countNumber:{
        fontFamily:"regular",
        fontWeight:"600",
        fontSize:10,
        color:COLORS.lightWhite,
    }
    

})

export default styles;