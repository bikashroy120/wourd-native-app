import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS } from "../constants";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductDeteles = ({}) => {
  const route = useRoute()
  const {item} = route.params;
  const [count, setCount] = useState(1);

  console.log(item)

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
        source={{uri:item?.images[0]}}
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
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontFamily: "bold", fontSize: 20 }}>
              {item?.title}
            </Text>
          </View>
          <View
              style={{
                paddingVertical: 8,
                borderRadius: 20,
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}> ${item?.price}</Text>
            </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 2,
                alignItems: "center",
              }}
            >
              {[1, 2, 3, 4, 5].map((index) => (
                <Ionicons key={index} name="star" size={24} color={"gold"} />
              ))}
              <Text
                style={{
                  fontFamily: "regular",
                  color: COLORS.gray,
                  marginLeft: 5,
                }}
              >
                (4.5)
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <TouchableOpacity onPress={() => increment()}>
                <SimpleLineIcons name="plus" size={20} />
              </TouchableOpacity>
              <Text style={{ fontFamily: "medium", color: COLORS.gray }}>
                {count}
              </Text>
              <TouchableOpacity onPress={() => decrement()}>
                <SimpleLineIcons name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontFamily: "bold", fontSize: 18, marginBottom: 5 }}>
              Description
            </Text>
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 16,
                color: COLORS.gray,
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here'
            </Text>
          </View>

          <View style={{ marginTop: 15 }}>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 7,
                backgroundColor: COLORS.secondary,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 10,
              }}
            >
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Ionicons name="location-outline" size={20} />
                <Text style={{ fontWeight: "bold" }}>Dallas</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  size={20}
                />
                <Text style={{ fontWeight: "bold" }}>Free Delivery</Text>
              </View>
            </View>
          </View>

          <View style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            marginTop:15
          }}> 
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.black,
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderRadius:10,
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                width:"65%"
              }}
            >
              <Text style={{color:COLORS.lightWhite,fontWeight:"bold"}}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              width:"10%",
              paddingVertical:7,
              borderRadius:10,
              backgroundColor:COLORS.black,
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"center",
            }}>
              <Fontisto name="shopping-bag" color={COLORS.white} size={20} />
            </TouchableOpacity>
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
