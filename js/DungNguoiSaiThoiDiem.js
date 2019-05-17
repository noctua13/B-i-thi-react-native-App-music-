import React, { Component } from 'react';
import Player from './components/player';
import Box_DungNguoiSaiThoiDiem from "./playlist/dungnguoisaithoidiem";
import {View} from "react-native";



export default class App_music extends Component {
    render() {
        console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
        let music = this.props.navigation.state.params;
        const tracks = [
            {
                title: music.title_1,
                artist: music.artist_1,
                albumArtUrl: music.albumArtUrl_1,
                phim: music.phim_1,
            },
            {
                title: "Đúng Người Sai Thời Điểm",
                artist: 'Nguyễn Văn Trung - Tài Nguyễn',
                albumArtUrl: "https://media.discordapp.net/attachments/572775037980114946/572810815392972871/9k.png",
                phim: "https://cdn.discordapp.com/attachments/572775037980114946/572775107219685396/DungNguoiSaiThoiDiem-NguyenVanTrungTaiNguyen-5716401.mp3"
            },
            {
                title: "Đúng Người Sai Thời Điểm - Beat",
                artist: 'Nguyễn Văn Trung - Tài Nguyễn',
                albumArtUrl: "https://media.discordapp.net/attachments/572775037980114946/572810815392972871/9k.png",
                phim: "https://cdn.discordapp.com/attachments/572775037980114946/572775108561731624/DungNguoiSaiThoiDiemRadioVersionBeat-NguyenVanTrungTaiNguyen-5716403.mp3"
            },
            {
                title: "Đúng Người Sai Thời Điểm - Radio",
                artist: 'Nguyễn Văn Trung - Tài Nguyễn',
                albumArtUrl: "https://media.discordapp.net/attachments/572775037980114946/572810815392972871/9k.png",
                phim: "https://cdn.discordapp.com/attachments/572775037980114946/572775111862517800/DungNguoiSaiThoiDiemRadioVersion-NguyenVanTrungTaiNguyen-5716402.mp3"
            },
        ];
        return <Player tracks={tracks} />
    }
}
