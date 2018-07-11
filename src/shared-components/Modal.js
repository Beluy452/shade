import React from "react";
import Form from "./Form";

export default class Modal extends React.Component {
	state = {
		showModal : false
	};

	switchModal = () => {
		this.setState({
			showModal : !this.state.showModal
		});
		document.body.classList.toggle("active");
	};

	render() {
		const toggleModal = this.state.showModal ? "feedback-modal active" : "feedback-modal";
		return (
			<div>
				<div id="feedback" className={toggleModal} role="dialog">
					<div data-wow-offset="0"  data-wow-duration=".3s" className="modal-dialog wow animated fadeInUp">
						<div className="modal-content">
							<div className="head-modal">
								<h4 className="title-modal">Shade Design</h4>
								<button onClick={this.switchModal} className="close-modal">
									<svg xmlns="http://www.w3.org/2000/svg"
										 version="1.1"
										 viewBox="0 0 371.23 371.23">
										<polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23
                                       185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615"/>
									</svg>
								</button>
							</div>
							<div className="modal-body">
								<Form hiddenModal={this.switchModal}/>
							</div>
						</div>
					</div>
				</div>
				<button onClick={this.switchModal}>
					<svg  className="letter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.94 56.25">
						<rect className="letter-1" x="39.72" y="-36.97" width="0.43" height="79.86"
							  transform="translate(36.97 42.9) rotate(-90)"/>
						<rect className="letter-1" x="39.72" y="-33.35" width="0.43" height="79.86"
							  transform="translate(33.35 46.52) rotate(-90)"/>
						<rect className="letter-1" x="39.72" y="10.35" width="0.43" height="79.86"
							  transform="translate(-10.35 90.21) rotate(-90)"/>
						<rect className="letter-1" x="3.04" width="0.43" height="56.25" transform="translate(6.5 56.25) rotate(-180)"/>
						<rect className="letter-1" x="6.74" width="0.43" height="56.25" transform="translate(13.9 56.25) rotate(-180)"/>
						<rect className="letter-1" x="20.15" y="25.69" width="0.43" height="29.57"
							  transform="translate(3.32 82.45) rotate(-131.21)"/>
						<rect className="letter-1" x="25.29" y="-0.68" width="0.43" height="42.69"
							  transform="translate(57.85 15.09) rotate(131.21)"/>
						<rect className="letter-1" x="23.96" y="1.38" width="0.43" height="45.88"
							  transform="translate(58.4 22.15) rotate(131.21)"/>
						<rect className="letter-1" x="17.75" y="23.46" width="0.43" height="29.48"
							  transform="translate(1.05 76.87) rotate(-131.21)"/>
						<path className="letter-1"
							  d="M41.37,2.87V6.67H73L41.37,34.45h0v5L51.1,31,73,50.21H41.37V54H79.94V2.87Zm34.77,45L54,28.43,76.15,9Z"/>
						<rect className="letter-1" x="39.72" y="13.99" width="0.43" height="79.86"
							  transform="translate(-13.99 93.85) rotate(-90)"/>
					</svg>
				</button>
			</div>
		);
	}
}
