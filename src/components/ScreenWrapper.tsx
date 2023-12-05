import React from 'react'
import { SafeAreaView, StatusBarStyle, StyleSheet, StyleProp, ViewStyle, View } from 'react-native'
import { colors } from '@theme/colors'
import updateStatusBar from '@hooks/updateStatusBar'

interface ScreenWrapperProps {
    statusBarStyle?: StatusBarStyle
    statusBarBackgroundColor?: string
    customStyles?: StyleProp<ViewStyle>
    statusBarTranslucent?: boolean
    useSafeArea?: boolean
    children: React.ReactNode
}

const ScreenWrapper = ({
    statusBarStyle = 'dark-content',
    statusBarBackgroundColor= colors.white,
    customStyles,
    statusBarTranslucent= false,
    useSafeArea= true,
    children,
}: ScreenWrapperProps) => {
    updateStatusBar(statusBarStyle, statusBarBackgroundColor, statusBarTranslucent)

  return (
    useSafeArea ?
    (
        <SafeAreaView style={[styles.main, customStyles]}>
            {children}
        </SafeAreaView>
    ) :
    (
        <View style={[styles.main, customStyles]}>
            {children}
        </View>
    )
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.white,
    },
})

export {ScreenWrapper}