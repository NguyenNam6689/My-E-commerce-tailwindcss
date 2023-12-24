//* LIB
import React from 'react';

//* IMPORT

// import { MetadataTitle } from '@/common/enums';
import SectionLoadingPage from '@/components/loadings/SectionLoadingPage';

const LoadingPage: React.FC = () => {
	return (
		<React.Fragment>
			{/* 0. Metadata */}
			{/* <Metadata title={MetadataTitle.Loading} /> */}
			{/* 1. Section loading page */}
			<SectionLoadingPage />
		</React.Fragment>
	);
};

export default LoadingPage;
