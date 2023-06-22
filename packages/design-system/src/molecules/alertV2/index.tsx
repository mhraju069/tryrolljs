import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { Body, TypographyV2 } from '../../atoms'
import { margin, padding, container, makeStyles } from '../../styles'
import { useThemeV2 } from '../../hooks';
import { useMemo } from 'react';

type AlertProps = {
    title: string;
    variant?: 'info' | 'danger'
};

const styles = makeStyles({
  })


export const Alert = ({ title, variant }: AlertProps) => {
const theme = useThemeV2()
// const colors: { background: string; text: string } = useMemo(() => {
//     if (variant === 'danger') {
//         return {
//             background: theme.background,
//             text: theme.text
//         }
//     }
//     return {
//         background: theme.background,
//         text: theme.text
//     }
// }, [variant, theme])
return (
    <View style={styles}>
        <TypographyV2 variant='text4' color={theme.text.black[80]}>
            {title}
        </TypographyV2>
    </View>
)
}