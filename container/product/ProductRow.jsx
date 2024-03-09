import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {COLORS, SIZES} from "../../constants/index"
import ProductCard from './ProductCard'
import useFetch from '../../hooks/useFetch'

const ProductRow = () => {
  const {data,isLoading,error} = useFetch()
  return (
    <View style={{marginHorizontal:10,marginTop:10}}>
        {
          isLoading ? (
            <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
          ) : (
            <FlatList 
            data={data?.products}
            keyExtractor={(item)=>item._id}
            renderItem={({item})=> <ProductCard item={item}/>}
            horizontal
            contentContainerStyle={{columnGap:SIZES.medium}}
         />
          )
        }
    </View>
  )
}

export default ProductRow

const styles = StyleSheet.create({

})