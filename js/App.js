import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} = WeUI;
import 'weui';
import '../css/app.css';
// import {ButtonArea, Button} from 'react-weui';

const tableData = [
{
  name: 'John Smith',
  status: 'Employed',
  selected: true,
},
{
  name: 'Randal White',
  status: 'Unemployed',
},
{
  name: 'Stephanie Sanders',
  status: 'Employed',
  selected: true,
},
{
  name: 'Steve Brown',
  status: 'Employed',
},
{
  name: 'Joyce Whitten',
  status: 'Employed',
},
{
  name: 'Samuel Roberts',
  status: 'Employed',
},
{
  name: 'Adam Moore',
  status: 'Employed',
},
];

export default class App extends React.Component {

  render() {
       return (
           <section>
               <CellsTitle>文章列表</CellsTitle>
               <Cells access>

                 {tableData.map( (row, index) => (
                   <Cell className="list_item">
                       <CellHeader>
                           <img className="cover" src="http://mmrb.github.io/avatar/jf.jpg" alt=""/>
                       </CellHeader>
                       <CellBody>
                           <h2 className="title">{row.name} 123123123</h2>
                           <p className="desc">{row.name}</p>
                       </CellBody>
                       <CellFooter/>
                   </Cell>
                  ))}
                   <Cell className="list_item">
                       <CellHeader>
                           <img className="cover" src="http://mmrb.github.io/avatar/jf.jpg" alt=""/>
                       </CellHeader>
                       <CellBody>
                           <h2 className="title">WeUI 12asdasdsaasdsa发布——微信官方UI库</h2>
                           <p className="desc">团队里的几个小伙子把微信里面web app的UI，按照设计规范给梳理了一遍，并将之开源了出来。</p>
                       </CellBody>
                       <CellFooter/>
                   </Cell>
                   <Cell className="list_item">
                       <CellHeader>
                           <img className="cover" src="http://mmrb.github.io/avatar/bear.jpg" alt=""/>
                       </CellHeader>
                       <CellBody>
                           <h2 className="title">【纪念】服务器被删除了</h2>
                           <p className="desc">因为没钱付服务器年费，所以一直都是月付，然后每个月服务器商会发来短信告诉我要缴费了。</p>
                       </CellBody>
                       <CellFooter/>
                   </Cell>
               </Cells>
           </section>
       );
   }

}
