import React, { Component} from 'react'
import 'antd/dist/antd.css';
import { Result } from 'antd'

class Page404 extends Component{
    render(){
			return(
				<div>
				<Result
				status="404"
				title="404"
				subTitle="'Sorry, the page you visited does not exist."
				/>
				</div>
			)
	}
}

export default Page404