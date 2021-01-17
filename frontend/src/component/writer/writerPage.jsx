import React, { Component } from 'react';
import WriterView from './writerView';
import './writerPage.scss';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
class writerPage extends Component {
	state = {
		viewRef: React.createRef()
	};
	render() {
		return (
			<div className="pageContainer">
				<WriterView ref={this.state.viewRef} />
				<div className="sideBarContainer">
					<Button>create story</Button>
					<Button
						onClick={() => {
							this.state.viewRef.current.handleNew();
						}}
					>
						add page
					</Button>
					<Button>delete story</Button>
				</div>
				<div className="share">
					<Button variant="contained" color="primary">
						<p>Share me</p>
					</Button>
				</div>
			</div>
		);
	}
}

export default writerPage;