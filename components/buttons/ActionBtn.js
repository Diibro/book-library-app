import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonStyles from '../../styles/buttons'

const ActionBtn = ({title, action}) => {
  return (
    <TouchableOpacity style={ButtonStyles.actionBtn}>
          <Text style={ButtonStyles.actionButtonText} onPress={action}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ActionBtn
