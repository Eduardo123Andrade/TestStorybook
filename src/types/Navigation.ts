import { ParamListBase, } from '@react-navigation/native'



export type Navigation = {
  navigate: (route: string, params?: ParamListBase) => void
}