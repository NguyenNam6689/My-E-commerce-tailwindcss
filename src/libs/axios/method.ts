/* eslint-disable @typescript-eslint/no-explicit-any */
//* LIB
import { AxiosRequestConfig } from 'axios';

//* IMPORT
import { axiosIns } from './axios';

export const getApi = async <T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> => {
	try {
		const response = await axiosIns.get<T>(url, { params, ...config });
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const postApi = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
	try {
		const response = await axiosIns.post<T>(url, data, config);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const putApi = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
	try {
		const response = await axiosIns.put<T>(url, data, config);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const patchApi = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
	try {
		const response = await axiosIns.patch<T>(url, data, config);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const deleteApi = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
	try {
		const response = await axiosIns.delete<T>(url, config);
		return response.data;
	} catch (error) {
		throw error;
	}
};
