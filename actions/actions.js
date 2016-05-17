
import fetch from 'isomorphic-fetch'

export const REQUEST_GROUPS = 'REQUEST_GROUPS';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS'


function fetchApps(page) {
	return dispatch => {
		return fetch('http://115.28.67.218:88/allGroup.json', {
			method: 'get',
		})
			.then(response => response.json())
			.then(json => dispatch(receivePost(json)));
	}
}


function receivePost(json) {
	console.log('actions json --' + json.data.list.map(child => child));
	return {
		type: RECEIVE_GROUPS,
		posts: json.data.list.map(child => child)
	}
}


export function fetchAppsByPageNumber(pageNumber) {
	return (dispatch, getState) => {
		return dispatch(fetchApps(pageNumber))
	}
}
