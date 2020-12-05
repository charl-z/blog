import { combineReducers} from 'redux-immutable'
// import { reducer as headerReducer } from '../common/header/store/'
import { reducer as homeReducer } from '../page/home/store'
import { reducer as detailReducer } from '../page/detail/store'
import { reducer as categoriesReducer } from '../page/categories/store'
import { reducer as  tagsReducer } from '../page/tags/store'
import { reducer as  AboutReducer } from '../page/about/store'

const reducer = combineReducers({
  // header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  categories: categoriesReducer,
  tags: tagsReducer,
  about: AboutReducer
})

export default reducer