import React from 'react';
// import SocialMedia from "../SocialMedia";
export default function Footer({}) {
	return (
		<footer className=" bg-gray-100 p-4  sm:p-6">
			<div className="mx-auto max-w-6xl sm:flex sm:justify-between">
				<div className="mx-auto mb-6 w-fit max-w-[175px] sm:mx-0 md:mb-0">
					<a
						href="https://www.intexjo.com/"
						className="flex items-center"
					>
						<img
							src="/Assets/images/logo.png"
							className="mr-3  w-full"
							alt="FlowBite Logo"
						/>
					</a>
				</div>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 ">
					<div className=" flex flex-col items-center text-center sm:items-start sm:text-left">
						<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 ">
							Follow us
						</h2>
						<ul className="text-gray-600 ">
							<li className="mb-4">
								<a
									href="https://www.facebook.com/intexjor"
									className="flex items-center font-bold text-primary hover:text-gray-900 "
								>
									<svg
										className="h-5 w-5"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clipRule="evenodd"
										/>
									</svg>{' '}
									<span>Facebook</span>
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/intexjo/"
									className="flex items-center font-bold text-primary hover:text-gray-900 "
								>
									<svg
										className="h-5 w-5"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Instagram</span>
								</a>
							</li>
						</ul>
					</div>
					<div className=" flex flex-col items-center text-center sm:items-start sm:text-left">
						<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 ">
							CUSTOMER SERVICE
						</h2>
						<ul className="font-bold text-green-500 ">
							<li className="mb-4">
								<a
									href="https://wa.me/798642783"
									className="flex hover:underline"
								>
									<svg
										className="h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 512 512"
									>
										<path
											d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
											fillRule="evenodd"
										/>
									</svg>
									<span>798642783</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="my-6 border-gray-200  sm:mx-auto lg:my-8" />
			<div className="mx-auto max-w-6xl sm:flex sm:items-center sm:justify-between">
				<span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
					© 2023{' '}
					<a
						href="https://www.intexjo.com/"
						className="hover:underline"
					>
						IntexJo™
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
}
