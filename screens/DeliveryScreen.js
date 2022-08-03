import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { selectRestaurant } from "../features/restaurantSlice"
import { XIcon } from "react-native-heroicons/solid"
import * as Progress from "react-native-progress"
// import MapView, { Marker } from "react-native-maps"
import { clearBasket, selectBasketItems } from '../features/basketSlice'

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-3">
            <TouchableOpacity onPress={() => {
              dispatch(clearBasket(items))
              navigation.navigate("Home")
              
            }}>
                <XIcon color="white" size={30} />
            </TouchableOpacity>
            <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-lg text-gray-400">Estimated Arrival Time</Text>
                    <Text className="text-4xl font-bold">30-50 Minutes</Text>
                </View>
                <Image
                    source={require("../assets/bike.gif")}
                    className="h-20 w-20"
                />
            </View>

            <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

            <Text className="mt-3 text-gray-500">
                Your order at {restaurant.title} is being prepared
            </Text>
        </View>
      </SafeAreaView>
      
      <SafeAreaView className="flex-1">
        <Text className="flex-1 flex items-center justify-center text-white text-lg">MAP HERE</Text>
      </SafeAreaView>

      {/* <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView> */}

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "https://links.papareact.com/wru"
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View>
          <Text className="text-lg">CoderJoe</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen