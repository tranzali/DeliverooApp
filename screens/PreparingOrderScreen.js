import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 3000)
    }, [])

  return (
    <SafeAreaView style={{ maxWidth: 840, width: '100%', marginHorizontal: 'auto'}} className="bg-[#00CCBB] flex-1 justify-center items-center">
        <Animatable.Image
            source={require("../assets/orderLoading.gif")}
            animation="slideInUp"
            iterationCount={1}
            className="h-96 w-96 px-4"
        />
    
        <Animatable.Text
            animation="slideInUp"
            iterationCount={1}
            className="text-lg my-6 px-2 text-white font-bold text-center"
        >
            Waiting for Restaurant to accept your order
        </Animatable.Text>

        <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen