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

const Writers = props => {
  return (
    <View style={styles.writersCard}>
      <Text style={{ color: "white" }}>Writers</Text>
      <Text style={{ color: "#B0B0B0", fontSize: 11 }}>
        Jonathan Nolan (written by), Christopher Nolan (written by)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  writersCard: {
    flexDirection: "column",
    paddingTop: 20
  }
});

export default Writers;
