/* jshint esversion:6 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
const {
	Cells,
	CellsTitle,
	CellsTips,
	Cell,
	CellHeader,
	CellBody,
	CellFooter
} = WeUI;
import 'weui';
import '../css/app.css';

const tableData = [
	{
		name: 'Taavo Chris',
		status: 'CEO',
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

export default class App extends React.Component {

	render() {
		return (
			<section>
				<CellsTitle>文章列表</CellsTitle>
				<Cells access>

					{tableData.map((row, index) => (
						<Cell className="list_item">
							<CellHeader>
								<img className="cover" src="http://mmrb.github.io/avatar/jf.jpg" alt=""/>
							</CellHeader>
							<CellBody>
								<h2 className="title">{row.name}</h2>
								<p className="desc">{row.status}</p>
							</CellBody>
							<CellFooter/>
						</Cell>
					))}
				</Cells>
			</section>
		);
	}

}
