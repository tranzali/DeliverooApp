import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { 
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
 } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity'

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([])


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    sanityClient.fetch(`*[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
       }
      }`).then((data) => {
      setFeaturedCategories(data)
    })
  }, [])
  
  // console.log(featuredCategories)

  return (
    <SafeAreaView style={{ maxWidth: 840, width: '100%', marginHorizontal: 'auto'}} className="bg-white pt-5">

      {/* header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />

          <View className='flex-1'>
              <Text className='font-bold text-gray-400 text-xs'>
                Deliver Now
              </Text>
              <View className='flex-row items-center'>
                <Text className="font-bold text-xl">Current Location</Text>
                <ChevronDownIcon size={16} color='#00CCBB' width={20} />
              </View>
          </View>

          <UserIcon size={35} color='#00CCBB' />

        </View>

      {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <SearchIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>

          <AdjustmentsIcon color="#00CCBB" />
        </View>

      {/* body */}
        <ScrollView
          
          className="bg-gray-100"
          contentContainerStyle={{
            paddingBottom: 100,
          }}  
        >
          {/* categories */}
          <Categories />

          {/* feature rows */}
          {/* featured */}
          {featuredCategories?.map((category) => (
            <FeaturedRow 
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}
        </ScrollView>    

    </SafeAreaView>
  )
}

export default HomeScreen