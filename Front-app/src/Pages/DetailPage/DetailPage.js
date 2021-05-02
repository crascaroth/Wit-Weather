import { useContext } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Context from '../../GlobalState/Context'
import { useHistory } from 'react-router-dom'
import {goToPage} from "../../Router/Walker"

const DetailPage = () => {

    const { states, setters, requests } = useContext(Context)

    let cityInfo = states.cityDetail
    const history = useHistory()
    useEffect(() => {

    }, [states.cityDetail])
    return (
        <div>
            {cityInfo.name}
            <button onClick={() => goToPage(history, "/")}>Voltar</button>
        </div>
    )
}

export default DetailPage