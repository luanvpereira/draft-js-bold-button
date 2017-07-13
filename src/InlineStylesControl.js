import React from 'react';
import StyleButton from './StyleButton';

const INLINE_STYLES = [
	{label: 'Bold', style: 'BOLD'}
];

export const InlineStlylesControl = (props) => {
	var currentStyle = props.editorState.getCurrentInlineStyle();

	return (
		<div className="RichEditor-controls">
			{INLINE_STYLES.map(type =>
				<StyleButton
					key={type.label}
					active={currentStyle.has(type.style)}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				/>
			)}
		</div>
	);
};