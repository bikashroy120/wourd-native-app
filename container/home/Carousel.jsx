import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import image1 from "../../assets/images/fn1.jpg"
import image2 from "../../assets/images/fn2.jpg"
import image3 from "../../assets/images/fn3.jpg"
import {SliderBox} from "react-native-image-slider-box"
import {COLORS} from "../../constants/index"

const Carousel = () => {

  const images = [image1,image2,image3]

  return (
    <View style={styles.carouselContainer}>
      <SliderBox 
        images={images}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{borderRadius:15,width:"95%"}}
        autoplay
        circleLoop
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  carouselContainer:{
    flex:1,
    marginTop:20,
  }
})