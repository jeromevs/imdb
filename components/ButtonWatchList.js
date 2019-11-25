import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonWatchList = () => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          alert("Pressed");
        }}
        style={styles.watchList}
      >
        <Text style={{ color: "white" }}>+ Add to Watchlist</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  watchList: {
    backgroundColor: "#0D5FB7",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 280,
    marginLeft: 10,
    marginTop: 15
  }
});

export default ButtonWatchList;
