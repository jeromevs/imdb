import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const Rating = props => {
  return (
    <View style={styles.containerRating}>
      <View style={styles.containerTypeRating}>
        <FontAwesome name="star" size={30} color="#E4BB24" />
        <Text style={{ color: "white" }}>8.6/10</Text>
        <Text style={{ color: "#B0B0B0", fontSize: 10 }}>1.1M</Text>
      </View>
      <View style={styles.containerTypeRating}>
        <FontAwesome name="star-o" size={30} color="white" />
        <Text style={{ color: "white" }}>RATE THIS</Text>
      </View>
      <View style={styles.containerTypeRating}>
        <Text style={styles.metascore}>7.4</Text>
        <Text style={{ color: "white" }}>Metascore</Text>
        <Text style={styles.metascoreReviews}>46 critic reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRating: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  containerTypeRating: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center"
  },
  metascore: {
    backgroundColor: "#66CC32",
    color: "white",
    fontSize: 20
  },
  metascoreReviews: { color: "#B0B0B0", fontSize: 10 }
});
export default Rating;
