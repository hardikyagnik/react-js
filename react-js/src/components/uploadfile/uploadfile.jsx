import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class UploadFile extends React.Component {
    render(){
        return (
        	<div>
        		<h1>UploadFile</h1>
            <div>{this.props.location.pathname}</div>
        	</div>);
    }
}
export default UploadFile;