import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const ProductDeteles = () => {
  const navigition = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigition.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../assets/images/fn1.jpg")}
        style={styles.image}
      />
      <View
        style={{
          width: "100%",
          backgroundColor: COLORS.lightWhite,
          marginTop: -20,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 250,
        }}
      >
        <View
          style={{
            paddingHorizontal: 15,
            paddingTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
                alignItems:"center",
              justifyContent:"space-between"
            }}
          >
            <Text style={{fontFamily:"bold",fontSize:20}}>Product Name</Text>
            <View style={{
                paddingHorizontal:15,
                paddingVertical:8,
                backgroundColor:COLORS.secondary,
                borderRadius:20
            }}>
              <Text style={{fontSize:16,fontWeight:"bold"}}>$250</Text>
            </View>
          </View>
          <View>
            <View>
                {[1,2,3,4,5].map((index)=>(
                    <Ionicons key={index} name="star" size={24} color={"gold"}/>
                ))}
            </View>
            <View>

            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDeteles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 10,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
});
