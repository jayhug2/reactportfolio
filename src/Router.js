import { Routes, Route } from "react-router-dom"
import Mainpage from "./routes/mainPage"
import Myinfo from "./routes/myinfo";
import Portfolio from "./routes/portfolio";

function Router(){
    return (
      <Routes>
        <Route path={`/`} element={<Mainpage />}/>
        <Route path={`/profile`} element={<Myinfo/>}/>
        <Route path={`/portfolio`} element={<Portfolio />}>
          <Route path={`:id`} element={<Portfolio />}/>
        </Route>
      </Routes>
    )
}

export default Router;