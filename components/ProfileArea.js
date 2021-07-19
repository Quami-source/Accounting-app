import React from 'react'
import { View, Text,Image, Dimensions, StyleSheet,TouchableOpacity, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const width = Dimensions.get('screen').width;

export default function ProfileArea() {
    return (
        <View style={{backgroundColor:'#fff',borderRadius:10,flex:2,width:width/1.07,marginVertical:20,paddingBottom:50}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>Alert.alert("Menu","Open up the menu items")}>
                    <Image resizeMode="contain" style={{width:20,height:20}} source={{uri:"https://image.flaticon.com/icons/png/512/130/130918.png"}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Alert.alert("Menu","Open up the menu items")}>
                    <Entypo name="dots-two-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#ccc',width:100,height:100,borderRadius:50,}}>
                    <Image resizeMode="cover" style={{width:100,height:100,borderRadius:50}} source={{uri:'https://www.kinston.com/storyimage/NC/20171117/NEWS/171118149/AR/0/AR-171118149.jpg'}}/>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:10,marginBottom:30}}>
                    <Text style={{fontSize:25,fontWeight:'bold',color:'#3e4685'}}>John Doe</Text>
                    <Text style={styles.subText}>UI/UX Researcher</Text>
                </View>
               
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View>
                    <Text style={styles.text}>$89000</Text>
                    <Text style={styles.subText}>Income</Text>
                </View>
                <View>
                    <Text style={styles.text}>$54000</Text>
                    <Text style={styles.subText}>Expenses</Text>
                </View>
                <View>
                    <Text style={styles.text}>$23400</Text>
                    <Text style={styles.subText}>Loan</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {justifyContent:'space-between',flexDirection:"row",alignItems:'center',padding:20},
    text:{
        fontSize:22,
        color:"#3e4685"
    },
    subText:{
        color:'#5b628f',
        textAlign:'center'
    }
})
