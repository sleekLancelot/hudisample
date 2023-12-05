import Button from '@components/Button'
import { CustomText } from '@components/CustomText'
import Header from '@components/Header'
import { Row } from '@components/Row'
import { ScreenWrapper } from '@components/ScreenWrapper'
import { useNavigation } from '@react-navigation/native'
import { colors } from '@theme/colors'
import { STATUSBAR_HEIGHT, heightPercentageToDP, hp, widthPercentageToDP, wp } from '@utils/responsive-dimensions'
import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'

const StepTowardScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper
      useSafeArea={false}
      statusBarTranslucent={true}
      statusBarBackgroundColor={colors.lighterGreen}
    >
      <View style={styles.main}>
        <Header
          onPressLeftElement={() => navigation.goBack()}
          showBackIcon
        />

        <View style={styles.content}>
          <CustomText.Header
            fontSize={wp(28)}
            lineHeight={wp(34)}
          >
            Take a step towards your dream life
          </CustomText.Header>

          <Row
            marginVertical={hp(30)}
          >
            <View style={styles.bar}></View>
            <View style={styles.italicBox}>
              <CustomText.BodySmall
                fontSize={wp(15)}
                marginBottom={hp(10)}
                customStyles={styles.italic}
                color={colors.darkGrey}
              >
                All our dreams can come true, if we have the courage to pursue them. 
              </CustomText.BodySmall>

              <CustomText.BodySmall fontSize={wp(15)} color={colors.darkGrey}>
              Brainy quotes
              </CustomText.BodySmall>
            </View>
          </Row>

          <CustomText.BodyLarge
            // marginTop={hp(20)}
            fontSize={wp(20)}
            lineHeight={wp(25)}
            color={colors.darkGrey}
          >
          This journey begins with us helping you make small behavioral changes, one day at a time. 
          {"\n"}
          {"\n"}
          What habit can you commit to for a start?
          </CustomText.BodyLarge>
        </View>
      </View>
      <Button
        title='Let’s go'
        customStyles={styles.button}
        onPress={() => navigation.navigate('Habits')}
      />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  main: {
    position: 'relative',
    paddingTop: Platform.OS === 'ios' ? 34 : 30,
    backgroundColor: colors.lighterGreen,
    height: heightPercentageToDP(90),
  },
  content: {
    marginTop: hp(20),
    marginHorizontal: wp(24),
  },
  bar: {
    backgroundColor: colors.black,
    height: hp(80),
    width: 3,
  },
  italicBox: {
    flexBasis: '95%',
  },
  italic: {
    fontStyle: 'italic',
    fontWeight: '500',
  },
  button: {
    marginHorizontal: wp(24),
    width: widthPercentageToDP(90),
    position: 'absolute',
    bottom: 20,
  }
})

export {StepTowardScreen}