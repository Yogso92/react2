
import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Search from '../Search';
import FilmDetail from '../FilmDetail';

const SearchStackNavigator = createStackNavigator({
    Search: { //nom de la vue
        screen: Search, //nom du component
        navigationOptions:{
            title:'Rechercher'
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})


export default createAppContainer(SearchStackNavigator)