import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import CoinDetail from "./Pages/CoinDetail"
import CoinSummary from "./Pages/CoinSummary"
import Header from "./components/Header"
import {WatchListContextProvider} from "./context/watchListContext"

function App() {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>

          <Header/>

          <Route exact path="/" component={CoinSummary}/>
          <Route exact path="/coins/:id" component={CoinDetail}/>

        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
