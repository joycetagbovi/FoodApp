import { StyleSheet, Text, View,FlatList,Pressable,ScrollView,SafeAreaView  } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import  SearchInput from '../components/SearchInput'
import Category from '../components/Category'
import Card from '../components/Card'
import  Data  from '../constants/dummy'
import { FoodProps, RootStackParamList } from '../types';
import { SIZES,FONTS } from '../constants/theme'
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native'


const HomeScreen  = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container} >
    <View > 
     <Header />
     <View style={styles.textBox}>
     <Text
      style={{
        color: '#313234',
        fontSize: SIZES.medium,
        fontFamily: FONTS.regular,
        fontWeight: '400',
        marginBottom: 5,
      }}>
      Food
      </Text>
     <Text
       style={{
        color: '#313234',
        fontSize: SIZES.xxlarge,
        fontFamily: FONTS.bold,
        fontWeight: '700',
        marginBottom: 5,
      }}
     >
      Delivery
      </Text>
      </View>
     <SearchInput /> 
     <View style={{marginTop: 30, paddingLeft: 20}}>
     <Text
       style={{
        color: '#000000',
        fontSize: SIZES.medium,
        fontFamily: FONTS.bold,
        fontWeight: '700',
        marginBottom: 10,
       }}
      >Category</Text>
     <Category />
    </View>

     <View style={{marginTop: 30, paddingHorizontal: 20,}}>  
      <Text
       style={{
        color: '#000000',
        fontSize: SIZES.medium,
        fontFamily: FONTS.bold,
        fontWeight: '700',
        marginBottom: 10,
       }}
      >Popular</Text>
   
      <FlatList
        data={Data as FoodProps[]}
        renderItem = {({item}) => (
          <Pressable  onPress={() =>
            navigation.navigate("Details",{item: item})
          }>
            <Card item={item}/>
          </Pressable>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={true}
        alwaysBounceVertical={true}
      />
   
     </View>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB',
    
  },
  textBox: {
    marginTop: 30,
    paddingHorizontal: 20,
  }

  
 
})