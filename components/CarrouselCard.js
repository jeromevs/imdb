import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CarrouselCard = props => {
  return (
    <>
      <View style={styles.carrouselCard}>
        <Image
          resizeMode="contain"
          style={{ height: 180, width: 130 }}
          source={props.image}
        />
        <Text style={styles.actorName}>{props.actorName}</Text>
        <Text style={styles.actorAlias}>{props.alias}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  carrouselCard: {
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#202020",
    marginRight: 10,
    width: 130,
    height: 250
  },
  actorName: {
    color: "white",
    fontSize: 12,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10
  },
  actorAlias: { color: "white", fontSize: 10, paddingLeft: 10 }
});

export default CarrouselCard;
