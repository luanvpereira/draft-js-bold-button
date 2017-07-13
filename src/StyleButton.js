import React, { Component } from 'react';

class StyleButton extends Component {
	constructor() {
		super();

		this.onToggle = (e) => {
			e.preventDefault();
			this.props.onToggle(this.props.style);
		}
	}

	render() {
		let className = 'editor-btn';
		
		if(this.props.active) {
			className += ' editor-btn--active';
		}

		return (
			<button 
				type="button"
				className={className}
				onMouseDown={this.onToggle}
			>
			{this.props.label}
			</button>
		);
	}
}

export default StyleButton;