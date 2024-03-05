import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./home.style";
import {Ionicons,Fontisto} from "@expo/vector-icons"
import WelCome from "../container/home/WelCome";
import Carousel from "../container/home/Carousel";
import Headers from "../container/home/Headers";
import ProductRow from "../container/product/ProductRow";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
            <Ionicons name="location-outline" size={24}/>
            <Text style={styles.location}>Shanghai China</Text>

            <View style={{alignItems:"flex-end"}}>
              <View style={styles.cartCount}>
                  <Text style={styles.countNumber}>8</Text>
              </View>
              <TouchableOpacity>
                <Fontisto name="shopping-bag" size={24}/>
              </TouchableOpacity>
            </View>
        </View>
      </View>
      <ScrollView>
        <WelCome />
        <Carousel />
        <Headers />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
