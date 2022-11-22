import React from "react";
import SingleResult from "./SingleResult";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from "react-native";
import { RootStackParamList } from "../types/rootStackParamList";

interface Props {
  title: string;
  res: Restaurant[];
  navigation: NativeStackNavigationProp<RootStackParamList, "ResultDetail">;
}
const ResultsList = ({ title, res, navigation }: Props) => {
  if (!res.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={res}
        keyExtractor={(res) => res.id}
        renderItem={(itemData: ListRenderItemInfo<Restaurant>) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultDetail", { id: itemData.item.id })
              }
            >
              <SingleResult result={itemData.item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
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
