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

import Box_moitinhdaucuatoi from '../music_box/box_moitinhdaucuatoi'

export default class ThirdComponent extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View >
                <Box_moitinhdaucuatoi
                    name="Chẳng để em xa anh"
                    name2='Đức Phúc'
                    name3="https://media.discordapp.net/attachments/572775165969301514/572818588424077312/images.png"
                    name4="https://cdn.discordapp.com/attachments/572775165969301514/572775247108112394/ChangDeEmXaAnh2-DucPhuc-5912887.mp3"
                    onPress={navigation.navigate}
                />
                <Box_moitinhdaucuatoi
                    name="Yêu thương nào cho mối tình đầu của tôi OST"
                    name2='Du Quốc Vương'
                    name3="https://media.discordapp.net/attachments/572775165969301514/572817778286002187/f0378e3eeb970670ddb641338b3493d056fb931e.png?width=375&height=375"
                    name4="https://cdn.discordapp.com/attachments/572775165969301514/572775250958221313/YeuThuongNaoChoToiMoiTinhDauCuaToiOst-DuQuocVuong-5887377.mp3"
                    onPress={navigation.navigate}
                />
                <Box_moitinhdaucuatoi
                    name="Chờ ngày anh nhận ra em"
                    name2='Thuý Chi'
                    name3="https://media.discordapp.net/attachments/572775165969301514/572817367730487307/52cf8e24-7cf4-4702-a425-011cb7472633.png"
                    name4="https://cdn.discordapp.com/attachments/572775165969301514/572775253793701900/ChoNgayAnhNhanRaEmMoiTinhDauCuaToiOST-ThuyChi-5845024.mp3"
                    onPress={navigation.navigate}
                />
                <Box_moitinhdaucuatoi
                    name="Phía sau anh là em"
                    name2='Shin Hồng Vinh'
                    name3="https://media.discordapp.net/attachments/572775165969301514/572817148381233172/9k.png"
                    name4="https://cdn.discordapp.com/attachments/572775165969301514/572775251809796096/PhiaSauAnhLaEm-ShinHongVinh-5912888.mp3"
                    onPress={navigation.navigate}
                />
            </View>
        );
    }
}