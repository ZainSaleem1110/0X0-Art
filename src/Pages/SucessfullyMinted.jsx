import React from 'react'
import { FaFireAlt } from 'react-icons/fa'
import GalleryImg1 from '../assets/gallery1.svg'
import GalleryImg2 from '../assets/gallery2.svg'
import GalleryImg3 from '../assets/gallery3.svg'
import { BsArrowRightShort, BsFillHeartFill, BsUpload } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { ImLoop } from 'react-icons/im'
import { FiBarChart2 } from 'react-icons/fi'
import ProfileImg from '../assets/profile.svg'
import TwitterPost from '../assets/twitterPost.svg'

function SucessfullyMinted() {
    return (
        <div className="xl:w-[1440px] w-full">
            <div className="sm:w-[801px] sm:px-28 px-10 py-20">
                <div className="flex flex-col justify-between">
                    <div className="sm:text-[48px] text-[34px]">
                        Successfully minted!
                        <FaFireAlt className="inline ml-3" />
                    </div>
                    <div className="sm:w-[530px]">
                        <p className="mt-1 text-[23px]">Where you would like to share?</p>
                        <div className="w-[320px] h-[24px] flex items-center justify-between mt-2">
                            <label className="flex items-center text-[16px]">
                                <input type="checkbox" name="insta" className="accent-[#9F00FF] w-[20px] h-[20px]" />
                                <span className="ml-2">Instagram</span>
                            </label>
                            <label className="flex items-center text-[16px]">
                                <input type="checkbox" name="insta" className="accent-[#9F00FF] w-[20px] h-[20px]" />
                                <span className="ml-2">Twitter</span>
                            </label>
                            <label className="flex items-center text-[16px]">
                                <input type="checkbox" name="insta" className="accent-[#9F00FF] w-[20px] h-[20px]" />
                                <span className="ml-2">Discord</span>
                            </label>
                        </div>
                        <div className="mt-4">
                            <p className="mt-1 text-[23px]">Select images</p>
                            <div className="mt-1 flex gap-x-5">
                                <div className="w-[153px] sm:h-[187px] rounded-lg relative">
                                    <img src={GalleryImg1} alt="" />
                                    <input type="checkbox" className="absolute top-2 left-2 rounded-sm border-4 w-[20px] h-[20px] accent-[#9F00FF]" name="" id="" />
                                </div>
                                <div className="w-[153px] sm:h-[100px] rounded-lg relative">
                                    <img src={GalleryImg2} alt="" />
                                    <input type="checkbox" className="absolute top-2 left-2 rounded-sm border-4 w-[20px] h-[20px] accent-[#9F00FF]" name="" id="" />
                                </div>
                                <div className="w-[153px] sm:h-[100px] rounded-lg relative">
                                    <img src={GalleryImg3} alt="" />
                                    <input type="checkbox" className="absolute top-2 left-2 rounded-sm border-4 w-[20px] h-[20px] accent-[#9F00FF]" name="" id="" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="h-[30px] flex gap-x-2">
                                <div className="w-[84px] border-b-2 border-black">
                                    Imstagram
                                </div>
                                <div className="w-[56px] text-[#5B546F]">
                                    Twitter
                                </div>
                                <div className="w-[62px] text-[#5B546F]">
                                    Discord
                                </div>
                            </div>
                            <div className="w-full border border-black rounded-lg mt-3 py-3 px-8 flex flex-col items-center">
                                <div className="h-[44px] w-full flex items-center gap-x-5">
                                    <div className="w-[44px] h-[44px]">
                                        <img src={ProfileImg} alt="" />
                                    </div>
                                    <div>
                                        <h1 className="sm:text-[20px] text-[16px] font-bold">Jane Warren <span className="text-[#687684] ml-2">@nft</span></h1>
                                        <p className="sm:text-[16px] text-[14px]">Check out my new NFT!</p>
                                    </div>
                                </div>
                                <img src={TwitterPost} className="w-[333px] sm:h-[186px] mt-3" alt="" />
                                <div className="h-[15px] sm:w-[333px] mt-4 flex items-center gap-x-6">
                                    <div className="flex items-center text-[#687684]">
                                        <FaRegComment />
                                        <span className="ml-1">53</span>
                                    </div>
                                    <div className="flex items-center text-[#687684]">
                                        <ImLoop />
                                        <span className="ml-1">34</span>
                                    </div>
                                    <div className="flex items-center text-[red]">
                                        <BsFillHeartFill />
                                        <span className="ml-1">1.234</span>
                                    </div>
                                    <div className="flex items-center text-[#687684]">
                                        <BsUpload />
                                    </div>
                                    <div className="flex items-center text-[#687684]">
                                        <FiBarChart2 />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className="h-[44px] w-full text-white rounded-lg bg-[#9F00FF] flex justify-center items-center mt-6">
                                    Share
                                    <BsArrowRightShort />
                                </button>
                                <button className="h-[44px] w-full text-white border-[#9F00FF] rounded-lg border text-[#333333] flex justify-center items-center mt-3">
                                    View your NFT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SucessfullyMinted
