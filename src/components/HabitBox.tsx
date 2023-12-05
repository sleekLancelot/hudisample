import { colors } from '@theme/colors'
import { hp, wp } from '@utils/responsive-dimensions'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Row } from './Row'
import { CustomText } from './CustomText'

interface HabitBoxProps {
  exteriorColorBg: string
  title: string
  text: string
  icon: JSX.Element
}

const HabitBox = ({
  exteriorColorBg,
  title,
  text,
  icon: Icon,
}: HabitBoxProps) => {

  const styles = StyleSheet.create({
    main:{
      backgroundColor: exteriorColorBg,
      borderRadius: wp(12),
      padding: 16,
      marginBottom: hp(20),
    },
    inner: {
      backgroundColor: colors.white,
      borderRadius: wp(10),
      padding: 16,
    },
    textBox: {
      flexBasis: '80%',
    },
    iconContainer: {
      alignSelf: 'flex-start',
    },
  })

  return (
    <View style={styles.main}>
      <View style={styles.inner}>
        <Row>
          <View style={styles.textBox}>
            <CustomText.BodyLarge
              fontSize={wp(20)}
              lineHeight={wp(25)}
              color={colors.darkGrey}
              fontFamily={'CircularStd-Bold'}
            >{title}</CustomText.BodyLarge>

            <CustomText.BodySmall
              marginTop={hp(10)}
              color={colors.darkGrey7}
              letterSpacing={wp(-0.08)}
            >{text}</CustomText.BodySmall>
          </View>

          <View style={styles.iconContainer}>
            {Icon}
          </View>
        </Row>
      </View>
    </View>
  )
}

export {HabitBox}