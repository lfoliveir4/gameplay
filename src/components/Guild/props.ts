import { TouchableOpacityProps } from "react-native";

export interface Guild {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

export interface GuildProps extends TouchableOpacityProps {
  data: Guild
  onPress: () => void
}
