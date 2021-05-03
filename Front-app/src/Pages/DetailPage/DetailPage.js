import { useContext } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Context from '../../GlobalState/Context'
import { useHistory } from 'react-router-dom'
import { goToPage } from "../../Router/Walker"
import { Box, Title, Description, Button, Centralizer, InfoBox } from "./DetailPage_styled"


const DetailPage = () => {

    const { states, setters, requests } = useContext(Context)

    let cityInfo = states.cityDetail
    const history = useHistory()
    useEffect(() => {

    }, [states.cityDetail])
    return (
        <Box>
            <Title>{cityInfo.name}, {cityInfo.sys.country}</Title>

            <InfoBox>
                <Description styled="opacity:100%;">{cityInfo.weather[0].description}</Description>
                <div styled="opacity:100%;">Current Temperature: {cityInfo.main.temp}ºC.</div>
                <div styled="opacity:100%;">Maximum Temperature: {cityInfo.main.temp_max}ºC, Minimum Temperature: {cityInfo.main.temp_min}ºC</div>
                <div styled="opacity:100%;">Humidity: {cityInfo.main.humidity}</div>
            </InfoBox>

            <Centralizer>
                <Button onClick={() => goToPage(history, "/")}>Voltar</Button>
            </Centralizer>
        </Box>
    )
}

export default DetailPage