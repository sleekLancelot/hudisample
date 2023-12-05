import React from 'react'
import { ScreenWrapper } from '@components/ScreenWrapper'
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '@components/Header'
import { CustomText } from '@components/CustomText'
import { hp, wp } from '@utils/responsive-dimensions'
import { colors } from '@theme/colors'
import { HabitBox } from '@components/HabitBox'
import { FajrIcon, JannahIcon, KursiIcon } from '@assets/icons'

const HabitsScreen = () => {
  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.header}>
          <CustomText.Header
            fontSize={wp(28)}
            lineHeight={wp(34)}
            letterSpacing={wp(0.34)}
            marginTop={hp(20)}
            marginBottom={hp(30)}
            customStyles={styles.headerText}
          >Habits</CustomText.Header>
        </View>

        <View style={styles.content}>
          <CustomText.BodyLarge
            fontSize={wp(20)}
            lineHeight={wp(25)}
            marginTop={hp(20)}
            marginBottom={hp(30)}
            fontFamily={'CircularStd-Bold'}
          >Choose an habit</CustomText.BodyLarge>

          <View style={styles.habits}>
            <HabitBox
              exteriorColorBg='#F6F2FE'
              title='Wake up early'
              text='Wake up early by shifting your sleep and wake-up times gradually, getting light first thing, and avoiding light, caffeine, and meals too ...'
              icon={<FajrIcon />}
            />
            <HabitBox
              exteriorColorBg='#EBFFF5'
              title='Journal about your hopes and dreams'
              text='Simply writing down your thoughts and feelings to understand them more clearly. And if you struggle with stress, depression, or ...'
              icon={<KursiIcon />}
            />
            <HabitBox
              exteriorColorBg='#FEEFF6'
              title='Give gratitide'
              text='Gratitude is a way for you to appreciate what you have, instead of always reaching for something new in the hope it will make you ...'
              icon={<JannahIcon />}
            />
          </View>

        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  main: {
    marginHorizontal: wp(24),
  },
  headerText: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  header: {
    borderBottomColor: colors.lighterGrey,
    borderBottomWidth: 1,
  },
  content: {
    marginHorizontal: wp(24),
  },
  habits: {

  }
})

export {HabitsScreen}