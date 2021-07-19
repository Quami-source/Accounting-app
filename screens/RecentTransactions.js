import React from 'react'
import { View, Text,Dimensions, TouchableOpacity,StyleSheet,Image,Alert,ScrollView } from 'react-native'
import { Ionicons,Feather,MaterialCommunityIcons } from '@expo/vector-icons'

const width = Dimensions.get('screen').width;

export default function RecentTransactions() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginVertical:40,width:width/1.07,flex:1,}}>
                <View style={{flex:0.2}}>
                    <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginBottom:10}}>
                        <TouchableOpacity onPress={()=>Alert.alert("Go back","This goes to previous screen")}>
                            <Ionicons name="chevron-back" size={28} color="#666" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>Alert.alert("Search item","Bring up input item to search")}>
                            <Feather name="search" size={25} color="#555" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{fontSize:22,fontWeight:"bold",color:'#3e4685'}}>Recent Transactions</Text>
                        </View>
                        <TouchableOpacity onPress={()=>Alert.alert("All","Current viewing screen")}>
                            <Text style={{color:'#888'}}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',marginTop:30}}>
                        <TouchableOpacity onPress={()=>Alert.alert("Transactions","All transactions screen")} style={{justifyContent:'center',backgroundColor:'#3e4685',borderRadius:20,alignItems:'center',padding:10,width:80}}>
                            <Text style={{color:'#fff'}}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>Alert.alert("Income","View income only")} style={{justifyContent:'center',backgroundColor:'#fff',borderRadius:20,alignItems:'center',marginHorizontal:10,padding:10}}>
                            <Text>Income</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>Alert.alert("Expenses","View expenses only")} style={{justifyContent:'center',backgroundColor:'#fff',borderRadius:20,alignItems:'center',padding:10}}>
                            <Text>Expense</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:0.8,marginTop:30,}}>
                    <View style={{marginTop:20}} >
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#3e4685'}}>Today</Text>
                    </View>
                    <TouchableOpacity onPress={()=>Alert.alert("Item","Detailed transaction item")} style={[styles.item,{marginTop:20,marginBottom:40}]}>
                        <View style={{flex:1,}}>
                            <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#e5ecf6',width:60,height:60,borderRadius:30}}>
                                <MaterialCommunityIcons name="email-open-outline" size={24} color="black" />
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
                    <View style={{margin:20,justifyContent:'center',alignItems:'center'}}>
                        <View style={{width:200,height:200,borderRadius:100,borderColor:"#ccc",borderWidth:0.5,justifyContent:'center',alignItems:'center'}}>
                            <View style={{width:150,height:150,borderRadius:75,borderColor:"#b4c5e5",borderWidth:10,justifyContent:'center',alignItems:'center'}}>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Image resizeMode="cover" style={{width:100,height:100,borderRadius:50}} source={{uri:"https://www.kinston.com/storyimage/NC/20171117/NEWS/171118149/AR/0/AR-171118149.jpg"}} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>Alert.alert("Details screen","View more details on other screen")} style={{marginTop:10,justifyContent:'center',alignItems:'center',width:width/1.07,borderRadius:10,height:60,backgroundColor:'#3e4685'}}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>See Details</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
