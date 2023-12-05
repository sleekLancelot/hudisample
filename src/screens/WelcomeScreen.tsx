import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScreenWrapper } from '@components/ScreenWrapper'
import { heightPercentageToDP, hp, widthPercentageToDP, wp } from '@utils/responsive-dimensions'
import { colors } from '@theme/colors'
import { CustomText } from '@components/CustomText'
import Button from '@components/Button'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
  const navigation = useNavigation()

  return (
    <ScreenWrapper
      useSafeArea={false}
      statusBarTranslucent={true}
      statusBarBackgroundColor={colors.hudiYellow}
    >
      <View
        style={styles.main}
      >
        <Image
          source={require('@assets/images/welcome.png')}
          style={styles.image}
          resizeMode={'stretch'}
        />

        <View style={styles.content}>
          <CustomText.Header
            fontSize={wp(50)}
            lineHeight={wp(57)}
          >
            Live the life you've always wanted
          </CustomText.Header>

          <CustomText.BodySmall
            marginTop={hp(20)}
            marginBottom={hp(20)}
            fontSize={wp(17)}
            lineHeight={wp(24)}
            color={colors.darkGrey2}
          >
            Starting today, let’s help you focus better and accomplish your dream life.
          </CustomText.BodySmall>
        </View>

      </View>
      <Button
        title='Get started'
        customStyles={styles.button}
        onPress={() => navigation.navigate('StepToward')}
      />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  main: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100),
    backgroundColor: colors.white,
    position: 'relative',
  },
  image: {
    width: widthPercentageToDP(100),
    height: 400,
    resizeMode: 'stretch',
  },
  content: {
    marginHorizontal: wp(24),
  },
  button: {
    marginHorizontal: wp(24),
    width: widthPercentageToDP(90),
    // marginLeft: 'auto',
    // marginRight: 'auto',
    position: 'absolute',
    bottom: 20,
  }
})

export {WelcomeScreen}