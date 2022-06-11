import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { BsWallet2 } from 'react-icons/bs'
import { useNavigate, Link } from 'react-router-dom'
import MetaMaskImg1 from '../assets/metamask1.svg'
import MetaMaskImg2 from '../assets/metamask2.svg'
import MetaMaskImg3 from '../assets/metamask3.svg'

function Navbar() {
    const navigate = useNavigate()
    const [wallet, setWallet] = useState(false)
    const handleDrawingPage = () => {
        navigate('/drawingTool')
    }
    const handleMenu = () => {
        setWallet(true)
    }
    const handleSidebar = () => {
        var connectMeta = document.querySelector('.connectMeta').style
        connectMeta.transition = "1s"
        connectMeta.width = "100%"
    }
    const handleSidebarClose = () => {
        var connectMeta = document.querySelector('.connectMeta').style
        connectMeta.transition = "1s"
        connectMeta.width = "0%"
    }
    const handleCloseMenu = () => {
        setWallet(false)
    }
    return (
        <>
            <div className="xl:w-[1440px] w-full h-[81px] flex justify-center">
                <div className="flex justify-between items-center border-b border-[#F2F2F2] h-[81px] xl:w-[75%] sm:w-[75%] w-[90%]">
                    <Link to="/">
                        <img src={Logo} alt="" onClick={handleCloseMenu} />
                    </Link>
                    <div className="flex items-center gap-x-3">
                        <button className="sm:w-[149px] w-[34px] sm:bg-white sm:h-[44px] h-[34px] rounded-md border border-[#9F00FF]  bg-[#9F00FF] flex justify-center items-center" onClick={handleSidebar}>
                            <span className="sm:flex hidden">Connect Wallet</span>
                            <BsWallet2 className="flex sm:hidden text-white" />
                        </button>
                        <button className="sm:w-[102px] w-[72px] sm:h-[44px] h-[34px] rounded-md bg-[#9F00FF] flex justify-center items-center text-white" onClick={handleDrawingPage}>
                            <span className="sm:flex hidden">List NFT</span>
                            <span className="flex sm:hidden">List</span>
                        </button>
                        <button className="w-[44px] h-[44px] flex justify-center items-center" onClick={handleMenu}>
                            <FaBars />
                        </button>
                    </div>
                </div>
            </div>
            {wallet == true && (
                <div className="w-full absolute top-0 left-0 h-[100vh] bg-white z-50 flex flex-col items-center">
                    <div className="xl:w-[1440px] w-full h-[81px] w-full flex justify-center">
                        <div className="flex justify-between items-center border-b border-[#F2F2F2] h-[81px] xl:w-[85%] sm:w-[75%] w-[90%]">
                            <Link to="/">
                                <img src={Logo} alt="" onClick={handleCloseMenu} />
                            </Link>
                            <div className="flex items-center gap-x-3">
                                <button className="sm:w-[149px] w-[34px] sm:bg-white sm:h-[44px] h-[34px] rounded-md border border-[#9F00FF]  bg-[#9F00FF] flex justify-center items-center" onClick={handleSidebar}>
                                    <span className="sm:flex hidden">Connect Wallet</span>
                                    <BsWallet2 className="flex sm:hidden text-white" />
                                </button>
                                <button className="w-[44px] h-[44px] flex justify-center items-center" onClick={handleCloseMenu}>
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-4 w-[100%]'>
                        <div className="flex flex-col w-[45%]">
                            <a href="#" className='text-[32px] text-[#9F00FF]'>Marketplace</a>
                            <a href="#" className='text-[32px]'>My account</a>
                            <a href="#" className='text-[32px]'>Favourites</a>
                            <a href="#" className='text-[32px]'>AI drawing tools</a>
                            <a href="#" className='text-[32px]'>NFT printing services</a>
                            <a href="#" className='text-[32px]'>About us</a>
                            <a href="#" className='text-[32px]'>Blog</a>
                            <button className="w-[300px] sm:bg-white sm:h-[44px] h-[34px] rounded-md border border-[#9F00FF]  bg-[#9F00FF] justify-center items-center mt-4 md:hidden flex" onClick={handleSidebar}>
                                <span className="sm:flex hidden">Connect Wallet</span>
                                <BsWallet2 className="flex sm:hidden text-white" />
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center lg:w-[30%] sm:w-[50%] w-[80%]'>
                        <div className='mt-8 flex justify-between w-full'>
                            <a href="">Twitter</a>
                            <a href="">Discord</a>
                            <a href="">Instagram</a>
                        </div>
                    </div>
                </div>
            )}
            <div className="w-0 overflow-x-hidden connectMeta absolute top-0 right-0 h-[100vh] 2xl:bg-[transparent] sm:bg-[#1c11394d] bg-[transparent] z-50 flex">
                <div className='2xl:w-[70%] md:w-[60%] sm:w-[30%] w-[0%] h-full' onClick={handleSidebarClose}></div>
                <div className='h-full bg-white xl:w-[643px] w-full 2xl:border-2 border-t-2 px-7 sm:pt-12  pt-5 overflow-x-hidden'>
                    <div className='sm:w-[643px] w-full'>
                        <button className='flex justify-end w-[100%] sm:pr-28 text-[black]' onClick={handleSidebarClose}>X</button>
                        <p className='text-[#1C1139]'>Connect  your wallet</p>
                        <p className='text-[#828282] mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[#828282] mt-3'>Fermentum, blandit nulla cursus aliquet feugiat.</p>
                        <button className='sm:w-[432px] w-[95%] h-[64px] border border-[#FFE302] rounded-lg mt-3 flex items-center px-3'>
                            <img src={MetaMaskImg1} alt="" />
                            <span className='ml-3'>Metamask</span>
                        </button>
                        <button className='sm:w-[432px] w-[95%] h-[64px] border border-[#FFE302] rounded-lg mt-3 flex items-center px-3 mt-2'>
                            <img src={MetaMaskImg2} alt="" />
                            <span className='ml-3'>WalletConnect</span>
                        </button>
                        <button className='sm:w-[432px] w-[95%] h-[64px] border border-[#FFE302] rounded-lg mt-3 flex items-center px-3 mt-2'>
                            <img src={MetaMaskImg3} alt="" />
                            <span className='ml-3'>Trustwallet</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
