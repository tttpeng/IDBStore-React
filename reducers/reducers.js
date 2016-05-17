import { combineReducers } from 'redux'
import { REQUEST_GROUPS,RECEIVE_GROUPS }  from '../actions/actions'

function apps(state = {
	isFetching: false,
	items:[]
}, action) {
	console.log('几次2' + action.type);
	switch(action.type) {
		case REQUEST_GROUPS:
		break;
		case RECEIVE_GROUPS:

		var okstate = Object.assign({}, state, {
			isFetching: false,
			didInvalidate: false,
			items: action.posts,
			lastUpdated: action.receivedAt
		})
		console.log(okstate);
			console.log('->>>>>>>>' + Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.posts,
				lastUpdated: action.receivedAt
			}));
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.posts,
				lastUpdated: action.receivedAt
			})
		default:
			return state
	}
}

function postsByPageNumaber(state = { }, action) {
	// console.log('reducers acton.posts' + action.posts);
	console.log('几次' + action.type);
	switch (action.type) {
		case RECEIVE_GROUPS:
		case REQUEST_GROUPS:
			console.log('pppp--->' + state.items);
			return Object.assign({}, state, {
				[action.subreddit]: apps(state[action.subreddit], action)
			})
		default:
		return state
	}
}

const rootReducer = combineReducers({
	postsByPageNumaber,
})

export default rootReducer
