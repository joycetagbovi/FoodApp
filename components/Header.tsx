import { StyleSheet, View, Image, SafeAreaView } from 'react-native'
import React from 'react'


const Header = () => {
  return (
       <View style={styles.heading}>
     <Image source={require('../assets/images/profile.png')} 
      resizeMode='cover' 
      style={styles.imageBox}
     />
     <Image source={require('../assets/images/menu2.png')} />
     </View>
   
  )
}

export default Header

const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        alignItems: 'center',
        paddingHorizontal: 20,   
    }, 

    imageBox:{
        width: 40, 
        height: 40,
        borderRadius: 150 / 2,
        overflow: "hidden",

    }
})