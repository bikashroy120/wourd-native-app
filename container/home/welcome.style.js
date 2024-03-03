import { StyleSheet } from "react-native";
import {COLORS,SIZES} from "../../constants/index"


const styles = StyleSheet.create({
    container:{
        width:"100%",
    },
    welcomeText:(color,top)=>({
        fontFamily:"bold",
        fontSize:SIZES.xxLarge -6,
        color:color,
        marginTop:top,
        marginHorizontal:12
    }),
    searchWarper:{
        flexDirection:"row",
        backgroundColor:COLORS.secondary,
        height:50,
        marginHorizontal:SIZES.small,
        borderRadius:SIZES.small,
        alignContent:"center",
        justifyContent:"center",
        gap:10,
        marginTop:10
    },
    searchIcon:{
        color:COLORS.gray2,
        marginLeft:10
    },
    inputWarper:{
        flex:1,
        backgroundColor:COLORS.secondary
    },
    searchInput:{
        width:"100%",
        height:"100%",
        fontFamily:"regular",
        color:"gray",
        borderColor:"none"
    },
    searchButton:{
      backgroundColor:COLORS.primary,
      width:50,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:SIZES.medium,  
    }
})

export default styles;