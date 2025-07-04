import React from 'react'
import Banner from '../../componant/Banners/Banner/Banner'
import Policy from '../../componant/Policy/Policy'
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

function Contact() {
    return (
        <div>
            <Banner title='contact' />
            <div className="max-w-6xl mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-2">Get In Touch With Us</h2>
                <p className="text-center text-KettlemanGrey-200 mb-12">
                    For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left Info */}
                    <div className="flex-1 flex flex-col gap-8">
                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-2xl text-[#B88E2F]" />
                            <div>
                                <div className="font-bold text-lg">Address</div>
                                <div className="text-KettlemanGrey-200 text-sm">
                                    236 5th SE Avenue, New York NY10000, United States
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaPhoneAlt className="text-2xl text-[#B88E2F]" />
                            <div>
                                <div className="font-bold text-lg">Phone</div>
                                <div className="text-KettlemanGrey-200 text-sm">
                                    Mobile: + (84) 546-6789 <br />
                                    Hotline: + (84) 456-6789
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaClock className="text-2xl text-[#B88E2F]" />
                            <div>
                                <div className="font-bold text-lg">Working Time</div>
                                <div className="text-KettlemanGrey-200 text-sm">
                                    Monday-Friday: 9:00 - 22:00 <br />
                                    Saturday-Sunday: 9:00 - 21:00
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Form */}
                    <form className="flex-1 flex flex-col gap-6">
                        <div>
                            <label className="block mb-1 font-medium">Your name</label>
                            <input
                                type="text"
                                placeholder="Abc"
                                className="w-full border border-KettlemanGrey-100 rounded px-4 py-2 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Email address</label>
                            <input
                                type="email"
                                placeholder="Abc@def.com"
                                className="w-full border border-KettlemanGrey-100 rounded px-4 py-2 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Subject</label>
                            <input
                                type="text"
                                placeholder="This is an optional"
                                className="w-full border border-KettlemanGrey-100 rounded px-4 py-2 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Message</label>
                            <textarea
                                placeholder="Hi! I'd like to ask about"
                                className="w-full border border-KettlemanGrey-100 rounded px-4 py-2 focus:outline-none min-h-[80px]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-40 mt-2 mx-auto bg-[#B88E2F] text-white py-2 rounded hover:bg-[#a07a23] transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Policy/>
        </div>
    )
}

export default Contact
