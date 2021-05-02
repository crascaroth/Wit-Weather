import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from '../Pages/MainPage/MainPage'
import DetailPage from '../Pages/DetailPage/DetailPage'
import {MonitorSize} from '../Components/MonitorSize/MonitorSize'

export default function Router() {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MonitorSize>
                        <MainPage />
                    </MonitorSize>
                </Route>

                <Route exact path="/details/:id">
                    <MonitorSize>
                        <DetailPage/>
                    </MonitorSize>

                </Route>

                <Route exact path="/2">

                </Route>

            </Switch>
        </BrowserRouter>
    )
}