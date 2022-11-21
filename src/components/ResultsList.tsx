import React from "react";
import SingleResult from "./SingleResult";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";

interface Props {
  title: string;
  res: Restaurant[];
}
const ResultsList = ({ title, res }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={res}
        keyExtractor={(res) => res.id}
        renderItem={renderRestaurantItem}
      />
    </View>
  );
};

const renderRestaurantItem = (itemData: ListRenderItemInfo<Restaurant>) => {
  return <SingleResult result={itemData.item} />;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
