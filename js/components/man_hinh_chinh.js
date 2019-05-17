import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    Text, View,
    Dimensions,
    StyleSheet,
    Image,
    TouchableHighlight,
    ImageBackground
} from 'react-native';

import Search from './search';
import {
    linkinpark,
    rewriteost,
    littlebusterost,
    dungnguoisaithoidiem,
    moitinhdaucuatoi,
    noo,
    man_hinh_chinh
} from "../screenNames";
import Box from '../music_box/box'
import {App_music, man_hinh_playlist, man_hinh_music,TodoListComponent } from '../screenNames'
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mail';
import Playlist from './man_hinh_playlist';
import Music from './man_hinh_music';
import Button from "./MainComponent";
const KEYS_TO_FILTERS = ['user.name'];
class NhapNhay extends React.Component{
    constructor(props){
        super(props);
        this.state={isShowText: true};

        setInterval(
            ()=>{
                this.setState(previousState=>{
                    return{isShowText: !previousState.isShowText}
                });
            },
            1000
        );
    }
    render(): React.ReactNode {
        let textToDisplay = this.state.isShowText ? this.props.textContent:'';
        return (
            <Text style={{color:'yellow', fontSize: 20}}>{textToDisplay}</Text>
        );
    }
}
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
                <ImageBackground source={{uri: 'https://i.pinimg.com/originals/2b/36/b4/2b36b4b186af24c076714af2fbb6d813.jpg'}} style={{width: '100%', height: '100%',
                    alignItems:'center'}}>
                    <View style={{alignItems:'center', paddingTop:100}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <NhapNhay textContent={`★ `}/>
                            <TouchableHighlight onPress={() => {
                                navigation.navigate(man_hinh_playlist);
                            }}>
                                    <Text style={{color:'white', fontSize: 40}} >Play List</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center',padding: 10}}>
                            <NhapNhay textContent={`★ `}/>
                            <TouchableHighlight onPress={() => {
                                navigation.navigate(man_hinh_music);
                            }}>
                                <Text style={{color:'white',fontSize: 40}} >Music</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <NhapNhay textContent={`★ `}/>
                            <TouchableHighlight onPress={() => {
                                navigation.navigate(TodoListComponent);
                            }}>
                                <Text style={{color:'white',fontSize: 40}} >Favorites List</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ImageBackground>





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