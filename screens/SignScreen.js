import React from 'react'
import { View, Text,TextInput,Dimensions, ScrollView,KeyboardAvoidingView,StyleSheet, TouchableOpacity, Alert } from 'react-native'
import {Foundation,Fontisto,Feather, MaterialCommunityIcons} from '@expo/vector-icons'
//import { ConsoleWriter } from 'istanbul-lib-report';
//import '../screens/Color';

const width = Dimensions.get('screen').width;
const secured = true
export default function SignScreen() {
    const [removeSecured, setSecuredRemoved] = React.useState(true)
    return (
        <View style={{justifyContent:'space-around',margin:20}}>
            <View style={{flex:0.3,alignItems:'center',justifyContent:'center'}}>
                <KeyboardAvoidingView>
                    <View style={{backgroundColor:'#3e4477',width:100,height:100,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                        <Foundation name="social-xbox" color="#fff" size={50} />
                    </View>
                </KeyboardAvoidingView>
            </View>
            <View style={{flex:0.7,marginTop:80,}}>
                <View style={styles.inputContainer}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:18,color:"#8e94a1"}}>Email address</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
                        <View style={{flex:0.2}}>
                            <Fontisto name="email" color="#8e94a1" size={25} />
                        </View>
                        <View style={{flex:0.8}}>
                            <TextInput autoCapitalize="none" placeholder="example@email.com" textContentType="emailAddress" style={{fontSize:18}} />
                        </View>
                    </View>
                </View>
                <View style={[styles.inputContainer,{marginTop:20}]}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:18,color:"#8e94a1"}}>Password</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
                        <View style={{flex:0.1}}>
                            <Feather name="lock" color="#8e94a1" size={25} />
                        </View>
                        <View style={{flex:0.8,}}>
                            <TextInput autoCapitalize="none" placeholder="Password" textContentType="password" style={{marginLeft:30,fontSize:18}} secureTextEntry={removeSecured} />
                        </View>
                        {
                            removeSecured === true ?
                            (
                                <TouchableOpacity style={{flex:0.1}} onPress={()=>setSecuredRemoved(false)}>
                                    <MaterialCommunityIcons name="eye-off-outline" size={28} color="#8e94a1"/>
                                </TouchableOpacity>
                            ):
                            (
                                <TouchableOpacity style={{flex:0.1}} onPress={()=>setSecuredRemoved(true)}>
                                    <MaterialCommunityIcons name="eye-outline" size={28} color="#8e94a1"/>
                                </TouchableOpacity>
                            )

                        }
                    </View>
                </View>
                <View style={{marginTop:20}}>
                    <TouchableOpacity onPress={()=>Alert.alert("Sign in","Normally, you would navigate to the home screen")} style={{width:width/1.07,borderRadius:10,backgroundColor:"#3e4477",justifyContent:'center',alignItems:'center',padding:20}}>
                        <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={()=>Alert.alert("Signup","Normally, you would navigate to a different screen to sign up")}>
                        <Text style={styles.textBtn}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Alert.alert("Forgot password","Normally, you would navigate to a different screen to change password")}>
                        <Text style={styles.textBtn}>Forgot Passord?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        height:70,
        backgroundColor:'#fff',
        borderRadius:10,
        width:width/1.07,
        paddingVertical:5,
        paddingHorizontal:20
    },
    textBtn:{
        fontSize:18,
        color:"#8e94a1",
    }

})
