import { StyleSheet } from 'react-native'

export const makeStyles = <T extends StyleSheet.NamedStyles<T>>(styles: T) =>
  StyleSheet.create(styles)
