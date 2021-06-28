import { ModalProps } from "react-native";

export interface GuildsModalProps extends ModalProps {
  children: JSX.Element[] | JSX.Element
  close: () => void
}
