import { View } from 'native-base'
import { forwardRef, ReactNode, useEffect, useRef } from 'react'
import { Animated, TextInput, TextInputProps } from 'react-native'
import {
  charcoalBlack,
  container,
  grey,
  makeStyles,
  padding,
} from '../../styles'

export interface InputProps extends TextInputProps {
  right?: ReactNode
}

const styles = makeStyles({
  input: { borderWidth: 1, borderColor: charcoalBlack },
  right: {
    position: 'absolute',
    right: 16,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  label: {
    color: grey,
    position: 'absolute',
    top: 0,
    left: 16,
    bottom: 0,
    justifyContent: 'center',
  },
})

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      style,
      right,
      placeholder,
      value,
      editable = true,
      onFocus,
      onBlur,
      ...rest
    },
    ref,
  ) => {
    const isEmpty = !value || value.length === 0
    const labelTop = useRef(new Animated.Value(0)).current
    const labelFontSize = useRef(new Animated.Value(14)).current

    const scaleLabelDown = () => {
      Animated.parallel([
        Animated.timing(labelFontSize, {
          toValue: 10,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(labelTop, {
          toValue: -20,
          duration: 250,
          useNativeDriver: false,
        }),
      ]).start()
    }

    const scaleLabelUp = () => {
      Animated.parallel([
        Animated.timing(labelFontSize, {
          toValue: 14,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(labelTop, {
          toValue: 0,
          duration: 250,
          useNativeDriver: false,
        }),
      ]).start()
    }

    const handleFocus: InputProps['onFocus'] = (event) => {
      onFocus?.(event)
      if (editable) {
        scaleLabelDown()
      }
    }

    const handleBlur: InputProps['onBlur'] = (event) => {
      onBlur?.(event)
      if (isEmpty) {
        scaleLabelUp()
      }
    }

    useEffect(() => {
      if (!isEmpty) {
        scaleLabelDown()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEmpty])

    return (
      <View>
        <TextInput
          {...rest}
          ref={ref}
          style={[
            style,
            styles.input,
            padding.ph16,
            placeholder ? padding.pt24 : undefined,
            padding.pv8,
            container.borderRadiusSM,
            container.fullWidth,
          ]}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={editable}
        />
        {right && (
          <View style={styles.right} pointerEvents="none">
            {right}
          </View>
        )}
        {placeholder && (
          <Animated.View
            style={[styles.label, { top: labelTop }]}
            pointerEvents="none"
          >
            <Animated.Text style={{ fontSize: labelFontSize }}>
              {placeholder}
            </Animated.Text>
          </Animated.View>
        )}
      </View>
    )
  },
)
