import { StyleSheet } from 'react-native'

export const makeStyles = <T extends StyleSheet.NamedStyles<T>>(styles: T) =>
  // Disable eslint rule because we need to use StyleSheet.create in this unified style-creation function
  // eslint-disable-next-line no-restricted-properties
  StyleSheet.create(styles)
