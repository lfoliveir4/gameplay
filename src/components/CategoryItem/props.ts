import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

export interface CategoryItemProps extends RectButtonProps {
  title: string
  onPress: () => void
  icon: React.FC<SvgProps>
  checked?: boolean
  hasCheckbox?: boolean
}
