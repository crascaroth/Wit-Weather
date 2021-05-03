import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from '../Pages/MainPage/MainPage'
import DetailPage from '../Pages/DetailPage/DetailPage'
import Header from "../Components/Header/Header"
import { MonitorSize } from '../Components/MonitorSize/MonitorSize'

export default function Router() {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MonitorSize>
                        <Header />
                        <MainPage />
                    </MonitorSize>
                </Route>

                <Route exact path="/details/:id">
                    <MonitorSize>
                        <Header />
                        <DetailPage />
                    </MonitorSize>

                </Route>

            </Switch>
        </BrowserRouter>
    )
}