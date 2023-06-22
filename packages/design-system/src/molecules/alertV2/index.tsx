import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { Body } from '../../atoms'
import { margin, padding, container, makeStyles } from '../../styles'
import { useThemeV2 } from '../../hooks';
import { useMemo } from 'react';

type AlertProps = {
    title: string;
    variant?: 'info' | 'danger'
};

const styles = makeStyles({
    container: {
      minWidth: 320,
    }
  })


export const Alert = ({ title, variant }: AlertProps) => {
const theme = useThemeV2()
const colors: { background: string; text: string } = useMemo(() => {
    if (variant === 'danger') {
        return {
            background: theme.background,
            text: theme.text
        }
    }
    return {
        background: theme.background,
        text: theme.text
    }
}, [variant, theme])
return (
    <View>
        <Body color={colors.text}>
            {title}
        </Body>
    </View>
)
}