import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux/es/exports'
import { selectRestaurant } from "../features/restaurantSlice"
import { XIcon } from "react-native-heroicons/solid"
import * as Progress from "react-native-progress"

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-3">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <XIcon color="white" size={30} />
            </TouchableOpacity>
            <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
            <View className="flow-row justify-between">
                <View>
                    <Text className="text-lg text-gray-400">Estimated Arrival Time</Text>
                    <Text className="text-4xl font-bold">30-50 Minutes</Text>
                </View>
                <Image
                    source={require("../assets/bike.gif")}
                    className="h-29 w-20"
                />
            </View>

            <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

            <Text className="mt-3 text-gray-500">
                Your order at {restaurant.title} is being prepared
            </Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen