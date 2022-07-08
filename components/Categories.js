import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicators={false}
    >
        {/* CategopryCard */}

        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Test1" />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Test2" />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Test3" />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Test1" />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Test2" />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Test3" />

    </ScrollView>
  )
}

export default Categories