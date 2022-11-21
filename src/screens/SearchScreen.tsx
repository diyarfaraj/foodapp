import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { RootStackParamList } from "../types/rootStackParamList";

type searchScreenProp = StackNavigationProp<RootStackParamList, "Search">;

const SearchScreen = ({ props }: any) => {
  console.log(props);

  const [term, setTerm] = useState("");
  const [searchApi, result, errors] = useResults();

  const filterResultsByPrice = (price: string): Restaurant[] => {
    return result.filter((result) => {
      return result.price == price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm: string) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errors ? <Text>{errors}</Text> : null}
      <Text>nr of results: {result.length}</Text>
      <ScrollView>
        <ResultsList res={filterResultsByPrice("$")} title="Billigt" />
        <ResultsList res={filterResultsByPrice("$$")} title="Lyx" />
        <ResultsList res={filterResultsByPrice("$$$")} title="All in" />
        <ResultsList res={filterResultsByPrice("$$$")} title="All in" />
        <ResultsList res={filterResultsByPrice("$$$")} title="All in" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
