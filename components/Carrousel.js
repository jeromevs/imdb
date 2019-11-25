import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import CarrouselCard from "./CarrouselCard";

const Carrousel = props => {
  return (
    <>
      <View style={styles.topBilledCast}>
        <Text style={{ color: "white", fontSize: 20 }}>Top Billed Cast</Text>
        <TouchableOpacity
          title="+ Add to Watchlist"
          onPress={() => {
            alert("Pressed");
          }}
        >
          <Text style={styles.seeAll}>SEE ALL</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.carrousel}>
        <CarrouselCard
          image={require("../assets/matthew.jpg")}
          actorName={"Matthew McConaughey"}
          alias={"Cooper"}
        />
        <CarrouselCard
          image={require("../assets/hattaway.jpg")}
          actorName={"Anne Hattaway"}
          alias={"Brand"}
        />
        <CarrouselCard
          image={require("../assets/ellen.jpg")}
          actorName={"Ellen Burstyn"}
          alias={"Murph (older)"}
        />
        <CarrouselCard
          image={require("../assets/john.jpg")}
          actorName={"John Lithgow"}
          alias={"Donald"}
        />
        <CarrouselCard
          image={require("../assets/mackenzie.jpg")}
          actorName={"Mackenzie Foy"}
          alias={"Murph (10 yrs)"}
        />
        <CarrouselCard
          image={require("../assets/thimotee.jpg")}
          actorName={"Thimotee Chalamet"}
          alias={"Tom (15 yrs)"}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  topBilledCast: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  seeAll: {
    color: "#0D5FB7",
    fontSize: 15,
    fontWeight: "bold",
    paddingRight: 10
  },
  carrousel: {
    flex: 1,
    paddingTop: 10
  }
});

export default Carrousel;
