import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import {COLORS,SIZES} from "../../constants/index"
import {Feather,Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

export default function WelCome() {
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.welcomeText(COLORS.black,SIZES.xSmall)}>
            Find The Most
          </Text>
          <Text style={styles.welcomeText(COLORS.primary,0)}>
              Luxurious Furniture
          </Text>
      </View>
      <View style={styles.searchWarper}>
          <TouchableOpacity style={{height:"100%",marginTop:10}}>
            <Feather name='search' size={24} style={styles.searchIcon} />
          </TouchableOpacity>
          <View style={styles.inputWarper}>
              <TextInput 
                style={styles.searchInput}
                value=''
                onPressIn={()=> navigation.navigate("Search")}
                placeholder='what are you looking for'
              />
          </View>
          <TouchableOpacity style={styles.searchButton}>
              <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.white}/>
          </TouchableOpacity>
      </View>
    </View>
  )
}
