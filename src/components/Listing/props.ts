import { RectButtonProps } from 'react-native-gesture-handler'

export type GuildProps = {
  id: string,
  name: string,
  icon: null,
  owner: boolean
}

export type Listing = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

export interface ListingProps extends RectButtonProps {
  data: Listing
}
