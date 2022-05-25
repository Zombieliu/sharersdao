import Link from "next/link"


const ends =[
    {
        title:"Explore",
        content:[
            {
                h1:"About Us",
                href:"/home",
            },
            {
                h1:"Sharers",
                href:"#sharers",
            },
            {
                h1:"News",
                href:"#news",
            },
            {
                h1:"Team",
                href:"/team",
            }
        ]

    },
    {
        title:"Soclal",
        content:[
            {
                h1:"Discord",
                href:"/home",
            },
            {
                h1:"Twitter",
                href:"/home",
            },
            {
                h1:"Telegram",
                href:"/home",
            },
            {
                h1:"YouTube",
                href:"/home",
            },
            {
                h1:"Medium",
                href:"/home",
            }
        ]
    },
    // {
    //     title:"Sharers",
    //     content:[
    //         {
    //             h1:"",
    //             href:"",
    //         },
    //     ]
    // }
]
const Tail=()=>{
    return(
        <div className="mt-96">
            <div className="md:flex justify-between border-b mx-auto">
                <div className="text-center md:flex justify-between mb-10">
                    {ends.map(end=>(
                        <div key={end.title} className="mx-10" >
                            <div className="text-white text-xl font-semibold  dark:text-gray-300">
                                {end.title}
                            </div>
                            {end.content.map(item=>(
                                <div key={item.h1} className="my-3 text-gray-300  transition  duration-300 transform hover:translate-x-2 dark:text-gray-400">

                                    <Link href={item.href}>
                                        <a>
                                            {item.h1}
                                        </a>
                                    </Link>
                                </div>))}
                        </div>
                    ))}
                </div>
                <div>
                    <div  className="flex justify-center md:justify-end " >
                        <img className="w-64" src="/logo.png" alt=""/>
                    </div>
                    <div className="my-5 text-gray-300  text-center xl:-ml-2">
                        The Best DApp of SharersDao
                    </div>
                </div>

            </div>
            <div className="  mx-auto flex justify-center md:block md:pl-10 my-10 text-gray-300 pb-24 md:pb-0">
                © 2022 SharersDao</div>
        </div>
    )
}
export  default Tail
