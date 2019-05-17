import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    Text, View,
    Dimensions,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

import Search from './search';
import {linkinpark, rewriteost, littlebusterost, dungnguoisaithoidiem,moitinhdaucuatoi,noo} from "../screenNames";
import Box from '../music_box/box'
import {App_music} from '../screenNames'
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mail';
const KEYS_TO_FILTERS = ['user.name'];
export default class Scroll extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    render(): React.ReactNode {
        const { navigation } = this.props;
        const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                maximumZoomScale={3}
                minimumZoomScale={0.2}
                keyboardDismissMode='on-drag'
                style={{paddingRight:10}}
            >
                <View style={styles.tieude2}>
                    <Text style={styles.tieude1}>PLAY LIST</Text>
                </View>
                <TouchableHighlight onPress={() => {
                    navigation.navigate(linkinpark);
                }}>
                    <View style={styles.playlist}>
                        <Image

                            source={{uri: 'https://steamuserimages-a.akamaihd.net/ugc/824567958173669550/61A8775DEBCE314FA69B3622BFB362952BCEF3E3/?fbclid=IwAR2TdfPm2gxHA0fbJysMdGCaQF1JvQiPhqGqRx5NJjudYI2kcLZxdZ_1pfg'}}
                            style={{width:screenWidth-10, height: screenWidth*194/259}}
                        />
                        <Text style={{fontSize:30, paddingLeft: 120}}>LINKIN PARK</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    navigation.navigate(rewriteost);
                }}>
                    <View style={styles.playlist}>
                        <Image

                            source={{uri: 'https://media.discordapp.net/attachments/571516397981663232/571516519176208394/Rewrite_Original_SoundTrack_cover.jpg?width=416&height=375'}}
                            style={{width:screenWidth-10, height: screenWidth*194/259}}
                        />
                        <Text style={{fontSize:30, paddingLeft: 120}}>Rewrite OST</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    navigation.navigate(littlebusterost);
                }}>
                    <View style={styles.playlist}>
                        <Image

                            source={{uri: 'https://media.discordapp.net/attachments/571516651175018506/571517215841452043/KSLA-003335_01.jpg?width=415&height=376'}}
                            style={{width:screenWidth-10, height: screenWidth*194/259}}
                        />
                        <Text style={{fontSize:30, paddingLeft: 120}}>Little Buster OST</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    navigation.navigate(dungnguoisaithoidiem);
                }}>
                    <View style={styles.playlist}>
                        <Image

                            source={{uri: 'https://media.discordapp.net/attachments/572775037980114946/572777000209743872/9k.png'}}
                            style={{width:screenWidth-10, height: screenWidth*194/259}}
                        />
                        <Text style={{fontSize:20, paddingLeft: 120}}>Đúng Người Sai Thời Điểm</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    navigation.navigate(moitinhdaucuatoi);
                }}>
                    <View style={styles.playlist}>
                        <Image

                            source={{uri: 'https://media.discordapp.net/attachments/572775165969301514/572776550043353108/avt79221_256by256.png'}}
                            style={{width:screenWidth-10, height: screenWidth*194/259}}
                        />
                        <Text style={{fontSize:20, paddingLeft: 120}}>Mối tình đầu của tôi</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    navigation.navigate(noo);
                }}>
                    <View style={styles.playlist}>
                        <Image

                            source={{uri: 'https://media.discordapp.net/attachments/572775416356667422/572776280374902794/Z.png'}}
                            style={{width:screenWidth-10, height: screenWidth*194/259}}
                        />
                        <Text style={{fontSize:20, paddingLeft: 120}}>Noo Phước Thịnh</Text>
                    </View>

                </TouchableHighlight>
            </ScrollView>
        );
    }
}
const styles =StyleSheet.create({
    tieude1:{
        color:'#ffffff',
        fontSize:20,
        padding: 15,
        textAlign: 'center',
    },
    tieude3:{
        backgroundColor:'#33BDFF',
        height:50

    },
    tieude2:{
        backgroundColor:'#ff6f40',
        height:50,
        width:410
    },
    playlist:{
        borderWidth:4,
        borderColor:'white'
    }
});