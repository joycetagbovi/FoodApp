import { StyleSheet, Text, View , TextInput, } from 'react-native'
import React, {useState} from 'react'
import { SIZES,FONTS } from '../constants/theme';
import { AntDesign } from '@expo/vector-icons';

export default function SearchInput() {
const [text, onChangeText] = useState("Search");
  return (
    <View style={{paddingHorizontal: 20}}>
        <View style={styles.searchbar}>
        <AntDesign name="search1" size={16} color="#313234" />
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({  
    searchbar: {
        width: "100%",
        flexDirection: "row",
        alignItems: "baseline",
        paddingVertical: SIZES.small - 2,
        marginTop: 30,
    },
    input: {
        flex: 1,
        color: '#CDCDCD',
        borderBottomWidth: 2,
        borderColor: '#CDCDCD',
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        fontWeight: '600',
        lineHeight: 1,
        marginLeft: 10,

      },

})