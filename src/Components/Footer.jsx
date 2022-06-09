import React from 'react'
import { Link } from 'react-router-dom'
import Footer1 from '../assets/footer1.svg'
import Footer2 from '../assets/footer2.svg'
import Footer3 from '../assets/footer3.svg'

const FooterMenu = ["Marketing", "My account", "AI drawing tools", "NFT printing services", "About us", "Blog", "F.A.Q."]

const FooterSocial = ["Twitter", "Discord", "Instagram"]

const FooterLegal = ["Terms & Conditions", "Privacy Policy"]

const FooterPayment = [Footer1, Footer2, Footer3]

function Footer() {
    return (
        <div className="w-full flex justify-center">
        <div className="w-full xl:w-[1440px] py-7 xl:pl-0 md:pl-28 pl-12 flex">
            <div className="xl:w-[100%] md:w-[973px] w-[100%] grid md:grid-cols-4 grid-cols-2 md:gap-y-0 gap-y-10 xl:justify-items-center">
                <div className="md:w-[150px]">
                    <p className="text-[12px]">Menu</p>
                    <ul className="text-[16px] font-semibold h-[230px] flex flex-col justify-between mt-4">
                        {
                            FooterMenu && FooterMenu.map((menu, id) => {
                                return <li key={id}>
                                    <Link to="">
                                        {menu}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="md:w-[150px]">
                    <p className="text-[12px]">Social</p>
                    <ul className="text-[16px] font-semibold h-[85px] flex flex-col justify-between mt-4">
                        {
                            FooterSocial && FooterSocial.map((social, id) => {
                                return <li key={id}>
                                    <Link to="">
                                        {social}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="md:w-[150px]">
                    <p className="text-[12px]">Legal</p>
                    <ul className="text-[16px] font-semibold h-[55px] flex flex-col justify-between mt-4">
                        {
                            FooterLegal && FooterLegal.map((Legal, id) => {
                                return <li key={id}>
                                    <Link to="">
                                        {Legal}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="md:w-[150px] h-[180px] flex flex-col justify-between">
                    <div>
                        <p className="text-[12px]">Payment types</p>
                        <div className="text-[16px] w-[130px] font-semibold h-[40px] flex justify-between mt-4">
                            {
                                FooterPayment && FooterPayment.map((payment, id) => {
                                    return <Link to="" className="w-[40px] h-[40px] rounded-md border border-[#828282] flex justify-center items-center" key={id}>
                                        <img src={payment} alt="" />
                                    </Link>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer
