import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform
} from "react-native";
import ButtonWatchList from "./ButtonWatchList";

const Movie = props => {
  return (
    <View
      style={{
        paddingTop: 20,
        flexDirection: "row"
      }}
    >
      <Image
        resizeMode="contain"
        style={{ height: 200, flex: 1 }}
        source={require("../assets/poster.jpg")}
      />
      <View style={{ height: 200, flex: 3, paddingTop: 20 }}>
        <Text style={{ color: "white", paddingLeft: 10, paddingRight: 5 }}>
          A team of explorers travel through a wormhole in space in an attempt
          to ensure humanity's survival.
        </Text>
        <ButtonWatchList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieProperties: {
    fontWeight: "300",
    fontSize: 15,
    color: "#B0B0B0",
    marginRight: 10
  }
});

export default Movie;
