
import { useSelector } from "react-redux"
import Card from "../../../components/card/Card"
import { useEffect, useState } from "react"

const PropertyContainer = () => {


    const { property } = useSelector((state) => state.property)
    const [showProperty, setShowProperty] = useState([])

    let disableButton = showProperty.length === property.length

    useEffect(() => {
        setShowProperty(property.slice(0, 6))
    }, [property])

    const handleClick = () => {
        setShowProperty(property.slice(0, showProperty.length + 3))
        console.log("clicked");
    }

    return (
        <div>
            <div className="my-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" >
                {showProperty.map(property => <Card key={property.id} property={property} />)}
            </div>
            <div className="flex items-center justify-center" >
                <button type="button" disabled={disableButton} onClick={() => handleClick()} className={"px-5 py-2.5  text-white rounded-full font-medium " + (!disableButton ? ' bg-blue-600 ' : " bg-blue-400 cursor-not-allowed ")} >Show More</button>
            </div>
        </div>
    )
}

export default PropertyContainer