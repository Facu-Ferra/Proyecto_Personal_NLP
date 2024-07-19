/* eslint-disable react/react-in-jsx-scope */
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import {
  InknutAntiqua_300Light,
  InknutAntiqua_600SemiBold,
  useFonts
} from '@expo-google-fonts/inknut-antiqua'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    InknutAntiqua_300Light,
    InknutAntiqua_600SemiBold
  })

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync()
    }
    if (fontsLoaded) {
      hideSplashScreen()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return <Slot />
}
