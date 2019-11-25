import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Rating from "./components/Rating";
import Carrousel from "./components/Carrousel";
import Director from "./components/Director";
import Writers from "./components/Writers";
import Movie from "./components/Movie";
import Header from "./components/Header";
import Title from "./components/Title";

export default function App() {
  return (
    <>
      <Header />
      <ScrollView style={styles.scrollStyle}>
        <Title />
        <Movie />
        <Rating />
        <Carrousel />
        <Director />
        <Writers />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollStyle: { backgroundColor: "black", flex: 1, paddingLeft: 10 }
});
