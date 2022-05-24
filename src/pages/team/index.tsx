import Tail from "../../components/tail";
import React from "react";
import Header from "../../components/header";
import Link from "next/link";




const Team = () =>{
    const team = [
        {
            twitter:"",
            img:"https://cdn.discordapp.com/attachments/897398778166906911/950274267470233620/unknown.png",
            name:"Abel",
        },
        {
            twitter:"",
            img:"https://cdn.discordapp.com/attachments/897398778166906911/950273947147059230/unknown.png",
            name:"David",
        },
        {
            twitter:"",
            img:"https://cdn.discordapp.com/attachments/897398778166906911/950273846894813234/unknown.png",
            name:"Henry",
        },
        {
            twitter:"",
            img:"https://cdn.discordapp.com/attachments/897398778166906911/950273679881814016/unknown.png",
            name:"Joan",
        },
        {
            twitter:"",
            img:"https://cdn.discordapp.com/attachments/897398778166906911/950273522666700830/unknown.png",
            name:"FengFeng",
        },
        {
            twitter:"",
            img:"https://cdn.discordapp.com/attachments/897398778166906911/950273329422553128/unknown.png",
            name:"Boin",
        },
        {
            twitter:"",
            img:"https://cdn.discordapp.com/attachments/897398778166906911/950273522666700830/unknown.png",
            name:"PangPang",
        }
    ]
    return (
        <div className="mx-auto">
            <Header/>
            <div className="relative ">
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-90">
                        <div className="max-w-7xl relative px-5 pt-16  sm:px-6   mx-auto ">
                            <div className="text-white text-center text-4xl font-semibold mt-12">
                                Sharers User
                            </div>
                            <div className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
                                {team.map((item=>(
                                    <Link key={item.twitter} href={item.twitter}>
                                        <a className="items-center mx-auto">
                                        <img className="rounded-full w-36" src={item.img} alt=""/>
                                            <div className="mt-3 text-white   ">
                                                {item.name}
                                            </div>
                                        </a>
                                    </Link>
                                )))}
                            </div>
                            <Tail/>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Team
