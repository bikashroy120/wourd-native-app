import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"
import {COLORS,SIZES} from "../../constants/index"

export default function Headers() {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>New Rivals</Text>
            <TouchableOpacity style={styles.headerBottom}>
                <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      width:"100%",
      marginHorizontal:SIZES.small,
      marginTop:15
    },
    headerContainer:{
      flexDirection:"row",
      alignContent:"center",
      justifyContent:"space-between"
    },
    headerText:{
      width:"100%",
      fontFamily:"semibold",
      fontSize:20
    },
    headerBottom:{
      width:50,
    }
})