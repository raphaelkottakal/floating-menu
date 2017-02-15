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
		
		const y = '100%';
		const itemAnimationTime = 0.25;
		const itemAnimationDelayTime = - itemAnimationTime / 2;

		TweenLite.set(this.refs.one, { y });
		TweenLite.set(this.refs.two, { y });
		TweenLite.set(this.refs.three, { y });
		TweenLite.set(this.refs.four, { y });
		TweenLite.set(this.refs.five, { y });
		
		this.timeline = new TimelineLite({ paused: true });


		this.timeline.to(this.refs.one, itemAnimationTime, { y: '0%' });
		this.timeline.to(this.refs.two, itemAnimationTime, { y: '0%', delay: itemAnimationDelayTime });
		this.timeline.to(this.refs.three, itemAnimationTime, { y: '0%', delay: itemAnimationDelayTime });
		this.timeline.to(this.refs.four, itemAnimationTime, { y: '0%', delay: itemAnimationDelayTime });
		this.timeline.to(this.refs.five, itemAnimationTime, { y: '0%', delay: itemAnimationDelayTime });
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
				width: '100%',
				paddingLeft: 8,
				paddingRight: 8
			},
			item: {
				width: 100 / 6 + '%',
				display: 'inline-block',
				padding: '16px 8px',
				borderRadius: '50%'
			},
			btn: {
				width: 100 / 6 + '%',
				display: 'inline-block',
				padding: '16px 8px',
				borderRadius: '50%'
			}
		}

		return (
			<div style={css.wrapper}>
				<a href="#one">
					<img ref="one" style={css.item} src="http://placehold.it/140/FF8A80/000?text=1" alt="1" />
				</a>
				<a href="#two">
					<img ref="two" style={css.item} src="http://placehold.it/140/FF8A80/000?text=2" alt="2" />
				</a>
				<a href="#three">
					<img ref="three" style={css.item} src="http://placehold.it/140/FF8A80/000?text=3" alt="3" />
				</a>
				<a href="#four">
					<img ref="four" style={css.item} src="http://placehold.it/140/FF8A80/000?text=4" alt="4" />
				</a>
				<a href="#five">
					<img ref="five" style={css.item} src="http://placehold.it/140/FF8A80/000?text=5" alt="5" />
				</a>
				<img ref="btn" onClick={this.handelBtnClick.bind(this)} style={css.btn} src="http://placehold.it/140/F44336/fff?text=^" alt="btn" />
			</div>
		);
	}
}

export default FloatingMenu;