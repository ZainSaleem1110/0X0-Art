import React from 'react'
import { FaFireAlt } from 'react-icons/fa'

function Landing() {
    return (
        <div className="xl:w-[1440px] 2xl:h-[80vh] xl:h-[65vh] w-full">
            <div className="sm:w-[801px] sm:px-28 px-10 py-20">
                <div className="flex flex-col justify-between">
                    <div className="sm:text-[48px] text-[34px]">
                        Connect your wallet <br /> before creating
                        <FaFireAlt className="inline ml-3" />
                    </div>
                    <button className="w-[149px] h-[44px] rounded-md bg-[#9F00FF] text-white flex justify-center items-center sm:mt-0 mt-8">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landing
