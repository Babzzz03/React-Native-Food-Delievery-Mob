import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import tw from "twrnc";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      hearderShown: false,
    });
  }, []);

  return (
    <View style={[tw`bg-white pt-5`, styles.container]}>
      <View style={tw`flex-row pb-3 items-center mx-4 space-x-2  w-92% `}>
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-xl `}>
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />{" "}
          </Text>
        </View>
        <UserIcon size={34} color="#00CCBB" />
      </View>
      <View style={tw`flex-row items-center space-x-2 pb-2 mx-4  w-92% `}>
        <View style={tw`flex-row flex-1 space-x-2 bg-gray-200 p-3`}>
          <svg
            width={20}
            height={20}
            color="#gray"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
