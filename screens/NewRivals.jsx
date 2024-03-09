import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import useFetch from "../hooks/useFetch";
import ProductCard from "../container/product/ProductCard";
import { SafeAreaView } from "react-native-safe-area-context";

const NewRivals = () => {
  const navigation = useNavigation();
  const { data, isLoading, error } = useFetch();
  console.log(data);

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}> 
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.white}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{ fontSize: 17, fontWeight: "bold", color: COLORS.white }}
            >
              All Product
            </Text>
          </View>
        </View>
        <View style={{marginTop:"50px"}}>
          <View style={{ marginHorizontal: 10, marginTop: 10 }}>
            {isLoading ? (
              <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
            ) : (
              <FlatList
                data={data?.products}
                numColumns={2}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <ProductCard item={item} />}
                contentContainerStyle={{alignItems:"center",paddingTop:10,paddingLeft:6}}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    position: "absolute",
    top: 10,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    width: "95%",
    zIndex: 999,
    backgroundColor: COLORS.primary,
    marginHorizontal: 10,
    borderRadius: 20,
  },
});
