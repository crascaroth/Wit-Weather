import { useContext, useEffect } from 'react'
import Context from '../../GlobalState/Context'
import ListAllCities from '../../Components/ListAllCities/ListAllCities'

const MainPage = () => {

    const { states, setters, requests } = useContext(Context)

    useEffect(() => {
        requests.getWeatherInfo()

    }, [])

    return (
        <>
        <ListAllCities />        
        </>
    )
}

export default MainPage