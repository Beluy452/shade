import React from 'react';
import Item from './components/Item.component';
import Header from '../../shared-components/Header';
import Footer from '../../shared-components/Footer';
import {Fetch, scrollTo} from '../../utilits/index';
import Preload from '../../shared-components/Preload';
import BottomMainForm from '../../shared-components/bottom-main-form';
import PreviewsProject from '../../shared-components/PreviewProject';

export default class Portfolio extends React.Component {
	state = {
		projects: [],
		haveMore: true,
		nextCountItem: 4,
	};

	componentDidMount() {
		scrollTo();

    // fetch('https://jsonplaceholder.typicode.com/posts/1')
		Fetch('/api/projects')
		.then(res => {
			if(res) {
        this.setState({
          projects: res
        });
			}
		})
	}

	showMore = () => {
		this.setState({
			nextCountItem: this.state.nextCountItem + 4,
			haveMore: this.state.projects.length === this.state.nextCountItem,
		});
	};

	_getItems = () => {
		const {projects, nextCountItem} = this.state;
    return (
      <div className='flex-container'>
        {projects.slice(0, nextCountItem).map((item, key) => <Item {...item} key={key}/>)}
      </div>);
	};

	render() {
		const {haveMore} = this.state;
		return (
			<div>
				<Header/>
				{
					this.state.projects.length
					? <main id='portfolio' className='wow animated fadeIn offset-section portfolio'>
              <div className='contentMobileAnimate'>
                <div className='top-main width-container'>
                  <h2 className='title-page'>
                    <strong className='crossed-out' children='роботи'/>
                    <span children='Рішення для ваших ідей'/>
                  </h2>
                  {this._getItems()}
                  {haveMore && <button className='more-project' onClick={this.showMore} children='Більше проектів'/>}
                </div>
                <BottomMainForm/>
              </div>
            </main>
					: <Preload/>
        }
				<Footer/>
				<PreviewsProject/>
			</div>);
	}
}