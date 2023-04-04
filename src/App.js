import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import ListStudent from "./pages/students/list.student";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
    <div className="App">
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path={""} element={<Home/>}>
                            <Route path={'/list'} element={<ListStudent/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    </div>
  );
}

export default App;
