import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationInjectedProps, NavigationState } from "react-navigation";
import { RootStackParamList } from "../types/rootStackParamList";

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
  const id = navigation.state.params?.id;
  return (
    <View>
      <Text>results show</Text>
      <Text>{id} the id </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultDetailScreen;
