import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { SET_PROPERTY } from "../../redux/features/propertySlice"

const Navbar = () => {

    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState('All')

    useEffect(() => {
        dispatch(SET_PROPERTY(activeTab))
    }, [dispatch, activeTab])

    const handleClick = (e) => {
        setActiveTab(e.target.innerText)
    }

    return (
        <div className="flex gap-4 mt-12" >
            <button type='button' className={" px-5 py-2.5 font-medium  transition-all rounded-full " + (activeTab === "All" ? ' bg-blue-500 text-white ' : 'bg-slate-100 hover:bg-slate-300')} onClick={handleClick} >All</button>
            <button type='button' className={" px-5 py-2.5 font-medium  transition-all rounded-full " + (activeTab === "Los Angeles" ? ' bg-blue-500 text-white ' : 'bg-slate-100 hover:bg-slate-300')} onClick={handleClick} >Los Angeles</button>
            <button type='button' className={" px-5 py-2.5 font-medium  transition-all rounded-full " + (activeTab === "Chicago" ? " bg-blue-500 text-white " : " bg-slate-100 hover:bg-slate-300")} onClick={handleClick} >Chicago</button>
            <button type='button' className={" px-5 py-2.5 font-medium  transition-all rounded-full " + (activeTab === "Dallas" ? " bg-blue-500 text-white " : " bg-slate-100 hover:bg-slate-300")} onClick={handleClick} >Dallas</button>
            <button type='button' className={" px-5 py-2.5 font-medium  transition-all rounded-full " + (activeTab === "Miami" ? " bg-blue-500 text-white " : " bg-slate-100 hover:bg-slate-300")} onClick={handleClick} >Miami</button>
        </div>
    )
}

export default Navbar