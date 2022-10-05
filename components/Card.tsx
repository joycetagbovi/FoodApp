import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES,FONTS } from '../constants/theme'
import { Entypo, FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import { FoodProps, RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';




function Card({item}: {item: FoodProps},{navigation}: NativeStackScreenProps<RootStackParamList>) {
  return (
   
    <View style={styles.card}>
        <View>
        <View style={{flexDirection:'row', alignItems: 'center'}}>
        <FontAwesome5 name="crown" size={12} color="#F5CA48" />
        <Text style=
        {{
         fontSize:SIZES.font,
         fontFamily: FONTS.semiBold,
         color: '#000000',
         fontWeight: '600',
         marginLeft: SIZES.base
         }}>
        top of the week
            </Text>
        </View>
        <View style={{marginTop: SIZES.medium}}>
        <Text
           style=
           {{
            fontSize:SIZES.font,
            fontFamily: FONTS.semiBold,
            color: '#313234',
            fontWeight: '600',
            }}>
            {item.title}
            </Text>
        <Text
         style=
         {{
          fontSize:SIZES.small,
          fontFamily: FONTS.medium,
          color: '#C4C4C4',
          fontWeight: '500',
          marginBottom: 10,
         }}>
            Weight: ${item.weight}
            </Text>
       </View>

      <View style={styles.cardBottom}>
       <View style ={styles.yellowBottom}>
        <Entypo name="plus" size={24} color="black" />
      </View>
      <View style={styles.rating}>
      <FontAwesome name="star" size={10} color="black" />
      <Text
       style=
       {{
        fontSize:SIZES.small,
        fontFamily: FONTS.semiBold,
        color: '#000000',
        fontWeight: '600',
        }}>{item.rating}</Text>
      </View>
      </View>
        </View>
        <View style={{ marginLeft: 40,}}>
       <Image source={item.image}
        resizeMode= 'contain'
        style={{ width: 210, height: 125,}}
        />
      </View>
    </View>
   
  )
}

export default  Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        height: 161,
        marginBottom: 20,
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        borderRadius: 25,
        shadowColor: '#00000040',
          shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.22,
        elevation: 25,    
    },
   cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
   },
   yellowBottom: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor:'#F5CA48'
   },
   rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
   }
})