import Header from '@components/Header'
import { ScreenWrapper } from '@components/ScreenWrapper'
import { useNavigation } from '@react-navigation/native'
import { colors } from '@theme/colors'
import { wp } from '@utils/responsive-dimensions'
import React from 'react'
import { StyleSheet, View } from 'react-native'

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
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  main: {
    marginHorizontal: wp(24),
  },
})

export {StepTowardScreen}