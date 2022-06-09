import React from 'react'
import NFT from '../assets/NFTmain.svg'
import { BsArrowRightShort } from 'react-icons/bs'
import OpenseaImg1 from '../assets/opensea1.svg'
import OpenseaImg2 from '../assets/opensea2.svg'
import OpenseaImg3 from '../assets/opensea3.svg'
import OpenseaImg4 from '../assets/opensea4.svg'
import Dollar from '../assets/dollar.svg'
import Icon1 from '../assets/footer1.svg'

function NFTData() {
    return (
        <div className="py-5 max-w-[1440px] xl:px-0 px-5">
            <div className="xl:w-[100%] w-[90%]">
                <p className="sm:text-[64px] text-[40px] w-full flex text-[#1C1139]">NFT <span className="text-[18px] text-[#5B546F] sm:mt-6 mt-2">Beta</span> Data</p>
                <div className="flex mt-4 xl:w-[1250px] w-full md:flex-row flex-col md:justify-between md:items-start items-center ">
                    <div className="sm:w-[536px] w-full rounded-lg border border-[black] mt-9">
                        <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                            <p className="">Name</p>
                            <p>The 0x0.Art Platform</p>
                        </div>
                        <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                            <p className="">Symbol</p>
                            <p>OAN</p>
                        </div>
                        <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                            <p className="">Token id</p>
                            <p>267</p>
                        </div>
                        <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                            <p className="">Token balance ETH</p>
                            <p>0.5</p>
                        </div>
                        <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                            <p className="">Token balance USDT</p>
                            <p>1590.97</p>
                        </div>
                        <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                            <p className="">New AI minted</p>
                            <p>yes</p>
                        </div>
                        <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                            <p className="">Printed artwork claimed</p>
                            <p>not yet</p>
                        </div>
                        <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                            <p className="">Total released ETH</p>
                            <p>8.97</p>
                        </div>
                        <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                            <p className="">Owner</p>
                            <p className="text-[#9F00FF]">0xe98........17cEA</p>
                        </div>
                        <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                            <p className="">Floor price ETH</p>
                            <p>0.34</p>
                        </div>
                        <div className="flex justify-between items-center px-3 w-full h-[44px]  font-semibold text-[#9F00FF]">
                            <p>0x07344940F840....41A5C3c61A</p>
                            <div className="flex items-center">
                                <p>Opensea</p>
                                <BsArrowRightShort />
                            </div>
                        </div>
                    </div>
                    <img src={NFT} className="lg:w-[580px] lg:h-[580px] md:w-[400px] md:h-[400px] lg:w-[580px] lg:h-[580px] p-0" alt="" />
                </div>
                <div className="w-full flex flex-col md:items-start items-center mt-4 sm:px-0 px-5">
                    <button className="h-[44px] sm:w-[536px] w-full text-white rounded-lg bg-[#333333] flex justify-center items-center">
                        Withdraw balances
                        <img src={Dollar} className="ml-2" alt="" />
                    </button>
                    <button className="h-[44px] sm:w-[536px] w-full text-white rounded-lg bg-[#9F00FF] flex justify-center items-center mt-8">
                        Mint new AI NFT
                    </button>
                    <button className="h-[44px] sm:w-[536px] w-full text-white rounded-lg bg-[#9F00FF] flex justify-center items-center mt-3">
                        Claim printed artwork
                    </button>
                </div>
                <div className="max-w-[1080px] mt-12 lg:pl-0 md:pl-20 lg:pr-20 pr-5">
                    <p className="text-[32px] text-[#1C1139]">How 0x0.Art NFT works?</p>
                    <p className="mt-8">Sed eu quam nec eros cursus rhoncus ut a sapien. Nunc condimentum nulla tempor, auctor nibh non, sagittis purus. In hac habitasse platea dictumst. Mauris in erat nibh. Fusce lacus nulla, dignissim vel aliquam lacinia, imperdiet in leo. Etiam varius massa nulla, vitae sagittis neque molestie eget. Donec ultricies ante leo, at condimentum nunc egestas et. Curabitur viverra eu diam aliquet pulvinar. Morbi vitae sollicitudin velit. Donec ac ultricies est, et dignissim lacus. Suspendisse mollis, leo in consectetur mattis, lacus enim convallis tellus, quis dignissim ligula diam vitae elit. Nulla facilisi. Vivamus in vestibulum quam.</p>
                    <p>Sed eu quam nec eros cursus rhoncus ut a sapien. Nunc condimentum nulla tempor, auctor nibh non, sagittis purus. In hac habitasse platea dictumst. Mauris in erat nibh. Fusce lacus nulla, dignissim vel aliquam lacinia, imperdiet in leo. Etiam varius massa nulla, vitae sagittis neque molestie eget. Donec ultricies ante leo, at condimentum nunc egestas et. Curabitur viverra eu diam aliquet pulvinar. Morbi vitae sollicitudin velit. Donec ac ultricies est, et dignissim lacus. Suspendisse mollis, leo in consectetur mattis, lacus enim convallis tellus, quis dignissim ligula diam vitae elit. Nulla facilisi. Vivamus in vestibulum quam.</p>
                </div>
                <div className=" w-[100%] mt-8 sm:px-12">
                    <div className="flex sm:flex-row flex-col items-center justify-between">
                        <p className="text-[23px]">Some 0x0.art NFT</p>
                        <button className="w-[224px] h-[44px] border border-[#9F00FF] flex items-center justify-center rounded-lg sm:mt-0 mt-5 bg-white">
                            View  more on Opensea
                            <BsArrowRightShort />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-y-5 md:justify-between justify-center mt-5 mb-10">
                        <div className="w-[246px] h-[338px] rounded-lg border border-[black]
                        bg-white">
                            <img src={OpenseaImg1} className="w-[244px] h-[246px]" alt="" />
                            <div className="px-2 py-3">
                                <p className="text-[#333333]">0X0.ART NFT #113</p>
                                <p className="text-[12px] text-[#828282] flex">
                                    <img src={Icon1} className="mr-2" alt="" />
                                    0.025 WETH
                                </p>
                                <p className="text-[12px] text-[#828282] mt-1">Artist: <span className="text-[#333333] mt-1">Xavier Iturralde</span></p>
                            </div>
                        </div>
                        <div className="w-[246px] h-[338px] rounded-lg border border-[black]
                        bg-white">
                            <img src={OpenseaImg2} className="w-[244px] h-[246px]" alt="" />
                            <div className="px-2 py-3">
                                <p className="text-[#333333]">0X0.ART NFT #113</p>
                                <p className="text-[12px] text-[#828282] flex">
                                    <img src={Icon1} className="mr-2" alt="" />
                                    0.025 WETH
                                </p>
                            </div>
                        </div>
                        <div className="w-[246px] h-[338px] rounded-lg border border-[black]
                        bg-white">
                            <img src={OpenseaImg3} className="w-[244px] h-[246px]" alt="" />
                            <div className="px-2 py-3">
                                <p className="text-[#333333]">0X0.ART NFT #113</p>
                                <p className="text-[12px] text-[#828282] flex">
                                    <img src={Icon1} className="mr-2" alt="" />
                                    0.025 WETH
                                </p>
                                <p className="text-[12px] text-[#828282] mt-1">Artist: <span className="text-[#333333] mt-1">Xavier Iturralde</span></p>
                            </div>
                        </div>
                        <div className="w-[246px] h-[338px] rounded-lg border border-[black]
                        bg-white">
                            <img src={OpenseaImg4} className="w-[244px] h-[246px]" alt="" />
                            <div className="px-2 py-3">
                                <p className="text-[#333333]">0X0.ART NFT #113</p>
                                <p className="text-[12px] text-[#828282] flex">
                                    <img src={Icon1} className="mr-2" alt="" />
                                    0.025 WETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTData
