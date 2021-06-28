import React, { ReactElement } from 'react'
import { ScrollView } from 'react-native'

import { CategoryProps } from './props'

import CategoryItem from '../CategoryItem'

import { categories } from '../../utils/categories'

import { Styles } from './styles'

export default function Category({
   categorySelected,
   setCategory,
   hasCheckBox = false
}: CategoryProps): ReactElement {
  return (
      <ScrollView
        horizontal
        style={Styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 40 }}
      >
        {
          categories.map(cat => (
            <CategoryItem
              key={cat.id}
              icon={cat.icon}
              title={cat.title}
              checked={cat.id === categorySelected}
              onPress={() => setCategory(cat.id)}
              hasCheckbox={hasCheckBox}
            />
          ))
        }
      </ScrollView>
  )
}
