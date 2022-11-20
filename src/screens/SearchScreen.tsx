import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, result, errors] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm: string) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errors ? <Text>{errors}</Text> : null}
      <Text>nr of results: {result.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
