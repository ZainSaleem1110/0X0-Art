import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import OpenseaImg1 from '../assets/opensea1.svg'
import OpenseaImg2 from '../assets/opensea2.svg'
import OpenseaImg3 from '../assets/opensea3.svg'
import OpenseaImg4 from '../assets/opensea4.svg'
import Icon1 from '../assets/footer1.svg'
import Graph from '../Components/Graph'
import Icon2 from '../assets/footer2.svg'
import Icon3 from '../assets/footer3.svg'

function PoolData() {
    return (
        <div className="py-5 max-w-[1440px] flex justify-center">
            <div className="xl:w-[85%] w-[80%]">
                <p className="sm:text-[64px] text-[40px] w-full flex text-[#1C1139]">Pool Data</p>
                <div className="">
                    <div>
                        <h1 className='text-[32px]'>Statistic</h1>
                        <div className='w-[193px] h-[34px] flex rounded-lg border items-center my-8 pr-2'>
                            <button className='text-[#5B546F] bg-[#FFE302] rounded-l-lg px-1 h-full'>1 year</button>
                            <button className='text-[#5B546F] border-l-2 h-[22px] px-1'>1 month</button>
                            <button className='text-[#5B546F] pl-1 h-[22px] border-l-2'>1 week</button>
                        </div>
                        <Graph />
                    </div>
                    <div className='w-[100%] overflow-x-hidden z-20 lg:flex flex-col hidden mt-7'>
                        <h1 className='text-[32px]'>Balances</h1>
                        <div className='w-full overflow-x-auto rounded-lg border border-black bg-white'>
                            <div className="grid grid-cols-5 justify-items-center items-center px-3 w-full h-[44px] border-b border-[black] font-semibold md:text-[16px] text-[12px]">
                                <p>Currency</p>
                                <p>Total received</p>
                                <p>Total released</p>
                                <p>Balance</p>
                                <p>Balance USD</p>
                            </div>
                            <div className="grid grid-cols-5 justify-items-center items-center px-3 w-full h-[88px] border-b border-[black] font-semibold md:text-[16px] text-[12px]">
                                <p className="flex items-center">
                                    <span className='lg:mr-5 mr-2'>
                                        <img src={Icon1} alt="" />
                                    </span>
                                    ETH
                                </p>
                                <p>109.97 ETH</p>
                                <p>57.54 ETH</p>
                                <p>57.54 ETH</p>
                                <p>$1234.23</p>
                            </div>
                            <div className="grid grid-cols-5 justify-items-center items-center px-3 w-full h-[88px] border-b border-[black] font-semibold md:text-[16px] text-[12px]">
                                <p className="flex items-center">
                                    <span className='lg:mr-5 mr-2'>
                                        <img src={Icon2} alt="" />
                                    </span>
                                    WETH
                                </p>
                                <p>17.89 WETH</p>
                                <p>9.12 WETH</p>
                                <p>7.12 WETH</p>
                                <p>$1234.23</p>
                            </div>
                            <div className="grid grid-cols-5 justify-items-center items-center px-3 w-full h-[88px] border-b border-[black] font-semibold md:text-[16px] text-[12px]">
                                <p className="flex items-center">
                                    <span className='lg:mr-5 mr-2'>
                                        <img src={Icon3} alt="" />
                                    </span>
                                    OXO token
                                </p>
                                <p>1000098818.90 OXO</p>
                                <p>7817287182.17 OXO</p>
                                <p>121219.87 OXO</p>
                                <p>$1234.23</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4 w-full lg:flex-row flex-col gap-x-8 items-center ">
                        <div className=" w-full rounded-lg border border-[black] mt-9">
                            <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                                <p className="">Name</p>
                                <p>The 0x0.Art Platform</p>
                            </div>
                            <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                                <p className="">Symbol</p>
                                <p>OAN</p>
                            </div>
                            <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                                <p className="">Total Supply</p>
                                <p>10 000</p>
                            </div>
                            <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                                <p className="">Minted</p>
                                <p>21</p>
                            </div>
                            <div className="flex justify-between items-center px-3 w-full h-[44px] border-b border-[black] font-semibold">
                                <p className="">Owner</p>
                                <p>15</p>
                            </div>
                            <div className="flex justify-between items-center px-3 w-full h-[44px]  font-semibold text-[#9F00FF]">
                                <p>0x07344940F840....41A5C3c61A</p>
                                <div className="flex items-center">
                                    <p>Opensea</p>
                                    <BsArrowRightShort />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center xl:w-[379px] w-full lg:mt-0 mt-4">
                            <div className="h-[60px] xl:w-[379px] w-full border border-[black] bg-white rounded-lg flex flex-col justify-center px-5">
                                <p className="text-[#5B546F] text-[12px]">Token ID, Owner address</p>
                                <p className="md:text-[14px] text-[12px] text-[#18224C]">0x8BF0AA44B7ABFC54F7e87fC9294695c4D7a5EFca</p>
                            </div>
                            <button className="h-[44px] xl:w-[379px] w-full text-white rounded-lg bg-[#9F00FF] flex justify-center items-center mt-3">
                                Find
                                <BsArrowRightShort />
                            </button>
                        </div>
                    </div>
                    <div className="mt-12">
                        <p className="text-[32px] text-[#1C1139]">How 0x0.Art NFT works?</p>
                        <p className="mt-8">Sed eu quam nec eros cursus rhoncus ut a sapien. Nunc condimentum nulla tempor, auctor nibh non, sagittis purus. In hac habitasse platea dictumst. Mauris in erat nibh. Fusce lacus nulla, dignissim vel aliquam lacinia, imperdiet in leo. Etiam varius massa nulla, vitae sagittis neque molestie eget. Donec ultricies ante leo, at condimentum nunc egestas et. Curabitur viverra eu diam aliquet pulvinar. Morbi vitae sollicitudin velit. Donec ac ultricies est, et dignissim lacus. Suspendisse mollis, leo in consectetur mattis, lacus enim convallis tellus, quis dignissim ligula diam vitae elit. Nulla facilisi. Vivamus in vestibulum quam.</p>
                        <p>Sed eu quam nec eros cursus rhoncus ut a sapien. Nunc condimentum nulla tempor, auctor nibh non, sagittis purus. In hac habitasse platea dictumst. Mauris in erat nibh. Fusce lacus nulla, dignissim vel aliquam lacinia, imperdiet in leo. Etiam varius massa nulla, vitae sagittis neque molestie eget. Donec ultricies ante leo, at condimentum nunc egestas et. Curabitur viverra eu diam aliquet pulvinar. Morbi vitae sollicitudin velit. Donec ac ultricies est, et dignissim lacus. Suspendisse mollis, leo in consectetur mattis, lacus enim convallis tellus, quis dignissim ligula diam vitae elit. Nulla facilisi. Vivamus in vestibulum quam.</p>
                    </div>
                    <div className=" w-[100%] mt-8">
                        <div className="flex sm:flex-row flex-col items-center justify-between">
                            <p className="text-[23px]">Some 0x0.art NFT</p>
                            <button className="w-[224px] h-[44px] border border-[#9F00FF] flex items-center justify-center rounded-lg sm:mt-0 mt-5 bg-white">
                                View  more on Opensea
                                <BsArrowRightShort />
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-y-5 sm:justify-between justify-center mt-5 mb-10">
                            <div className="w-[246px] h-[338px] rounded-lg border border-[black] bg-white">
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
                            <div className="w-[246px] h-[338px] rounded-lg border border-[black] bg-white">
                                <img src={OpenseaImg2} className="w-[244px] h-[246px]" alt="" />
                                <div className="px-2 py-3">
                                    <p className="text-[#333333]">0X0.ART NFT #113</p>
                                    <p className="text-[12px] text-[#828282] flex">
                                        <img src={Icon1} className="mr-2" alt="" />
                                        0.025 WETH
                                    </p>
                                </div>
                            </div>
                            <div className="w-[246px] h-[338px] rounded-lg border border-[black] bg-white">
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
                            <div className="w-[246px] h-[338px] rounded-lg border border-[black] bg-white">
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
        </div>
    )
}

export default PoolData
