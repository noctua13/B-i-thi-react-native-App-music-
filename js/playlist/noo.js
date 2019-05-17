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

import Box_Noo from '../music_box/box_noo'

export default class ThirdComponent extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View >
                <Box_Noo
                    name="Chạm kẽ tim anh một chút thôi"
                    name2='Noo Phước Thịnh'
                    name3="https://media.discordapp.net/attachments/572775416356667422/572820973972357151/2Q.png"
                    name4="https://cdn.discordapp.com/attachments/572775416356667422/572775520102514688/ChamKheTimAnhMotChutThoi-NooPhuocThinh-5219031.mp3"
                    onPress={navigation.navigate}
                />
                <Box_Noo
                    name="Nhưỡng kẻ mộng mơ"
                    name2='Noo Phước Thịnh'
                    name3="https://media.discordapp.net/attachments/572775416356667422/572820973972357151/2Q.png"
                    name4="https://cdn.discordapp.com/attachments/572775416356667422/572775515312881664/NhungKeMongMo-NooPhuocThinh-5723943.mp3"
                    onPress={navigation.navigate}
                />
                <Box_Noo
                    name="Thương em là điều anh không thể ngờ"
                    name2='Noo Phước Thịnh'
                    name3="https://media.discordapp.net/attachments/572775416356667422/572820973972357151/2Q.png"
                    name4="https://cdn.discordapp.com/attachments/572775416356667422/572775518714462209/ThuongEmLaDieuAnhKhongTheNgo-NooPhuocThinh-5827347.mp3"
                    onPress={navigation.navigate}
                />
            </View>
        );
    }
}