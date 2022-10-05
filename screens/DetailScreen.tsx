import { StyleSheet, Text, View, SafeAreaView,Image, TouchableOpacity, FlatList,ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { SIZES,FONTS } from '../constants/theme'
import Bottom from '../components/Bottom';



const DetailScreen = ({route, navigation}:  any) => {
  const {item } = route.params;
  
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.smallCard}>
      <Image source={item.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <ScrollView>
      <View style={styles.heading}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
      <Entypo name="chevron-left" size={22} color="black" />
      </TouchableOpacity>
      <View style={styles.yellowstar}>
      <Entypo name="star" size={22} color="#ffffff" />
      </View>
     </View>
      <View style={{paddingTop:30,paddingHorizontal: 20, }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={{
           fontSize: SIZES.xxlarge,
           fontFamily: FONTS.semiBold,
           color: '#E4723C',
           fontWeight: '600',
        }}>
          ${item.price}
       </Text>
      </View>
      <View style={styles.wrapper}>
        <View>
        <View style={{marginBottom: 20}}>
          <Text style={styles.wrapperTitle}>Size</Text>
          <Text style={styles.wrapperBody}>{item.sizeName} {item.sizeNumber}”</Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={styles.wrapperTitle}>Crust</Text>
          <Text style={styles.wrapperBody}>{item.crust}</Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={styles.wrapperTitle}>Delivery in</Text>
          <Text style={styles.wrapperBody}>{item.deliveryTime} min</Text>
        </View>
        </View>
        <View>
          <Image source={require('../assets/images/pizza2.png')} 
          style={{width: 296, height: 176, marginLeft: 50}}
          resizeMode='contain'
          />
        </View>
      </View>
      <View style={{paddingLeft: 20, marginTop: 60}}>
        <Text
         style={{
          fontSize:SIZES.medium,
          fontFamily: FONTS.bold,
          color: '#000',
          fontWeight: '700',
          marginBottom: 10,
         }}>
          Ingredients
          </Text>
        <View>
        <FlatList 
          data={item.ingredients}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        </View>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 58}}>
      <Bottom />
      </View>
      </ScrollView>
     </SafeAreaView>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
 
    
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    alignItems: 'center',  
    paddingHorizontal: 20,  
}, 
 back :{
  // backgroundColor: '#CDCDCD',
  borderRadius: 10,
  width: 40,
  height: 40,
  borderColor: '#CDCDCD',
  borderWidth: 2,
  padding: 5,
  alignItems: 'center',
  justifyContent: 'center'

 },
 yellowstar: {
   backgroundColor: '#F5CA48',
   borderRadius: 10,
   width: 40,
   height: 40,
   padding: 5,
   alignItems: 'center',
   justifyContent: 'center'
 },
 title: {
   fontSize: SIZES.xxlarge,
   fontFamily: FONTS.bold,
   color: ' #313234',
   fontWeight: '700',
   width: 172,
   marginBottom: 20,
 },
 wrapper: {
   justifyContent: 'space-between',
   marginTop: 30,
   flexDirection: 'row',
   alignItems: 'center',
   paddingLeft: 20,
 },
 wrapperTitle: {
  color: '#CDCDCD',
  fontSize: SIZES.font,
  fontWeight: '500',
  fontFamily: FONTS.medium,
  marginBottom: 5,
 },
 wrapperBody: {
  color: '#000000',
  fontSize: SIZES.medium,
  fontWeight: '600',
  fontFamily: FONTS.semiBold,
 },
 
  smallCard: {
    width: 100,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    shadowColor: '#00000040',
    shadowOffset: {
      width: 2,
      height: 10,
  },
  shadowOpacity: 0.44,
  shadowRadius: 5,
  elevation: 5,  
   justifyContent: 'center',
   alignItems: 'center',
   marginRight: 20,
   marginBottom: 20
  }
 

})