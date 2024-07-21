import React from 'react'

function Footer() {
    return (
        <footer className='footer-background'>
            <div className="container mx-auto w-full sm:px-16 px-8  sm:pt-20 pt-10 space-y-4 sm:block flex flex-col justify-center items-center ">
                <div className="sm:w-fit w-[90px] ClashDisplay-Bold sm:text-4xl   ">
                    <h1>EmailGenie</h1>
                    <img src="/gradient.png" alt="gradient" className='w-full relative  sm:-top-6 -top-3.5 -z-20' />
                </div>
                <div className='grid sm:grid-cols-12  grid-cols-3 sm:space-y-0 space-y-8 sm:text-start text-center '>
                    <ul className='list-none space-y-4 col-span-3'>
                        <li className='ClashDisplay-Medium'>Product</li>
                        <div className='ClashDisplay-Light space-y-3'>
                            <li  className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Price</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Reviews</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>25+ Language supported</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Easy Doc</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Templates</li>
                        </div>
                    </ul>
                    <ul className='list-none space-y-4 col-span-3'>
                        <li className='ClashDisplay-Medium'>Company</li>
                        <div className='ClashDisplay-Light space-y-2'>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Blog</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Contact Us</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Twitter</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Linkedin</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Discord</li>
                        </div>
                    </ul>
                    <ul className='list-none space-y-4 col-span-3'>
                        <li className='ClashDisplay-Medium'>Support</li>
                        <div className='ClashDisplay-Light space-y-2'>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Weekly Demo</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Report a bug</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Report on Outage</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Request a New Feature</li>
                        </div>
                    </ul>
                    <ul className='list-none space-y-4 col-span-3'>
                        <li className='ClashDisplay-Medium'>Use Cases</li>
                        <div className='ClashDisplay-Light'>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>For Students</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>For Recruiters</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>For Email Marketers</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>For Freelancers</li>
                        </div>
                    </ul>
                </div>
                <div className=" w-full border-t h-full py-5 container mx-auto  sm:gap-12 gap-8  sm:justify-between  justify-center  items-center flex sm:flex-row flex-col">
		<div className=" w-full sm:text-start  text-center text-white text-base font-normal leading-snug">@ 2024 applyace. All rights reserved.</div>
			<div className="gap-4  flex w-full sm:justify-end justify-center items-center">
					<a href="https://www.facebook.com" target="_blank" className=" w-6 h-6 relative">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.04525 5.865V8.613H7.03125V11.973H9.04525V21.959H13.1792V11.974H15.9543C15.9543 11.974 16.2142 10.363 16.3403 8.601H13.1962V6.303C13.1962 5.96 13.6462 5.498 14.0922 5.498H16.3463V2H13.2822C8.94225 2 9.04525 5.363 9.04525 5.865Z" fill="#ffffff"></path>
							</svg>
					</a>
					<a href="https://x.com/EmailGenie" target="_blank" className=" w-6 h-6 relative">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M22 5.90765C21.2504 6.23503 20.4565 6.44969 19.644 6.54465C20.4968 6.04388 21.138 5.24976 21.448 4.31065C20.64 4.78098 19.7587 5.11226 18.841 5.29065C18.4545 4.88586 17.9897 4.56404 17.4748 4.34483C16.9598 4.12562 16.4056 4.01362 15.846 4.01565C13.58 4.01565 11.743 5.82565 11.743 8.05565C11.743 8.37165 11.779 8.68065 11.849 8.97565C10.2236 8.89835 8.63212 8.48306 7.17617 7.75629C5.72022 7.02952 4.43176 6.00723 3.393 4.75465C3.02883 5.36905 2.83742 6.07043 2.839 6.78465C2.8397 7.45262 3.00683 8.10988 3.32529 8.69705C3.64375 9.28421 4.1035 9.78276 4.663 10.1477C4.01248 10.1267 3.37602 9.95298 2.805 9.64065V9.69065C2.805 11.6487 4.22 13.2817 6.095 13.6537C5.74261 13.7472 5.37958 13.7945 5.015 13.7947C4.75 13.7947 4.493 13.7697 4.242 13.7197C4.51008 14.5276 5.02311 15.232 5.70982 15.735C6.39653 16.238 7.22284 16.5147 8.074 16.5267C6.61407 17.6512 4.82182 18.2587 2.979 18.2537C2.647 18.2537 2.321 18.2337 2 18.1977C3.88125 19.3884 6.06259 20.0189 8.289 20.0157C15.836 20.0157 19.962 13.8587 19.962 8.51965L19.948 7.99665C20.7529 7.43032 21.4481 6.7225 22 5.90765Z" fill="#ffffff"></path>
							</svg>
					</a>
					<a href="https://www.instagram.com/EmailGenie/" target="_blank" className=" w-6 h-6 relative">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z" fill="#ffffff"></path>
									<path d="M11.9823 6.82031C10.6137 6.82243 9.30184 7.3671 8.33421 8.33492C7.36658 9.30274 6.82216 10.6147 6.82031 11.9833C6.8219 13.3522 7.36634 14.6646 8.33421 15.6327C9.30209 16.6008 10.6144 17.1455 11.9833 17.1473C13.3524 17.1457 14.665 16.6012 15.6331 15.6331C16.6012 14.665 17.1457 13.3524 17.1473 11.9833C17.1452 10.6144 16.6003 9.3022 15.632 8.33451C14.6637 7.36682 13.3512 6.82264 11.9823 6.82131V6.82031ZM11.9823 15.1393C11.1456 15.1393 10.3431 14.8069 9.75139 14.2152C9.15971 13.6236 8.82731 12.8211 8.82731 11.9843C8.82731 11.1476 9.15971 10.3451 9.75139 9.75339C10.3431 9.16171 11.1456 8.82931 11.9823 8.82931C12.8191 8.82931 13.6216 9.16171 14.2132 9.75339C14.8049 10.3451 15.1373 11.1476 15.1373 11.9843C15.1373 12.8211 14.8049 13.6236 14.2132 14.2152C13.6216 14.8069 12.8191 15.1393 11.9823 15.1393Z" fill="#ffffff"></path>
									<path d="M17.1569 8.09509C17.8401 8.09509 18.3939 7.54127 18.3939 6.85809C18.3939 6.17492 17.8401 5.62109 17.1569 5.62109C16.4737 5.62109 15.9199 6.17492 15.9199 6.85809C15.9199 7.54127 16.4737 8.09509 17.1569 8.09509Z" fill="#ffffff"></path>
							</svg>
					</a>
					
					<a href="https://linkedin.com/company/EmailGenie" target="_blank" className=" w-6 h-6 relative">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21.959 13.7203V21.0993H17.681V14.2143C17.681 12.4843 17.062 11.3043 15.514 11.3043C14.332 11.3043 13.628 12.1003 13.319 12.8693C13.206 13.1443 13.177 13.5273 13.177 13.9123V21.0993H8.897C8.897 21.0993 8.955 9.43934 8.897 8.23034H13.177V10.0543L13.149 10.0963H13.177V10.0543C13.745 9.17934 14.76 7.92834 17.033 7.92834C19.848 7.92834 21.959 9.76834 21.959 13.7203ZM4.421 2.02734C2.958 2.02734 2 2.98734 2 4.25034C2 5.48534 2.93 6.47434 4.365 6.47434H4.393C5.886 6.47434 6.813 5.48534 6.813 4.25034C6.787 2.98734 5.887 2.02734 4.422 2.02734H4.421ZM2.254 21.0993H6.532V8.23034H2.254V21.0993Z" fill="#ffffff"></path>
							</svg>
					</a>
			</div>
         	</div>
            </div>
        </footer>
    )
}

export default Footer