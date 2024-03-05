import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductCard = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDeteles")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/fn1.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.productBody}>
          <Text style={styles.title} numberOfLines={1}>
            Products Name
          </Text>
          <Text style={styles.supply} numberOfLines={1}>
            Product
          </Text>
          <View style={styles.text}>
            <Text style={styles.price} numberOfLines={1}>
              $250
            </Text>
            <TouchableOpacity>
              <Ionicons name="add-circle" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: 182,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: 140,
    backgroundColor: COLORS.gray,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
    height: "100%",
  },
  productBody: {
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom:10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontFamily: "bold",
    fontSize: 17,
  },
  supply:{
    paddingVertical:4
  }
});
