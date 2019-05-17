import { AppRegistry,Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import App from './App';
//Components
import MainComponent from './components/MainComponent';
import DetailComponent from './components/DetailComponent';
import ThirdComponent from './components/ThirdComponent';

//Screen names
import box from './music_box/box';
import mhc from './components/man_hinh_chinh';
import AM from './App_music';
import mb from './music_box/main_box';
import LinkinPark from './LinkinPark';
import linkinpark from './playlist/linkinpark';
import RewriteOST from './RewriteOST';
import rewriteost from './playlist/rewriteost';
import search from './components/search';
import littlebusterost from './playlist/littlebusterost';
import LittleBusterOST from './LittleBusterOST';
import dungnguoisaithoidiem from './playlist/dungnguoisaithoidiem';
import DungNguoiSaiThoiDiem from './DungNguoiSaiThoiDiem'
import moitinhdaucuatoi from './playlist/moitinhdaucuatoi';
import MoiTinhDauCuaToi from './MoiTinhDauCuaToi';
import noo from './playlist/noo';
import Noo from './Noo';
import TodoListComponet from './components/TodoListComponent';
import App_favorite from './App_favorite';
import {man_hinh_chinh} from "./screenNames";
import man_hinh_music from "./components/man_hinh_music";
import man_hinh_playlist from "./components/man_hinh_playlist";
const Main = createStackNavigator({
    MainScreen: {
        screen: MainComponent,
        navigationOptions: {
            headerTitle: '',
        },
    },
    man_hinh_chinh:{
        screen:  mhc,
        navigationOptions:{
            header: null,
        }
    },
    man_hinh_music:{
        screen:man_hinh_music,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    man_hinh_playlist:{
        screen:man_hinh_playlist,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },

    TodoListComponent:{
        screen:TodoListComponet,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    search:{
        screen:search,
        navigationOptions:{
            header: null,
        }
    },
    linkinpark:{
      screen:linkinpark,
      navigationOptions:{
          headerTitle: 'Linkin Park',
      }
    },
    DetailScreen: {
        screen: DetailComponent,
        navigationOptions: {
            headerTitle: 'Detail',
        },
    },
    ThirdScreen: {
        screen: ThirdComponent,
        navigationOptions: {
            headerTitle: 'Third',
        },
    },
    App:{
        screen: App,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    App_music:{
        screen:AM,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    LinkinPark:{
        screen:LinkinPark,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    rewriteost:{
        screen:rewriteost,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    RewriteOST:{
        screen:RewriteOST,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    littlebusterost:{
        screen:littlebusterost,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    LittleBusterOST:{
        screen:LittleBusterOST,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    dungnguoisaithoidiem:{
        screen:dungnguoisaithoidiem,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    DungNguoiSaiThoiDiem:{
        screen:DungNguoiSaiThoiDiem,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    moitinhdaucuatoi:{
        screen:moitinhdaucuatoi,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    MoiTinhDauCuaToi:{
        screen:MoiTinhDauCuaToi,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    noo:{
        screen:noo,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    Noo:{
        screen:Noo,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },
    App_favorite:{
        screen:App_favorite,
        navigationOptions:{
            headerTitle: 'Quay lại',
        }
    },



});


const App2 = createAppContainer(Main);
AppRegistry.registerComponent('gg', () => App2);