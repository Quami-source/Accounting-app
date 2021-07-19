import React from 'react'
import { View, Text, StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons,Entypo,FontAwesome,Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('screen').width;

export default function TabComponent() {
    return (
        <View style={styles.content}>
            <TouchableOpacity>
                <MaterialCommunityIcons name="home-outline" size={26} color="#3e4685" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Entypo name="credit-card" size={24} color="#3e4685" />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#3e4685',width:35,height:35,justifyContent:'center',alignItems:'center',borderRadius:5}}>
                <Entypo name="plus" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome name="dollar" size={24} color="#3e4685"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="person-circle-outline" size={26} color="#3e4685" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        height:60,
        
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20
    }
})