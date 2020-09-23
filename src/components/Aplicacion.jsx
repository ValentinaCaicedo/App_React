import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import InsigniaPages from "../Pages/InsigniaPages";
import InsigniaNueva from "../Pages/InsigniaNueva";
import Layout from "./Layout";

function Aplicacion() {
    return(
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path= '/' component= {InsigniaPages} />
                <Route exact path= '/Insignianew' component= {InsigniaNueva} />

            </Switch>
        </Layout>
        </BrowserRouter>

    )
    
}

export default Aplicacion;