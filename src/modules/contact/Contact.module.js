import React from "react";
import {Link} from "react-router-dom";
import Header from "shared/component/Header";
import Footer from "shared/component/Footer";
import FindUs from "shared/component/FindUs";
import {API, Fetch, scrollTo} from "utilits/index";
import BottomMainForm from "shared/component/bottom-main-form";
import TitleAndDescriptionPage from "shared/component/TitleAndDescriptionPage.component";

import PhoneIconSVG from "../../assets/svg/phone.svg";
import LetterIconSVG from "../../assets/svg/letter.svg";

export default class ContactUs extends React.PureComponent {
	state = {
		contacts : []
	};

	componentDidMount() {
		scrollTo();
		this._getContacts();
	}

	_getContacts = () => {
		Fetch(`${API}contacts`).then(res => {
			if (res) {
				this.setState({
					contacts : res,
				});
			}
		});
	};

	_getContactsBody = () => {
		return this.state.contacts.map((item, key) => {
			return (
				<section data-wow-offset="100" data-wow-duration="1.5s" key={key} className="wow animated fadeInUp contact-block">
					<div className="left-block">
						<div className="mail-us">
							<div className="icon-block">
								<LetterIconSVG/>
							</div>
							<div className="phone-and-email">
								<p className="title-block">e-mail</p>
								<Link className="link-block" to={`mailto:${item.email}`}>{item.email}</Link>
							</div>
						</div>
						<div className="phone-us">
							<div className="icon-block">
								<PhoneIconSVG/>
							</div>
							<div className="phone-and-email">
								<p className="title-block">phone / viber / telegram</p>
								<Link className="link-block" to={`tel:${item.phoneOne}`}>{item.phoneOne}</Link>
								<span className="seperator">/</span>
								<Link className="link-block" to={`tel:${item.phoneTwo}`}>{item.phoneTwo}</Link>
							</div>
						</div>
					</div>
					<div className="right-block">
						<p className="findUsHere" children="ми тут:"/>
						<FindUs
							facebook={item.facebook}
							linkedin={item.linked}
						/>
					</div>
				</section>
			);
		});
	};


	render() {
		return (
			<div className="ContactUs">
				<Header/>
				<main className="offset-section contentMobileAnimate contact">

					<div className="width-container">

						{
							<TitleAndDescriptionPage pageName="contacts"/>
						}

						{
							this._getContactsBody()
						}

					</div>

				</main>
				<BottomMainForm/>
				<Footer/>
			</div>
		);
	}
}
