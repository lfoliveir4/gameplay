import { RectButtonProps } from 'react-native-gesture-handler'

export interface ButtonIconProps extends RectButtonProps {
  title: string
  onPress: () => void
}
