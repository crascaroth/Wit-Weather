import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import {goToPage} from "../../Router/Walker"


export const Header = () => {

    const history = useHistory()

    return (
        <AppBar position="static" color="transparent" onClick={() => goToPage(history, "/")}>
            <Tabs variant="fullWidth"  >
                <Tab label="Wit Weather" >

                </Tab>
            </Tabs>
        </AppBar>
    )
}

export default Header