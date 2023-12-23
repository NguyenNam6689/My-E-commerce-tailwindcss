//* LIB
import axios from 'axios';

//* IMPORT
import { _15_SECOND } from '@/common/constants';
import { HeaderConfig, KeyLocalStorage, Template } from '@/common/enums';
import { get, getURIFromTemplate } from '@/common/utils';

export const axiosIns = axios.create({
	baseURL: '/api',
	timeout: _15_SECOND,
	withCredentials: true,
	headers: {
		Accept: HeaderConfig.Accept,
	},
});

axiosIns.interceptors.request.use(
	(config) => {
		config.headers = config.headers ?? {};
		if (config.url !== '/api/v1/login') {
			const auth = get({ key: KeyLocalStorage.auth }) || null;

			if (auth) {
				config.headers.authorization = getURIFromTemplate(Template.Authorization, {
					accessToken: auth,
				});
			}
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
