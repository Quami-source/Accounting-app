import React from 'react'
import { View, Text,Dimensions, ScrollView } from 'react-native'
import Overview from '../components/Overview'
import ProfileArea from '../components/ProfileArea'
import TabComponent from '../components/TabComponent'

const width = Dimensions.get("screen").width;

export default function Dashboard() {
    return (
        <View>
            <ScrollView>
            <View style={{marginTop:20,}}>
                <ProfileArea/>
                <Overview/>
            </View>
            </ScrollView>
            <TabComponent/>
        </View>
    )
}
