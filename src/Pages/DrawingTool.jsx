import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Drawing1 from '../assets/drawing1.svg'
import Drawing2 from '../assets/drawing2.svg'
import Drawing3 from '../assets/drawing3.svg'
import Drawing4 from '../assets/drawing4.svg'
import Drawing5 from '../assets/drawing5.svg'
import Drawing6 from '../assets/drawing6.svg'

function DrawingTool() {
    return (
        <div className="py-20 max-w-[1440px] flex justify-center">
            <div className="xl:w-[85%] w-[90%]">
                <Link to="/" className="flex items-center text-[#1C1139]"><BsArrowLeftShort /> Back</Link>
                <p className="sm:text-[64px] text-[40px] mt-4 flex text-[#1C1139]">AI Drawing Tool<span className="text-[18px] text-[#5B546F] sm:mt-6 mt-2">Beta</span></p>
                <div className="flex md:flex-row flex-col justify-between mt-8">
                    <div className="xl:w-[45%] md:w-[55%] w-[100%] xl:h-[800px] md:h-[700px] sm:h-[500px] h-[530px] grid md:grid-cols-2 sm:grid-cols-3 grid-cols-2 py-8 sm:justify-items-start justify-items-center">
                        <div className="xl:w-[204px] sm:w-[190px] w-[140px] xl:h-[204px] sm:h-[190px] h-[140px]">
                            <img src={Drawing1} className="rounded-lg" alt="" />
                        </div>
                        <div className="xl:w-[204px] sm:w-[190px] w-[140px] xl:h-[204px] sm:h-[190px] h-[140px]">
                            <img src={Drawing2} className="rounded-lg" alt="" />
                        </div>
                        <div className="xl:w-[204px] sm:w-[190px] w-[140px] xl:h-[204px] sm:h-[190px] h-[140px]">
                            <img src={Drawing3} className="rounded-lg border border-[#FFE302]" alt="" />
                        </div>
                        <div className="xl:w-[204px] sm:w-[190px] w-[140px] xl:h-[204px] sm:h-[190px] h-[140px] relative">
                            <img src={Drawing4} className="rounded-lg" alt="" />
                            <div className="w-[30px] h-[30px] bg-[#FFE302] absolute bottom-5 right-5 rounded-md flex justify-center items-center"><AiOutlineCheck /></div>
                        </div>
                        <div className="xl:w-[204px] sm:w-[190px] w-[140px] xl:h-[204px] sm:h-[190px] h-[140px]">
                            <img src={Drawing5} className="rounded-lg" alt="" />
                        </div>
                        <div className="xl:w-[204px] sm:w-[190px] w-[140px] xl:h-[204px] sm:h-[190px] h-[140px]">
                            <img src={Drawing6} className="rounded-lg" alt="" />
                        </div>
                    </div>
                    <div className="xl:w-[55%] md:w-[45%] w-[100%] min-h-[800px] px-8">
                        <p className="text-[23px] text-[#333333]">ART details</p>
                        <div className="h-[60px] rounded-lg border border-[#E0E0E0] mt-5 flex flex-col justify-center px-4 bg-white">
                            <p className="text-[12px] text-[#5B546F]">Text prompt</p>
                            <input type="text" className="h-[26px] text-[#18224C] focus:outline-none" value="Sunset at sea with a purple sky" name="" id="" />
                        </div>
                        <div className="h-[60px] rounded-lg border border-[#E0E0E0] mt-5 flex flex-col justify-center px-4 bg-white">
                            <p className="text-[12px] text-[#5B546F]">Art type</p>
                            <select
                                name="categories"
                                className="w-[100%] h-[26px] text-[#18224C] rounded-lg  focus:outline-none cursor-pointer"
                            >
                                <option
                                    disabled
                                    selected
                                    label="Select Category"
                                    className=" border border-teal-700"
                                >
                                    Select Category
                                </option>
                                <option value="" className="option">
                                    Painting
                                </option>
                                <option value="" className="option">
                                    NFT
                                </option>
                            </select>
                        </div>
                        <div className="h-[60px] rounded-lg border border-[#E0E0E0] mt-5 flex flex-col justify-center px-4 bg-white">
                            <p className="text-[12px] text-[#5B546F]">Aspect ratio</p>
                            <select
                                name="categories"
                                className="w-[100%] h-[26px] text-[#18224C] rounded-lg  focus:outline-none cursor-pointer"
                            >
                                <option
                                    disabled
                                    selected
                                    label="Select Category"
                                    className=" border border-teal-700"
                                >
                                    Select Category
                                </option>
                                <option value="" className="option">
                                    Square
                                </option>
                                <option value="" className="option">
                                    Circle
                                </option>
                            </select>
                        </div>
                        <div className="rounded-lg mt-5 flex flex-col justify-center">
                            <p className="text-[12px] text-[#5B546F] px-4">Art Style</p>
                            <div className="w-[100%] flex flex-wrap gap-4 mt-3">
                                <button className="w-[120px] h-[44px] rounded-md border border-[#FFE302] flex justify-center items-center bg-white">Abstract</button>
                                <button className="w-[105px] h-[44px] rounded-md border border-[#FFE302] flex justify-center items-center bg-white">Figuratie</button>
                                <button className="sm:w-[135px] w-[120px] h-[44px] rounded-md bg-[#FFE302] flex justify-center items-center">Geometric <AiOutlineCheck className="ml-2" /></button>
                                <button className="sm:w-[116px] w-[105px] h-[44px] rounded-md border border-[#FFE302] flex justify-center items-center bg-white">Minimalist</button>
                                <button className="w-[120px] h-[44px] rounded-md border border-[#FFE302] flex justify-center items-center bg-white">Nature</button>
                                <button className="w-[105px] h-[44px] rounded-md border border-[#FFE302] flex justify-center items-center bg-white">Pop</button>
                                <button className="sm:w-[135px] w-[120px] h-[44px] rounded-md bg-[#FFE302] flex justify-center items-center">Surrealist</button>
                                <button className="sm:w-[116px] w-[105px] h-[44px] rounded-md border border-[#FFE302] flex justify-center items-center bg-white">Urban</button>
                            </div>
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
                            <button className="h-[44px] w-full text-white rounded-lg bg-[#9F00FF] flex justify-center items-center mt-6">
                                Print ART
                                <BsArrowRightShort />
                            </button>
                            <button className="h-[44px] w-full text-white rounded-lg bg-[#333333] flex justify-center items-center mt-3">
                                Convert to NFT
                                <BsArrowRightShort />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrawingTool
