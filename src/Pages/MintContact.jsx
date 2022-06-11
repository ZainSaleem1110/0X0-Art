import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Footer1 from '../assets/footer1.svg'
import Footer2 from '../assets/footer2.svg'
import Footer3 from '../assets/footer3.svg'
import UploadImg from '../assets/uploadImg.svg'
import { useNavigate } from 'react-router-dom'

function MintContact() {
    const navigate = useNavigate()
const handleSucessfullyMintedPage=()=>{
    navigate('/sucessfullyMinted')
}

    return (
        <div className="sm:py-20 pt-5 pb-10 xl:w-[1440px] w-full flex justify-center">
            <div className="xl:w-[85%] w-[90%]">
                <Link to="/drawingTool" className="flex items-center text-[#1C1139]"><BsArrowLeftShort /> Back</Link>
                <p className="sm:text-[64px] text-[40px] mt-4 flex text-[#1C1139]">Mint from contract</p>
                <div className="sm:w-[524px] mt-3">
                    <div className="sm:w-full w-[350px]">
                        <p className="text-[#5B546F]">Select chain</p>
                        <div className="flex justify-between flex-wrap mt-3">
                            <button className="sm:w-[172px] w-[113px] h-[44px] rounded-md bg-[#FFE302] flex justify-center items-center">
                                <img src={Footer1} className="mr-2" alt="" />
                                Ethereum
                            </button>
                            <button className="sm:w-[152px] w-[110px] h-[44px] rounded-md border border-[#FFE302] flex justify-center items-center">
                                <img src={Footer2} className="mr-2" alt="" />
                                Ethereum
                            </button>
                            <button className="sm:w-[152px] w-[110px] h-[44px] rounded-md border border-[#FFE302] flex justify-center items-center">
                                <img src={Footer3} className="mr-2" alt="" />
                                Ethereum
                            </button>
                        </div>
                    </div>
                    <div className="mt-7">
                        <p className="text-[#5B546F]">Select contract</p>
                        <div className="flex flex-col mt-5">
                            <label className="flex items-center">
                                <input type="radio" name="radio" className="accent-[#9F00FF] w-[22px] h-[22px] mr-3" />
                                Your contracts
                            </label>
                            <div className="flex ml-5">
                                <div className="w-[2px] bg-[#FFE302] h-[108px]"></div>
                                <div className="ml-3 pt-6">
                                    <label className="flex items-center sm:text-[16px] text-[14px]">
                                        <input type="radio" name="SabRadio" className="accent-[#9F00FF] w-[22px] h-[22px] mr-3" />
                                        0x1234567890-asdfghjklzxcvbnmwertyuio
                                    </label>
                                    <label className="flex items-center mt-4 sm:text-[16px] text-[14px]">
                                        <input type="radio" name="SabRadio" className="accent-[#9F00FF] w-[22px] h-[22px] mr-3" />
                                        0x1234567890-asdfghjklzxcvbnmwertyuio
                                    </label>
                                    <label className="flex items-center mt-4 sm:text-[16px] text-[14px]">
                                        <input type="radio" name="SabRadio" className="accent-[#9F00FF] w-[22px] h-[22px] mr-3" />
                                        0x1234567890-asdfghjklzxcvbnmwertyuio
                                    </label>
                                </div>
                            </div>
                            <label className="flex items-center mt-3">
                                <input type="radio" name="radio" className="accent-[#9F00FF] w-[22px] h-[22px] mr-3" />
                                Platform contracts
                            </label>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-[23px] text-[#333333]">About artwork</p>
                        <div className="h-[60px] rounded-lg border border-[#E0E0E0] mt-5 flex flex-col justify-center px-4 bg-white">
                            <p className="text-[12px] text-[#5B546F]">Name</p>
                            <input type="text" className="h-[26px] text-[#18224C] focus:outline-none" placeholder="Add name for your artwork" name="" id="" />
                        </div>
                        <div className="h-[120px] rounded-lg border border-[#E0E0E0] mt-5 flex flex-col py-3 px-4 bg-white">
                            <p className="text-[12px] text-[#5B546F]">About artwork</p>
                            <input type="text" className="h-[26px] text-[#18224C] focus:outline-none" placeholder="Describe your artwork" name="" id="" />
                        </div>
                        <div className="h-[60px] rounded-lg border border-[#E0E0E0] mt-5 flex flex-col py-3 px-4 bg-white">
                            <p className="text-[12px] text-[#5B546F]">Tags</p>
                            <input type="text" className="h-[26px] text-[#18224C] focus:outline-none" placeholder="Type in tag and press enter" name="" id="" />
                        </div>
                        <div className="flex gap-x-4 mt-3">
                            <button className="w-[83px] h-[41px] rounded-md border border-[#E0E0E0] flex justify-center items-center">
                                Art
                                <img src={Footer3} className="ml-2" alt="" />
                            </button>
                            <button className="w-[151px] h-[41px] rounded-md border border-[#E0E0E0] flex justify-center items-center">
                                Photography
                                <img src={Footer3} className="ml-2" alt="" />
                            </button>
                        </div>
                        <div className="h-[60px] rounded-lg border border-[#E0E0E0] mt-5 flex flex-col justify-center px-4 bg-white">
                            <p className="text-[12px] text-[#5B546F]">Category</p>
                            <select
                                name="categories"
                                className="w-[100%] h-[26px] text-[#18224C] rounded-lg  focus:outline-none cursor-pointer"
                            >
                                <option
                                    disabled
                                    selected
                                    label="Select"
                                    className=" border border-teal-700"
                                >
                                    Select
                                </option>
                                <option value="" className="option">
                                    Painting
                                </option>
                                <option value="" className="option">
                                    NFT
                                </option>
                            </select>
                        </div>
                        <div className="h-[60px] rounded-lg border border-[#E0E0E0] mt-5 flex flex-col py-3 px-4 bg-white">
                            <p className="text-[12px] text-[#5B546F]">Website link (optional)</p>
                            <input type="text" className="h-[26px] text-[#18224C] focus:outline-none" placeholder="Add link" name="" id="" />
                        </div>
                        <div className="mt-6">
                            <p className="text-[23px] text-[#333333]">Upload base image</p>
                            <div className="h-[130px] rounded-lg border-dashed border-2 border-[#E0E0E0] mt-4 flex flex-col justify-center items-center bg-white">
                                <div className="flex gap-x-4 items-center">
                                    <p>Drag files here or</p>
                                    <button className="w-[98px] h-[44px] rounded-md bg-[#FFE302] flex justify-center items-center">Browse</button>
                                </div>
                                <p className="text-[12px] text-[#18224C] mt-3">Supported formats: JPG, JPEG, PDF, CSV, GIF</p>
                                <p className="text-[12px] text-[#18224C] mt-2">Max file size: 100 MB</p>
                            </div>
                            <div className="h-[50px] flex justify-between items center mt-2 ">
                                <div className="flex items-center">
                                    <img src={UploadImg} alt="" />
                                    <p className="text-[#18224C] ml-2">Project_name.png</p>
                                </div>
                                <button className="bg-transparent border-none focus:outline-none text-[#9F00FF] flex items-center text-[18px]">
                                    X <span className="text-[14px] ml-2">Remove</span>
                                </button>
                            </div>
                            <button className="h-[44px] w-full text-white rounded-lg bg-[#9F00FF] flex justify-center items-center mt-6" onClick={handleSucessfullyMintedPage}>
                                Mint
                                <BsArrowRightShort />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintContact
