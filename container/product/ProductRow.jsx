import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SIZES} from "../../constants/index"
import ProductCard from './ProductCard'

const ProductRow = () => {
    const products = [0,1,2,3]
  return (
    <View style={{marginHorizontal:10,marginTop:10}}>
      <FlatList 
         data={products}
         renderItem={({item})=> <ProductCard />}
         horizontal
         contentContainerStyle={{columnGap:SIZES.medium}}
      />
    </View>
  )
}

export default ProductRow

const styles = StyleSheet.create({

})