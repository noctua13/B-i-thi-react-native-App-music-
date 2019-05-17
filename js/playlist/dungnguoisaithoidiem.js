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

import Box_DungNguoiSaiThoiDiem from '../music_box/box_dungnguoisaithoidiem'

export default class ThirdComponent extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View >
                <Box_DungNguoiSaiThoiDiem
                    name="Đúng Người Sai Thời Điểm"
                    name2='Nguyễn Văn Trung - Tài Nguyễnn'
                    name3="https://media.discordapp.net/attachments/572775037980114946/572810815392972871/9k.png"
                    name4="https://cdn.discordapp.com/attachments/572775037980114946/572775107219685396/DungNguoiSaiThoiDiem-NguyenVanTrungTaiNguyen-5716401.mp3"
                    onPress={navigation.navigate}
                />
                <Box_DungNguoiSaiThoiDiem
                    name="Đúng Người Sai Thời Điểm - Radio"
                    name2='Nguyễn Văn Trung - Tài Nguyễnn'
                    name3="https://media.discordapp.net/attachments/572775037980114946/572810815392972871/9k.png"
                    name4="https://cdn.discordapp.com/attachments/572775037980114946/572775111862517800/DungNguoiSaiThoiDiemRadioVersion-NguyenVanTrungTaiNguyen-5716402.mp3"
                    onPress={navigation.navigate}
                />
                <Box_DungNguoiSaiThoiDiem
                    name="Đúng Người Sai Thời Điểm - Beat"
                    name2='Nguyễn Văn Trung - Tài Nguyễnn'
                    name3="https://media.discordapp.net/attachments/572775037980114946/572810815392972871/9k.png"
                    name4="https://cdn.discordapp.com/attachments/572775037980114946/572775108561731624/DungNguoiSaiThoiDiemRadioVersionBeat-NguyenVanTrungTaiNguyen-5716403.mp3"
                    onPress={navigation.navigate}
                />
            </View>
        );
    }
}