import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import Box from './box'
import {App_music} from '../screenNames'
import {MainScreen} from "../screenNames";
import {Navigation} from "react-native-navigation";
import {ThirdScreen} from "../screenNames";
import Swipeout2 from "react-native-swipeout";
export default class Nhac extends Component{
    constructor(props) {
        super(props);

        this.state = {
            tieude: 'Numb',
            nhacsi: 'Linkin Park',
            hinhnen: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/54729769_337764823611762_1222420195784523776_n.jpg?_nc_cat=110&_nc_oc=AQnVFvumJdgAVFWfrDzx0dL-SIZfqOdasJ1HBHrBFQ-lxn7D9hf7kRaonPKWeBb6mIBPelOIcwSgJV2BX0N-twom&_nc_ht=scontent.fsgn2-3.fna&oh=2e3bfef1be1476e553b00ff00f35bf4e&oe=5D04E176",
            nhac: "https://cdn.discordapp.com/attachments/561191435718623254/562642863310110750/Numb_Official_Video_-_Linkin_Park.mp3"

        };

    }
    render(): React.ReactNode {
        let dataSendToDetail = {
            title_1: this.state.tieude,
            artist_1: this.state.nhacsi,
            albumArtUrl_1: this.state.hinhnen,
            phim_1: this.state.nhac,
        };
        const { navigation } = this.props;
        return (
            <View>
                <TouchableHighlight onPress={() => {
                    this.props.navigation.navigate(App_music,dataSendToDetail);}}>
                    <Text>{this.state.tieude}</Text>
                </TouchableHighlight>
                <Box
                    name="Numb"
                    name2='Linkin Park'
                    name3="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/54729769_337764823611762_1222420195784523776_n.jpg?_nc_cat=110&_nc_oc=AQnVFvumJdgAVFWfrDzx0dL-SIZfqOdasJ1HBHrBFQ-lxn7D9hf7kRaonPKWeBb6mIBPelOIcwSgJV2BX0N-twom&_nc_ht=scontent.fsgn2-3.fna&oh=2e3bfef1be1476e553b00ff00f35bf4e&oe=5D04E176"
                    name4="https://cdn.discordapp.com/attachments/561191435718623254/562642863310110750/Numb_Official_Video_-_Linkin_Park.mp3"
                    onPress={navigation.navigate}
                />
                <Box
                    name="Hi hi"
                    name2='Linkin Park'
                    name3="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/54729769_337764823611762_1222420195784523776_n.jpg?_nc_cat=110&_nc_oc=AQnVFvumJdgAVFWfrDzx0dL-SIZfqOdasJ1HBHrBFQ-lxn7D9hf7kRaonPKWeBb6mIBPelOIcwSgJV2BX0N-twom&_nc_ht=scontent.fsgn2-3.fna&oh=2e3bfef1be1476e553b00ff00f35bf4e&oe=5D04E176"
                    name4="https://cdn.discordapp.com/attachments/561191435718623254/562642863310110750/Numb_Official_Video_-_Linkin_Park.mp3"
                    onPress={navigation.navigate}

                />
            </View>



        );
    }

}