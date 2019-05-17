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
                title: 'Numb',
                artist: 'Linkin Park',
                albumArtUrl: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/54729769_337764823611762_1222420195784523776_n.jpg?_nc_cat=110&_nc_oc=AQnVFvumJdgAVFWfrDzx0dL-SIZfqOdasJ1HBHrBFQ-lxn7D9hf7kRaonPKWeBb6mIBPelOIcwSgJV2BX0N-twom&_nc_ht=scontent.fsgn2-3.fna&oh=2e3bfef1be1476e553b00ff00f35bf4e&oe=5D04E176",
                phim: "https://cdn.discordapp.com/attachments/561191435718623254/562642863310110750/Numb_Official_Video_-_Linkin_Park.mp3",
            }
        ];
        return <Player tracks={tracks} />
    }
}
