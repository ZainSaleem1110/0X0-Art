import React from 'react'
import { Routes, Route } from 'react-router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Landing from './Pages/Landing'
import BgMain from './assets/bg-main.svg'
import DrawingTool from './Pages/DrawingTool'
import MintContact from './Pages/MintContact'
import SucessfullyMinted from './Pages/SucessfullyMinted'
import NFTData from './Pages/NFTData'
import PoolData from './Pages/PoolData'

function App() {
    return (
        <div className="h-[100vh] overflow-hidden relative">
        <div className="w-full h-[100vh] flex flex-col justify-between xl:items-center items-start overflow-y-auto overflow-x-hidden">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/drawingTool" element={<DrawingTool />} />
                    <Route path="/mintContact" element={<MintContact />} />
                    <Route path="/sucessfullyMinted" element={<SucessfullyMinted />} />
                    <Route path="/nftData" element={<NFTData />} />
                    <Route path="/poolData" element={<PoolData />} />
                </Routes>
                <Footer />
            <div className="absolute top-0 right-0 -z-10 lg:flex hidden h-[100vh]">
                <img src={BgMain} className="" alt="" />
            </div>
        </div>
        </div>
    )
}

export default App
