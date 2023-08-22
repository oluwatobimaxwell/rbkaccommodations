import React from "react";

const MediaAdPopUp = () => {
	return (
		<div id="subscribe-popup" className="mfp-hide subscribe-popup">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-5 col-md-10 bg-white modal-popup-main p-0">
						<img
							src={require("../../media/add-image-2.jpg").default}
							alt="advertisement"
						/>
						<button title="Close (Esc)" type="button" className="mfp-close">
							×
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediaAdPopUp;
