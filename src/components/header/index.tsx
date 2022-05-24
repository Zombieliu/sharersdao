import { Popover, Transition } from "@headlessui/react"
import Link from "next/link"
import React, {Fragment} from "react"

const Header = () => {

    return (
        <>
            <Popover className="relative bg-white  ">
                <div className="flex  fixed z-20 inset-x-0 bg-black bg-opacity-80   transition duration-700 mb-10 pl-5  justify-between items-center  p-3 sm:px-6 lg:justify-end md:space-x-10 lg:px-10 xl:px-24 ">
                    <div className=" flex w-full justify-between lg:justify-start">
                        <div className="flex justify-start  ">
                            <Link href="/home">
                                <a>
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="w-auto h-8"
                                        src="/LOGO.png"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className=" my-0.5 lg:flex   md:flex-1 ">
                        <div>
                            <button className="bg-blue-600 transition duration-700  w-36 px-4 py-2 text-white rounded-full  flex justify-center">
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>
            </Popover>
        </>
    )
}

export default Header
