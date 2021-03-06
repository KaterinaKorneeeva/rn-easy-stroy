import React from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../theme'

export const AppHeaderIcon = props => (
  <HeaderButton
    {...props}
    iconSize={24}
    IconComponent={Ionicons}
    color={Platform.OS === 'android' ? '#fff' : COLORS.BLUE}
  />
)
