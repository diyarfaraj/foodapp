import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { NavigationInjectedProps, NavigationState } from "react-navigation";
import { RootStackParamList } from "../types/rootStackParamList";
import yelp from "../api/yelp";

interface ParamType {
  title: string;
}
interface StateParams extends NavigationState {
  params: ParamType;
}

interface OwnProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "ResultDetail">;
}

type Props = OwnProps & NavigationInjectedProps;

const ResultDetailScreen = ({ navigation }: Props) => {
  const [result, setResult] = useState<Restaurant | undefined>(undefined);
  const id = navigation.state.params?.id;

  console.log(result?.photos);
  const getDetails = async (id: string) => {
    try {
      const res = await yelp.get(`/${id}`);
      setResult(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>results show</Text>
      <Text>{result?.name} the id </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultDetailScreen;
