import React, { Component } from 'react';
import Player from './components/player';



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
                title: 'Nhưỡng kẻ mộng mơ',
                artist: 'Noo Phước Thịnh',
                albumArtUrl: "https://media.discordapp.net/attachments/572775416356667422/572820973972357151/2Q.png",
                phim: "https://cdn.discordapp.com/attachments/572775416356667422/572775515312881664/NhungKeMongMo-NooPhuocThinh-5723943.mp3",
            },
            {
                title: 'Thương em là điều anh không thể ngờ',
                artist: 'Noo Phước Thịnh',
                albumArtUrl: "https://media.discordapp.net/attachments/572775416356667422/572820973972357151/2Q.png",
                phim: "https://cdn.discordapp.com/attachments/572775416356667422/572775518714462209/ThuongEmLaDieuAnhKhongTheNgo-NooPhuocThinh-5827347.mp3",
            },
            {
                title: 'Chạm kẽ tim anh một chút thôi',
                artist: 'Noo Phước Thịnh',
                albumArtUrl: "https://media.discordapp.net/attachments/572775416356667422/572820973972357151/2Q.png",
                phim: "https://cdn.discordapp.com/attachments/572775416356667422/572775520102514688/ChamKheTimAnhMotChutThoi-NooPhuocThinh-5219031.mp3",
            },
        ];
        return <Player tracks={tracks} />
    }
}
