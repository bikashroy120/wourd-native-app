import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";
import { StatusBar } from "expo-status-bar";

const Profile = () => {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />

        <View>
          <Image
            source={require("../assets/images/space.jpg")}
            style={{
              height: "290px",
              width: "100%",
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/profile.jpeg")}
            style={{
              height: "150px",
              width: "150px",
              resizeMode: "cover",
              borderRadius: "100%",
              borderWidth: 2,
              marginTop: -80,
            }}
          />

          <Text style={{ fontFamily: "bold", fontSize: 18, marginTop: 10 }}>
            {userLogin ? "Bikash" : " Please login into your account"}
          </Text>

          <View style={{ marginTop: 10,width:"100%"}}>
            {userLogin ? (
              <View>
                <Text>bikash@gmail.com</Text>
              </View>
            ) : (
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.tertiary,
                  width: "95%",
                  marginHorizontal:10,
                  paddingVertical:7,
                  borderRadius:20
                }}
              >
                <Text style={{textAlign:"center",fontFamily:"bold",fontSize:19}}>L O G I N</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
});
