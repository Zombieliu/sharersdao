import React from "react"
import Link from "next/link";
import Tail from "../../components/tail";

const Project = () =>{
    const project = [
        {
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978556940806418442/1.png",
            h1:"Discover and share interesting ecology and projects from Web3 with DAO members!"
        },
        {
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978213965530296320/2.png",
            h1:"Watch and share videos and articles from SHARERS DAO."
        },
        {
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978213965781958696/3.png",
            h1:"Join sharers Dao, build community products and expand the influence of SHARERS DAO!"
        },
        {
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978213966033600562/4.png",
            h1:"Build the future with global SHARERS DAO members！"
        },

    ]
        return(
        <div id="about" className="flex justify-center">
            <div >
            <div className="flex justify-center">
                <img className="w-96" src="https://cdn.discordapp.com/attachments/876498266550853642/978178604242448424/123.png" alt=""/>
            </div>
            <div className="flex justify-center text-center mt-5 text-2xl ">
                <div className="text-white">
               <h1> We are committed to sharing Web3 ecology and ecological projects.</h1>
                <h2>and output value in the form of articles &Videos & products</h2>
                </div>
            </div>
                <div className="mt-72 w-96 md:w-full flex overflow-x-auto md:grid md:grid-cols-1 md:grid-cols-2 md:gap-24">
                    {project.map((item=>(
                    <div key={item.img} className="mx-2 border-4 mb-2 p-5 rounded-xl border-indigo-800 shadow-purple bg-black opacity-75  flex justify-center text-center">
                        <div className="w-80 md:w-full">
                        <div className="flex justify-center mb-2">
                            <img src={item.img} alt=""/>
                        </div>
                        <div className="text-white  mt-7 text-2xl">
                            <h1>
                                {item.h1}
                            </h1>
                        </div>
                        </div>
                    </div>
                    )))}
                </div>
        </div>
        </div>
    )
}

const Sharers = () =>{
    const exhibit = [
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978331713270874132/polkadot.png",

        },
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978331713530888272/ARBITRUM.png",
        },
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978331713786765362/DFINITY.png",
        },
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978331714025836654/NEAR.png",
        }
    ]
    return(
        <>
            <div id="sharers" className="pt-32 flex justify-center text-center ">
                <div className="text-white  my-20 text-2xl">
                    <h1 className="text-5xl font-semibold mb-10">VIEW ARTICLE</h1>
                    <h2> We are committed to sharing Web3 ecology and ecological projects.</h2>
                    <h3>and output value in the form of articles &Videos & products</h3>
                </div>
            </div>
            <div className="relative  grid grid-cols-1 md:grid-cols-4 gap-10">
                    {exhibit.map((item=>(
                        <Link href={item.href} key={item.href}>
                            <a  className="rounded-2xl transition duration-500  transform hover:scale-105">
                                <img className="w-full" src={item.img} alt=""/>
                            </a>
                        </Link>
                    )))}
            </div>
            <div className="flex justify-center mt-14">
            <Link href="/home">
                <a className="rounded-xl w-36  px-4 py-2 bg-white text-center text-white  border-4 bg-blue-400 bg-opacity-80 border-blue-400 border-opacity-80
                transition duration-500  transform hover:scale-105">
                    VIEW ALL
                </a>

            </Link>
            </div>

        </>
    )
}

const SharersNews = () =>{
    const sharers = [
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978554481727918100/3921557bae63295f.png",

        },
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978554481727918100/3921557bae63295f.png",
        },
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978554481727918100/3921557bae63295f.png",
        },
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978554481727918100/3921557bae63295f.png",
        }
    ]
    return(
        <>
            <div id="news" className="mt-36 flex justify-center">
                <img className="w-96" src="https://cdn.discordapp.com/attachments/876498266550853642/978176131985469440/SHARERS_NEWS_.png" alt=""/>
            </div>
            <div className="flex justify-center text-center my-20 text-2xl">
                <div className="text-white">
                    <h1>Subscribe to SharersDao to see the latest weekly content of SharersDao.</h1>
                    <h2>output value in the form of articles &Videos & products</h2>
                </div>
            </div>
            <div className="relative  grid grid-cols-1 md:grid-cols-4 gap-10">
                {sharers.map((item=>(
                    <Link href={item.href} key={item.href}>
                        <a  className="rounded-2xl transition duration-500  transform hover:scale-105">
                            <img className="w-full" src={item.img} alt=""/>
                        </a>
                    </Link>
                )))}
            </div>
            <div className="flex justify-center mt-14">
                <Link href="/home">
                    <a className="rounded-xl w-36  px-4 py-2 bg-white text-center text-white  border-4 bg-blue-400 bg-opacity-80 border-blue-400 border-opacity-80
                transition duration-500  transform hover:scale-105">
                        VIEW ALL
                    </a>

                </Link>
            </div>
        </>
    )
}

const JoinUs = () =>{
    const about1 = [
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978176240584372234/SHARERS_DAOtelegram.png"
        },
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978176240798302258/SHARERS_DAOtwitter.png"
        },
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978176240353701918/SHARERS_DAOm.png"
        }
    ]
    const about2 = [
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978176240097845258/SHARERS_DAOdiscord.png"
        },
        {
            href:"/home",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978176241049948220/SHARERS_DAOyoutube.png"
        },
    ]
    return(
        <>
            <div className="flex justify-center mt-36">

                <img src="https://cdn.discordapp.com/attachments/876498266550853642/978176241301610526/SHARERS_DAO.png" alt=""/>
            </div>
            <div className="flex justify-between mt-32">
                {about1.map((item=>(
                    <Link key={item.href} href={item.href}>
                        <a className=" transition duration-300  transform hover:-translate-y-6">
                            <img className="w-36" src={item.img} alt=""/></a>
                    </Link>
                )))}
            </div>
            <div className="flex justify-between mx-56 mt-10">
                {about2.map((item=>(
                    <Link key={item.href} href={item.href}>
                        <a className=" transition duration-500  transform hover:-translate-y-6">
                            <img className="w-36" src={item.img} alt=""/></a>
                    </Link>
                )))}
            </div>
        </>
    )
}

const HomeContent = () =>{
    return (
        <>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className="absolute inset-0">
                    <img
                        className=" w-full object-cover"
                        src="https://cdn.discordapp.com/attachments/876498266550853642/978668810355744808/4534.png"
                        alt="People working on laptops"
                    />
                </div>
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-90">
                        <div className="max-w-7xl relative px-5 pt-16  sm:px-6   mx-auto ">
                                <Project/>
                            <Sharers/>
                            <SharersNews/>
                            <JoinUs/>
                            <Tail/>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default HomeContent
