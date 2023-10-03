import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { SET_SINGLE_PROPERTY } from '../../redux/features/propertySlice'
import Card from '../../components/card/Card'
import { BiLeftArrowAlt } from "react-icons/bi"

const SingleProperty = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const { singleProperty } = useSelector(state => state.property)

    useEffect(() => {
        dispatch(SET_SINGLE_PROPERTY(id))
    }, [dispatch, id])

    return (
        <div className=' max-w-screen-xl mx-auto p-5 min-h-screen' >
            <Link to={"/"} > <button type="button" className="pr-5 pl-3 py-2.5 bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 " ><BiLeftArrowAlt size={20} /> Home</button></Link>

            <div className='grid grid-cols-3 my-5' >
                <Card property={singleProperty} />
            </div>
        </div>
    )
}

export default SingleProperty