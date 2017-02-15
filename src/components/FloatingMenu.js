import React, { Component } from 'react';
import { TweenLite, TimelineLite } from 'gsap';

class FloatingMenu extends Component {
	
	constructor() {
		super();
		this.state = {
			open: false
		};
	}

	componentDidMount() {
		
		const y = 48;
		const itemAnimationTime = 0.25;
		const itemAnimationDelayTime = - itemAnimationTime / 2;

		TweenLite.set(this.refs.one, { y });
		TweenLite.set(this.refs.two, { y });
		TweenLite.set(this.refs.three, { y });
		TweenLite.set(this.refs.four, { y });
		TweenLite.set(this.refs.five, { y });
		
		this.timeline = new TimelineLite({ paused: true });


		this.timeline.to(this.refs.one, itemAnimationTime, { y: 0 });
		this.timeline.to(this.refs.two, itemAnimationTime, { y: 0, delay: itemAnimationDelayTime });
		this.timeline.to(this.refs.three, itemAnimationTime, { y: 0, delay: itemAnimationDelayTime });
		this.timeline.to(this.refs.four, itemAnimationTime, { y: 0, delay: itemAnimationDelayTime });
		this.timeline.to(this.refs.five, itemAnimationTime, { y: 0, delay: itemAnimationDelayTime });
	}

	handelBtnClick() {

		if (!this.state.open) {
			TweenLite.to(this.refs.btn, 0.5, { rotation: 180 });
			this.timeline.play();
		} else {
			this.timeline.reverse();
			TweenLite.to(this.refs.btn, 0.5, { y: 0, rotation: 0 });
		}
		this.setState({ open: !this.state.open });

	}


	render() {

		const css = {
			wrapper: {
				position: 'fixed',
				bottom: 0,
				left: 0,
				lineHeight: 0,
				width: '100%'
			},
			item: {
				display: 'inline-block',
				margin: '4px 7px',
				borderRadius: '50%'
			},
			btn: {
				position: 'absolute',
				bottom: 0,
				right: 0,
				margin: 4,
				borderRadius: '50%'
			}
		}

		return (
			<div style={css.wrapper}>
				<div>
					<img ref="one" style={css.item} src="http://placehold.it/40/FF8A80/000?text=1" alt="1" />
					<img ref="two" style={css.item} src="http://placehold.it/40/FF8A80/000?text=2" alt="2" />
					<img ref="three" style={css.item} src="http://placehold.it/40/FF8A80/000?text=3" alt="3" />
					<img ref="four" style={css.item} src="http://placehold.it/40/FF8A80/000?text=4" alt="4" />
					<img ref="five" style={css.item} src="http://placehold.it/40/FF8A80/000?text=5" alt="5" />
				</div>
				<img ref="btn" onClick={this.handelBtnClick.bind(this)} style={css.btn} src="http://placehold.it/40/F44336/fff?text=^" alt="btn" />
			</div>
		);
	}
}

export default FloatingMenu;