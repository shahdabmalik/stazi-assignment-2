import Navbar from "../../components/navbar/Navbar"
import PropertyContainer from "./propertyContainer/PropertyContainer"

const HomePage = () => {

    return (
        <div className=" max-w-screen-xl w-full mx-auto p-5 min-h-screen" >
            <div className="mb-5">
                <h1 className="text-5xl font-semibold text-center text-slate-800" >Featured Listed Property</h1>
                <p className=" font-medium text-center w-1/2 mx-auto text-slate-600 mt-3" >Real Estate can be bought, sold, leased or rented and can be a valuable investment opportunity. The value of real estate can be.</p>
            </div>
            <Navbar />
            <PropertyContainer />
        </div>
    )
}

export default HomePage