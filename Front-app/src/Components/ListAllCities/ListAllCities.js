import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Context from '../../GlobalState/Context'
import {goToPage} from "../../Router/Walker"
import {CityBox, Container} from "./ListAllCities_styled"

export const ListAllCities = () => {

    const { states, setters, requests } = useContext(Context)
    const history = useHistory()



    return (
        <Container>
            {states.cities.map((city => {

                return (
                    <CityBox onClick={ () => {
                        setters.setCityDetail(city)
                        goToPage(history,`/details/${city.id}`)
                    }}>
                        <span>{city.name}</span><span>, </span><span>{city.sys.country}</span>
                        
                        
                    </CityBox>
                )

            }))}
        </Container>
    )
}

export default ListAllCities