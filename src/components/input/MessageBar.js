import React, {Component} from 'react';
import {EntypoPaperPlane} from 'react-entypo';

class MessageBar extends Component {
	
	constructor(props) {
		super(props);
		this.state = {value: ''};
	}

	handleChange = (e) => {
		e.preventDefault();
		const value = e.target.value;
		if (value.length >= 256) {
			alert('You have reached 256 character limit!');
		}
		this.setState({value});
	}

	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.onSubmit(this.state.value);
		this.setState({value: ''});
	}

	/**
  * A function that bubbles the onFocus event of the form back to App.js.
  * Meant to be used for dealing with the digital keyboard issue. 
  * Not being currently used.
  */
	checkFocus = (e) => {
		e.preventDefault();
		// this.props.onInputFocus(window.innerHeight);
	}

	render(props) {
		return (
			<div>
				<form className={this.props.messageBarClass} onSubmit={this.handleSubmit} onFocus={this.checkFocus}>
					<input className="text-input"
						style={{fontSize: `${this.props.fontSize}px`}}
						type="search"
						name="inputText"
						placeholder={this.props.placeholder}
						value={this.state.value}
						onChange={this.handleChange}
						autoComplete={'off'}
						required />
					<button className="btn-send" type="submit" value="Send" style={{fontSize: `${this.props.buttonSize}px`}}>
						<EntypoPaperPlane style={{padding: '2px'}}/>
					</button>
				</form>
	    </div>
		);
	}
}
export default MessageBar;
