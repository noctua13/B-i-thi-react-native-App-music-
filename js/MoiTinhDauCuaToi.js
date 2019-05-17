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
                title: 'Chẳng để em xa anh',
                artist: 'Đức Phúc',
                albumArtUrl: "https://media.discordapp.net/attachments/572775165969301514/572818588424077312/images.png",
                phim: "https://cdn.discordapp.com/attachments/572775165969301514/572775247108112394/ChangDeEmXaAnh2-DucPhuc-5912887.mp3",
            },
            {
                title: 'Yêu thương nào cho mối tình đầu của tôi OST',
                artist: 'Du Quốc Vương',
                albumArtUrl: "https://media.discordapp.net/attachments/572775165969301514/572817778286002187/f0378e3eeb970670ddb641338b3493d056fb931e.png?width=375&height=375",
                phim: "https://cdn.discordapp.com/attachments/572775165969301514/572775250958221313/YeuThuongNaoChoToiMoiTinhDauCuaToiOst-DuQuocVuong-5887377.mp3",
            },
            {
                title: 'Chờ ngày anh nhận ra em',
                artist: 'Thuý Chi',
                albumArtUrl: "https://media.discordapp.net/attachments/572775165969301514/572817367730487307/52cf8e24-7cf4-4702-a425-011cb7472633.png",
                phim: "https://cdn.discordapp.com/attachments/572775165969301514/572775253793701900/ChoNgayAnhNhanRaEmMoiTinhDauCuaToiOST-ThuyChi-5845024.mp3",
            },
            {
                title: 'Phía sau anh là em',
                artist: 'Shin Hồng Vinh',
                albumArtUrl: "https://media.discordapp.net/attachments/572775165969301514/572817148381233172/9k.png",
                phim: "https://cdn.discordapp.com/attachments/572775165969301514/572775251809796096/PhiaSauAnhLaEm-ShinHongVinh-5912888.mp3",
            },
        ];
        return <Player tracks={tracks} />
    }
}
