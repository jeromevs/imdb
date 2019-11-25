import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = props => {
  return (
    <>
      <View>
        <Text style={styles.titleStyle}>Interstellar</Text>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 10 }}>
        <Text style={styles.movieProperties}>2019</Text>
        <Text style={styles.movieProperties}>PG-13</Text>
        <Text style={styles.movieProperties}>2h49mn</Text>
        <Text style={styles.movieProperties}>Adventure, Drama, SciFi</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: "white",
    fontSize: 30,
    paddingTop: 30,
    fontWeight: "200"
  },
  movieProperties: {
    fontWeight: "300",
    fontSize: 15,
    color: "#B0B0B0",
    marginRight: 10
  }
});

export default Title;
