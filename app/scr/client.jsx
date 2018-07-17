"use strict"

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import {connect} from 'react-redux'

import axios from "axios"
import _ from "lodash"


// import Brain from './Brain.js'
// import NavBar from './NavBar/index.jsx'


require('./style.less')


// const store = Brain.getStore()

// ReactDOM.render( 
// 	<Provider store={store}>
// 		<div>
// 			<NavBar />
// 			<MainView />
// 			<ToolColumn />
// 			<LoadingScreen />
// 			<LoginScreen fetch_data={fetchData} />
// 		</div>
// 	</Provider>, document.getElementById('appDiv'))


ReactDOM.render( 
		<div id="main" >
			It works ...
		</div>, document.getElementById('appDiv'))
