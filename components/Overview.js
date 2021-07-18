import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

//const dd = today.getDay()
const d = Date.now()
const today = new Date(d)

export default function Overview() {
    return (
        <View style={{flex:2,}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,alignItems:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingVertical:20}}>
                    <Text style={{color:'#3e4685',fontSize:24, fontWeight:"bold", paddingRight:10}}>Overview</Text>
                    <FontAwesome5 name="bell" size={18} color="#8e94a1" />
                </View>
                <View>
                    <Text style={{color:'#3e4685'}}>{today.toDateString()}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.item}>
                <View style={{flex:1,}}>
                    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#e5ecf6',width:60,height:60,borderRadius:30}}>
                        <FontAwesome5 name="arrow-up" size={18} />
                    </View>
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.textBold}>Sent</Text>
                    <Text style={{color:'#999'}}>Some sub-text here</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end',}}>
                    <Text style={styles.textBold}>$200</Text>
                </View>
            </TouchableOpacity>

            {/* -------------Recieved------------------- */}
            <TouchableOpacity style={[styles.item,{marginTop:20}]}>
                <View style={{flex:1,}}>
                    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#e5ecf6',width:60,height:60,borderRadius:30}}>
                        <FontAwesome5 name="arrow-down" size={18} />
                    </View>
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.textBold}>Received</Text>
                    <Text style={{color:'#999'}}>Some sub-text here</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end',}}>
                    <Text style={styles.textBold}>$300</Text>
                </View>
            </TouchableOpacity>

            {/* -------------Loan------------------ */}
            <TouchableOpacity style={[styles.item,{marginTop:20,marginBottom:40}]}>
                <View style={{flex:1,}}>
                    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#e5ecf6',width:60,height:60,borderRadius:30}}>
                        <FontAwesome5 name="file-invoice-dollar" size={18} />
                    </View>
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.textBold}>Loan</Text>
                    <Text style={{color:'#999'}}>Some sub-text here</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end',}}>
                    <Text style={styles.textBold}>$400</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#fff',
        borderRadius:10,
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    textBold:{
        fontWeight:'bold',
        fontSize:18
    }
})