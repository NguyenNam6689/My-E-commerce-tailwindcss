//* LIB
import React from 'react';

const LoadingSmall: React.FC = () => {
	return (
		<React.Fragment>
			<div id="loading-container">
				<div id="loading-dots">
					<div className="loading-dot"></div>
					<div className="loading-dot" style={{ animationDelay: '0.25s' }}></div>
					<div className="loading-dot" style={{ animationDelay: '0.5s' }}></div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default LoadingSmall;
