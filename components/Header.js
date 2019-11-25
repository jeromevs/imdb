import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Header = props => {
  return (
    <>
      <View style={styles.header}>
        <Image
          source={require("../assets/logo.jpeg")}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#393939",
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  headerImage: {
    height: 30,
    width: 50,
    marginLeft: 20
  }
});

export default Header;
