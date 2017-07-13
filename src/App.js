import React, { Component } from 'react';
import './App.css';

import { Editor, EditorState, RichUtils } from 'draft-js';

import {InlineStlylesControl} from './InlineStylesControl';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {editorState: EditorState.createEmpty()}
		this.onChange = (editorState) => this.setState({editorState})
	}

	toggleInlineStyle(inlineStyle) {
		return (inlineStyle) => {
			this.onChange(
				RichUtils.toggleInlineStyle(
					this.state.editorState,
					inlineStyle
				)
			);
		}
	}

	render() {
		let editorState = this.state.editorState;

		return (
			<div>
				<h1 className="title">Draft JS</h1>
				<div className="editor-content">
					
					<div className="editor-toolbar">
						<InlineStlylesControl 
							editorState={editorState}
							onToggle={this.toggleInlineStyle()}
						/>
					</div>

					<Editor className="editor" editorState={this.state.editorState} onChange={this.onChange}/>
				</div>
			</div>
		);
	}
}

export default App;
