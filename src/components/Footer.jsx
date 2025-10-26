import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">

            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} className='mx-2' />
                    <FaInstagram size={30} className='mx-2' />
                    <FaTwitterSquare size={30} className='mx-2' />
                    <FaGithubSquare size={30} className='mx-2' />
                    <FaDribbbleSquare size={30} className='mx-2' />
                </div>

            </div>
            <div className="lg:col-span-2 flex justify-between mt-6">
                <div>
                    <h6 className='font-bold text-[#00df9a]'>Solutions</h6>
                    <ul>
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold text-[#00df9a]'>Support</h6>
                    <ul>
                        <li>Pricing</li>
                        <li>Documentation</li>
                        <li>Guides</li>
                        <li>API Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold text-[#00df9a]'>Company</h6>
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Careers</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold text-[#00df9a]'>Legel</h6>
                    <ul>
                        <li>Claim</li>
                        <li>Policy</li>
                        <li>Commerce</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
        <p className="text-center mb-5 text-white font-medium">&copy; 2025 All Rights Reserved. Made with ❤️ by Rytchie</p>
    </>
  )
}

export default Footer