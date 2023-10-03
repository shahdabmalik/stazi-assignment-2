import { BsBuilding, BsArrowsMove } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { CiLocationOn } from "react-icons/ci"
import { LiaBedSolid, LiaBathSolid } from "react-icons/lia"
import { Link } from "react-router-dom"

const Card = ({ property }) => {
    return (
        <Link to={`/property/${property?.id}`} >
            <div className="rounded-2xl p-2 bg-slate-50 text-slate-500 relative" >
                <img className="aspect-4.5/3 object-cover rounded-2xl" src={property?.image} />
                <div className="pt-4 px-2" >
                    <div className=" text-slate-700 px-2" >
                        <p className="flex font-medium gap-2 items-center py-3 text-sm" > <CiLocationOn className="text-yellow-700" size={16} /> {property?.streetAddress}</p>
                        <h3 className="text-xl h-14 font-semibold" >{property?.address}</h3>
                    </div>
                    <div className="grid grid-cols-4 pt-5 px-3  justify-between border-slate-200 border-b border-dashed" >
                        <div className="flex flex-col items-center border-r border-dashed pb-3" >
                            <div>
                                <div className=" text-slate-700 mb-3" ><BsBuilding size={18} /></div>
                                <p className="text-sm font-medium" >{property?.rooms} Rooms</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center border-r border-dashed pb-3" >
                            <div>
                                <div className=" text-slate-600 mb-3" ><LiaBedSolid size={18} /></div>
                                <p className="text-sm font-medium" >{property?.beds} Beds</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center border-r border-dashed pb-3" >
                            <div>
                                <div className=" text-slate-600 mb-3" ><LiaBathSolid size={18} /></div>
                                <p className="text-sm font-medium" >{property?.baths} Bath </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center border-r border-dashed pb-3" >
                            <div>
                                <div className=" text-slate-600 mb-3" ><BsArrowsMove size={18} /></div>
                                <p className="text-sm font-medium" >{property?.area} sft</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 pb-1 flex justify-between items-center px-2" >
                        <p className="text-lg font-semibold text-slate-700" >{property?.listingType === 'For Rent' ? <><span className="text-blue-500" >${property?.price}</span> <span className="text-sm " >/ month</span> </> : <span className="text-blue-500" >${property?.price}</span>} </p>
                        <div className="flex gap-3 items-center" >
                            <button type="button" className="bg-white text-blue-600 px-5 py-2.5 rounded-full font-semibold text-sm border border-blue-600" >Read More</button>
                        </div>
                    </div>
                    <div className="p-2 bg-white absolute top-5 right-5 text-blue-400 rounded-full cursor-pointer" ><AiOutlineHeart size={20} /></div>
                    <div className="px-4 py-2 bg-white absolute top-5 left-5 text-blue-600 text-sm font-medium rounded-full cursor-pointer" >{property?.listingType}</div>
                    {property?.popular && <div className="absolute top-[245px] -left-2" >
                        <div className="bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-md shadow-md rounded-bl-none relative"  >
                            Popular
                            <span className="w-0 h-0 border-4 border-blue-800 rounded-bl-full absolute -bottom-2 left-0 bg-blue-800" ></span>
                        </div>
                    </div>}
                </div>
            </div>
        </Link>
    )
}

export default Card