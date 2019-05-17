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
                title: 'In The End',
                artist: 'Linkin Park',
                albumArtUrl: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/54729769_337764823611762_1222420195784523776_n.jpg?_nc_cat=110&_nc_oc=AQnVFvumJdgAVFWfrDzx0dL-SIZfqOdasJ1HBHrBFQ-lxn7D9hf7kRaonPKWeBb6mIBPelOIcwSgJV2BX0N-twom&_nc_ht=scontent.fsgn2-3.fna&oh=2e3bfef1be1476e553b00ff00f35bf4e&oe=5D04E176",
                phim: "https://cdn.discordapp.com/attachments/561191435718623254/562643556704059392/In_The_End_Official_Video_-_Linkin_Park.mp3",
            },
            {
                title:'Leave Out All The Rest',
                artist:'Linkin Park',
                albumArtUrl:"https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/54729769_337764823611762_1222420195784523776_n.jpg?_nc_cat=110&_nc_oc=AQnVFvumJdgAVFWfrDzx0dL-SIZfqOdasJ1HBHrBFQ-lxn7D9hf7kRaonPKWeBb6mIBPelOIcwSgJV2BX0N-twom&_nc_ht=scontent.fsgn2-3.fna&oh=2e3bfef1be1476e553b00ff00f35bf4e&oe=5D04E176",
                phim: "https://cdn.discordapp.com/attachments/561191435718623254/562643640942329856/Leave_Out_All_The_Rest_Official_Video_-_Linkin_Park.mp3",
            },
            {
                title:'What I have Done',
                artist:'Linkin Park',
                albumArtUrl:"https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/54729769_337764823611762_1222420195784523776_n.jpg?_nc_cat=110&_nc_oc=AQnVFvumJdgAVFWfrDzx0dL-SIZfqOdasJ1HBHrBFQ-lxn7D9hf7kRaonPKWeBb6mIBPelOIcwSgJV2BX0N-twom&_nc_ht=scontent.fsgn2-3.fna&oh=2e3bfef1be1476e553b00ff00f35bf4e&oe=5D04E176",
                phim:"https://cdn.discordapp.com/attachments/561191435718623254/562643667190546455/What_Ive_Done_Official_Video_-_Linkin_Park.mp3",
            },
            {
                    title: 'Nhưỡng kẻ mộng mơ',
                    artist:'Noo Phước Thịnh',
                    albumArtUrl:"https://media.discordapp.net/attachments/572775416356667422/572820973972357151/2Q.png",
                    phim:"https://cdn.discordapp.com/attachments/572775416356667422/572775515312881664/NhungKeMongMo-NooPhuocThinh-5723943.mp3"
            },
            {
                    title: 'Thương em là điều anh không thể ngờ',
                    artist:'Noo Phước Thịnh',
                    albumArtUrl:"https://media.discordapp.net/attachments/572775416356667422/572820973972357151/2Q.png",
                    phim:"https://cdn.discordapp.com/attachments/572775416356667422/572775518714462209/ThuongEmLaDieuAnhKhongTheNgo-NooPhuocThinh-5827347.mp3"
            },
            {
                    title: 'Chạm kẽ tim anh một chút thôi',
                    artist:'Noo Phước Thịnh',
                    albumArtUrl:"https://media.discordapp.net/attachments/572775416356667422/572820973972357151/2Q.png",
                    phim:"https://cdn.discordapp.com/attachments/572775416356667422/572775520102514688/ChamKheTimAnhMotChutThoi-NooPhuocThinh-5219031.mp3"
            },
            {
                    title: 'Chẳng để em xa anh',
                    artist:'Đức Phúc',
                    albumArtUrl:"https://media.discordapp.net/attachments/572775165969301514/572818588424077312/images.png",
                    phim:"https://cdn.discordapp.com/attachments/572775165969301514/572775247108112394/ChangDeEmXaAnh2-DucPhuc-5912887.mp3"
            },
            {
                    title: 'Yêu thương nào cho mối tình đầu của tôi OST',
                    artist:'Du Quốc Vương',
                    albumArtUrl:"https://media.discordapp.net/attachments/572775165969301514/572817778286002187/f0378e3eeb970670ddb641338b3493d056fb931e.png?width=375&height=375",
                    phim:"https://cdn.discordapp.com/attachments/572775165969301514/572775250958221313/YeuThuongNaoChoToiMoiTinhDauCuaToiOst-DuQuocVuong-5887377.mp3"
            },
            {

                    title: 'Chờ ngày anh nhận ra em',           
                    artist:'Thuý Chi',
                    albumArtUrl:"https://media.discordapp.net/attachments/572775165969301514/572817367730487307/52cf8e24-7cf4-4702-a425-011cb7472633.png",
                    phim:"https://cdn.discordapp.com/attachments/572775165969301514/572775253793701900/ChoNgayAnhNhanRaEmMoiTinhDauCuaToiOST-ThuyChi-5845024.mp3"
            },
            {

                    title: 'Phía sau anh là em',
                    artist:'Shin Hồng Vinh',
                    albumArtUrl:"https://media.discordapp.net/attachments/572775165969301514/572817148381233172/9k.png",
                    phim:"https://cdn.discordapp.com/attachments/572775165969301514/572775251809796096/PhiaSauAnhLaEm-ShinHongVinh-5912888.mp3"
            },
            {

                    title: 'Đúng Người Sai Thời Điểm',
                    artist:'Nguyễn Văn Trung - Tài Nguyễn',
                    albumArtUrl:"https://media.discordapp.net/attachments/572775037980114946/572810815392972871/9k.png",
                    phim:"https://cdn.discordapp.com/attachments/572775037980114946/572775107219685396/DungNguoiSaiThoiDiem-NguyenVanTrungTaiNguyen-5716401.mp3"
            },
            {

                    title: 'Đúng Người Sai Thời Điểm - Beat',
                    artist:'Nguyễn Văn Trung - Tài Nguyễn',
                    albumArtUrl:"https://media.discordapp.net/attachments/572775037980114946/572810815392972871/9k.png",
                    phim:"https://cdn.discordapp.com/attachments/572775037980114946/572775108561731624/DungNguoiSaiThoiDiemRadioVersionBeat-NguyenVanTrungTaiNguyen-5716403.mp3"
            },
            {

                    title: 'Đúng Người Sai Thời Điểm - Radio',
                    artist:'Nguyễn Văn Trung - Tài Nguyễn',
                    albumArtUrl:"https://media.discordapp.net/attachments/572775037980114946/572810815392972871/9k.png",
                    phim:"https://cdn.discordapp.com/attachments/572775037980114946/572775111862517800/DungNguoiSaiThoiDiemRadioVersion-NguyenVanTrungTaiNguyen-5716402.mp3"
            },
        ];
        return <Player tracks={tracks} />
    }
}
