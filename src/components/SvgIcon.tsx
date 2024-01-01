//* IMPORT
import { IconType } from '@/common/enums';
import UseSvg from '@/hooks/useSvg';

const SvgIcon = ({ label }: { label: number }) => {
	const getSvgIcon = () => {
		switch (label) {
			case IconType.Wishlist:
				return UseSvg({
					fill: 'currentColor',
					className: 'h-6 w-6',
					children: (
						<path
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
						/>
					),
				});
			case IconType.Cart:
				return UseSvg({
					fill: 'currentColor',
					className: 'h-6 w-6',
					children: (
						<path
							strokeWidth="1.5"
							fillRule="evenodd"
							d={` M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12
                                A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12
                                a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 
                                0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z
                            `}
							clipRule="evenodd"
						/>
					),
				});
			case IconType.Account:
				return UseSvg({
					fill: 'currentColor',
					className: 'h-6 w-6',
					children: (
						<path
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
						/>
					),
				});

			case IconType.Order:
				return UseSvg({
					fill: 'none',
					viewBox: '0 0 24 24',
					stroke: 'currentColor',
					className: 'h-6 w-6 text-violet-900 lg:mr-2',
					children: (
						<path
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							d={` M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 
							1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 
							0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 
							18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 
							1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12 
						`}
						/>
					),
				});

			case IconType.Guarantee:
				return UseSvg({
					fill: 'none',
					viewBox: '0 0 24 24',
					stroke: 'currentColor',
					className: 'h-6 w-6 text-violet-900 lg:mr-2',
					children: (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d={`
							M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 
							1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 
							.414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504
							 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 
							1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z
						`}
						/>
					),
				});
			case IconType.Support:
				return UseSvg({
					fill: 'none',
					viewBox: '0 0 24 24',
					stroke: 'currentColor',
					className: 'h-6 w-6 text-violet-900 lg:mr-2',
					children: (
						<path
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							d={`
							M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 
							0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 
							0zm-9 5.25h.008v.008H12v-.008z
					`}
						/>
					),
				});

			default:
				return null;
		}
	};
	return getSvgIcon();
};

export default SvgIcon;
