import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

const Search = () => {
  const [searchKey,setSearchKey] = useState()

  return (
    <View>
      <View
        style={styles.searchWarper}
        onPress={() => navigation.navigate("Search")}
      >
        <TouchableOpacity style={{ height: "100%", marginTop: 10 }}>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.inputWarper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="what are you looking for"
          />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Feather name="search" 
            size={SIZES.xLarge}
            color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchWarper: {
    flexDirection: "row",
    backgroundColor: COLORS.secondary,
    height: 50,
    marginHorizontal: SIZES.small,
    borderRadius: SIZES.small,
    alignContent: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
  },
  searchIcon: {
    color: COLORS.gray2,
    marginLeft: 10,
  },
  inputWarper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    fontFamily: "regular",
    color: "gray",
    borderColor: "none",
  },
  searchButton: {
    backgroundColor: COLORS.primary,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.medium,
  },
});
