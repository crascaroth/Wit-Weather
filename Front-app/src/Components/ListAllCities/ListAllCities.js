import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Context from '../../GlobalState/Context'
import {goToPage} from "../../Router/Walker"

export const ListAllCities = () => {

    const { states, setters, requests } = useContext(Context)
    const history = useHistory()



    return (
        <>
            {states.cities.map((city => {

                return (
                    <div onClick={ () => {
                        setters.setCityDetail(city)
                        goToPage(history,`/details/${city.id}`)
                    }}>
                        {city.name}
                    </div>
                )

            }))}
        </>
    )
}

export default ListAllCities