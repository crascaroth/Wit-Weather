import React, { useState } from "react";
import Context from "../GlobalState/Context.js"
import axios from "axios"
import { BASE_URL, API_KEY } from "../Constants/url"



const Provider = (props) => {

    const [cities, setCities] = useState([])
    const [cityDetail, setCityDetail] = useState([])

    const getWeatherInfo = async () => {

        await axios.get(BASE_URL + "&APPID=" + API_KEY)
            .then((res) => {
                console.log(res)
                setCities(res.data.list)

            }).catch((err) => {
                console.log(err)
            })       
    }

        
    



    const states = { cities, cityDetail }
    const setters = {setCityDetail}
    const requests = { getWeatherInfo }

    const data = { states, setters, requests };



    return (
        <Context.Provider value={data}>
            {props.children}
        </Context.Provider>
    );
}

export default Provider;