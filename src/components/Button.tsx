import React, {ReactNode} from 'react';
import {
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
  ActivityIndicator,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {colors} from '@theme/colors';
import {hp, wp} from '@utils/responsive-dimensions';
import {CustomText} from './CustomText';

interface ButtonProps {
  title: string;
  textColor?: string;
  marginTop?: number;
  marginHorizontal?: number;
  width?: number | string;
  backgroundColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  borderWidth?: number;
  borderColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  customStyles?: StyleProp<ViewStyle>;
}

/**
 * Base button
 * This components extends basetext components to display the text
 * you can use baseTextProps to control how th text look.
 */

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  width,
  backgroundColor = colors.black,
  textColor = colors.white,
  disabled,
  marginTop,
  marginHorizontal,
  loading,
  customStyles,
  borderWidth,
  borderColor,
  paddingVertical = hp(18),
  paddingHorizontal = hp(32),
}) => {
  const styles = StyleSheet.create({
    btnMain: {
      backgroundColor,
      paddingVertical,
      paddingHorizontal,
      borderRadius: wp(100),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width,
      marginTop,
      marginHorizontal,
      borderWidth,
      borderColor,
      opacity: loading || disabled ? 0.7 : 1,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      width: wp(24),
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.btnMain, customStyles]}
      onPress={onPress}
      disabled={loading ? loading : disabled}>
      {loading ? (
        <ActivityIndicator color={colors.white} size="small" />
      ) : (
        <View style={styles.titleContainer}>
          <CustomText.BodySmall
            color={textColor}
            fontFamily={'CircularStd-Medium'}
            // customStyles={{flex: 1}}
            textAlign={'center'}>
            {title}
          </CustomText.BodySmall>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
