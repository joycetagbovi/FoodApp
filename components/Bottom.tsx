import {  Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES, FONTS } from '../constants/theme'
import { Entypo } from '@expo/vector-icons';

const Bottom = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => alert('Order placed')}>
      <Text style={styles.text}>Place an order</Text>
      <Entypo name="chevron-right" size={22} color="black" />
    </TouchableOpacity>
  )
}

export default Bottom

const styles = StyleSheet.create({
    button : {
      width: '100%',
      height: 62,
      backgroundColor: '#F5CA48',
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: SIZES.font,
      fontWeight: '700',
      fontFamily: FONTS.bold,
      color: '#000000',
    }

})