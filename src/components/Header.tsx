import React, {ReactNode} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackIcon} from '@assets/icons';
import {colors} from '@theme/colors';
import {hp, wp} from '@utils/responsive-dimensions';
import {CustomText} from './CustomText';

interface HeaderT {
  title?: string;
  onPressLeftElement?: (event: GestureResponderEvent) => void;
  onPressRightElement?: (event: GestureResponderEvent) => void;
  titleAlign?: 'center' | 'left' | 'right';
  titleStyle?: StyleProp<TextStyle>;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  textColor?: string;
  showBackIcon?: boolean;
}

const Header: React.FC<HeaderT> = ({
  title,
  textColor = colors.black,
  showBackIcon = false,
  onPressLeftElement,
  onPressRightElement,
  rightElement,
  leftElement,
  titleAlign,
  titleStyle,
}) => {
  const Space = () => {
    return <View style={{width: wp(20)}} />;
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity 
        onPress={onPressLeftElement}
        style={ !leftElement && showBackIcon ? styles.backButtonBox : {}}
      >
        {!leftElement && showBackIcon && <BackIcon fillColor={textColor} />}
        {leftElement && leftElement}
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        {title && (
          <CustomText.Header
            textAlign={titleAlign}
            customStyles={titleStyle}
            color={textColor}>
            {title!}
          </CustomText.Header>
        )}
      </View>
      <TouchableOpacity onPress={onPressRightElement}>
        {rightElement}
      </TouchableOpacity>
      {!rightElement && showBackIcon && <Space />}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: hp(20),
    marginVertical: hp(8),
    marginTop: hp(16),
  },
  backButtonBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(50),
    height: wp(50),
    padding: wp(12),
    backgroundColor: 'transparent',
    borderRadius: wp(1000),
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(8),
  },
  image: {
    width: wp(165),
    height: hp(34),
    resizeMode: 'contain',
  },
});


export default Header;
