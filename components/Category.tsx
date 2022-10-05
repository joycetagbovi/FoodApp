import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import categoriesData from '../constants/categorydummy'
import { Entypo } from '@expo/vector-icons';
import { FONTS, SIZES } from '../constants/theme';

const Category = () => {
  const [state, setState] = useState(0)

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    {categoriesData.map((item) => {
      return(
        <TouchableOpacity style={[styles.box,{backgroundColor: item.selected ? '#F5CA48' : '#ffffff' }]} key={item.id} >
        <Image source={item.image} 
         resizeMode='contain'
         style={{width: 60, height: 60}}
        />
          <Text
          style={{
           color: '#31323',
           fontSize: SIZES.small,
           fontFamily: FONTS.semiBold,
           fontWeight: '600',
           textAlign: 'center',
           marginTop: 10,
          }}>
            {item.title} </Text>
          <View style={[styles.button, {backgroundColor: item.selected ? '#ffffff' : '#F26C68' }]}>
          <Entypo name="chevron-right" size={24} 
          color={item.selected ? '#000000' : '#ffffff'} />
          </View>
        </TouchableOpacity>
      )
    })
    }
    </ScrollView>
  )
}

export default Category

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5CA48',
        marginRight: 20,
        marginBottom: 5,
        borderRadius: 20,
        paddingHorizontal: 30,
        width: 140,
        height: 177,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
   button: {
    height: 26,
    width: 26,
    borderRadius: 40,
    marginTop: 20,
   }
})