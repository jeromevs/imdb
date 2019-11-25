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

const Director = props => {
  return (
    <View style={styles.directorCard}>
      <Text style={{ color: "white" }}>Director</Text>
      <Text style={{ color: "#B0B0B0", fontSize: 11 }}>Christopher Nolan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  directorCard: {
    flexDirection: "column",
    paddingTop: 20
  }
});

export default Director;
