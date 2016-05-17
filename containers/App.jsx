import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import {connect} from 'react-redux';
import {fetchAppsByPageNumber} from '../actions/actions';

const {
	Cells,
	CellsTitle,
	CellsTips,
	Cell,
	CellHeader,
	CellBody,
	CellFooter,
	Toast
} = WeUI;
import 'weui';
import '../css/app.css';
// import {ButtonArea, Button} from 'react-weui';

const tableData = [
	{
		name: '测试图片为什么不显示现在图片显示了吗你梦想中的爱神 Smith',
		status: 'Employed测试黄精',
		selected: true
	}, {
		name: 'Randal White',
		status: 'Unemployed'
	}, {
		name: 'Stephanie Sanders',
		status: 'Employed',
		selected: true
	}, {
		name: 'Steve Brown',
		status: 'Employed'
	}, {
		name: 'Joyce Whitten',
		status: 'Employed'
	}, {
		name: 'Samuel Roberts',
		status: 'Employed'
	}, {
		name: 'Adam Moore',
		status: 'Employed'
	}
];

class App extends React.Component {

	componentWillMount() {
		const {dispatch, postsByPageNumaber} = this.props
		dispatch(fetchAppsByPageNumber(0))
	}

	render() {
		const {apps, isFetching} = this.props
		console.log('posts--' + apps);
		return (
			<section>
				<Toast icon="loading" show={isFetching}>
           正在加载中...
				</Toast>
				<CellsTitle>所有分组</CellsTitle>
				<Cells access>
					{apps.map((row, index) => (
						<Cell className="list_item">
							<CellHeader>
								<img className="cover" src="http://mmrb.github.io/avatar/jf.jpg" alt=""/>
							</CellHeader>
							<CellBody>
								<h2 className="title">分组名称：{row.userAppGroupName}</h2>
								<p className="desc">数量：{row.userAppGroupCount}</p>
							</CellBody>
							<CellFooter/>
						</Cell>
					))}
				</Cells>
			</section>
		);
	}
}

App.PropTypes = {
	apps: PropTypes.array.isRequired
}

function mapStateToProps(state) {
	const {postsByPageNumaber} = state
	console.log('state------>>>' + state.items);
	const {isFetching, items: apps} = postsByPageNumaber['undefined'] || {
		isFetching: true,
		items: []
	}
	console.log('apps ====>' + apps);
	return {apps, isFetching}

}

export default connect(mapStateToProps)(App)
