import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/rootStackParamList";

export interface SearchProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "ResultDetail">;
}

const SearchScreen = ({ navigation }: SearchProps) => {
  const [term, setTerm] = useState("");
  const [searchApi, result, errors, loading] = useResults();

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
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <ScrollView>
          <ResultsList
            navigation={navigation}
            res={filterResultsByPrice("$")}
            title="Billigt"
          />
          <ResultsList
            navigation={navigation}
            res={filterResultsByPrice("$$")}
            title="Lyx"
          />
          <ResultsList
            navigation={navigation}
            res={filterResultsByPrice("$$$")}
            title="All in"
          />
          <ResultsList
            navigation={navigation}
            res={filterResultsByPrice("$$$")}
            title="All in"
          />
          <ResultsList
            navigation={navigation}
            res={filterResultsByPrice("$$$")}
            title="All in"
          />
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
