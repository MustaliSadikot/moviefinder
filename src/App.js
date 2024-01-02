import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [progress, setProgress] = useState(0)

  const [mode, updatemode] = useState(true);
  const [data,updateData] = useState("")
  const [movieinfo,updatemovie] = useState("")

  const getmovies =async()=>{
    setProgress(30)
    const data1 = await fetch(`https://www.omdbapi.com/?apikey=cef9eed5&t=${data}`);
    setProgress(60)
    const paraseData = await data1.json();
    setProgress(90)
    console.log(paraseData);
    console.log(data);
    updatemovie(paraseData)
    setProgress(100)
  }

  const changemode = () => {
    updatemode(!mode);
    // console.log(mode);
  };

  const handleData= (e)=>{
    // console.log(e.target.value);
    updateData(e.target.value)
  }

  document.body.style.backgroundColor = mode
    ? "#f7f7f7"
    : "#000C2B"; /*"#292b2c"*/
  return (
    <>
    <Router basename="moviefinder">
    <Navbar bar={changemode} mode={mode}></Navbar>
      <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/" element={<div>
      <LoadingBar
        color='#FFA500'
        progress={progress}
        height={5}
        onLoaderFinished={() => setProgress(0)}
      />

      
      <div
        className="container mb-3 mt-2 d-flex py-4"
        style={{ maxwidth: "600px" }}
      >
        <input
          type="search"
          placeholder="Search Movies/Series Name Here"
          className={`form-control`}
          id="exampleFormControlInput1"
          onChange={handleData}
        />
        <button type="button" className="btn btn-primary ms-1 mx-auto" onClick={getmovies}>
          Search
        </button>
      </div>

{movieinfo.Title &&      <div className="container mx-auto">
        <div className="row">
          <div className="offset-md-1 col-md-4">
            <img
              src={movieinfo.Poster}
              className="w-100"
            />
          </div>

          <div className="ps-md-4 col-md-6 mt-mb-0 mt-2">
            <div className={`d-flex flex-wrap"`}>
              <div className={`ms-3 text-${mode ? "dark" : "light"}`}>
                <h3 className="text-md-start text-center fs-1">Title :- {movieinfo.Title}</h3>
                <h5 className="mt-4 fs-4">Type :- {movieinfo.Type}</h5>
                <h5 className="fs-4">IMBD :- {movieinfo.imdbRating}</h5>
                <h5 className="fs-4">Genre :- {movieinfo.Genre}</h5>
                <h5 className="fs-4">Released Date :- {movieinfo.Released}</h5>
                <h5 className="fs-4">Duration :- {movieinfo.Runtime}</h5>
                <h5 className="fs-4">Director :- {movieinfo.Director}</h5>
                <h5 className="fs-4">Actors :- {movieinfo.Actors}</h5>
                <h5 className="fs-4">Writers :- {movieinfo.Writer}</h5>
                <h5 className="fs-4">Countries :- {movieinfo.Country}</h5>
                <h5 className="fs-4">Languages :- {movieinfo.Language}</h5>
                <h5 className="fs-4">Box Office :- {movieinfo.BoxOffice}</h5>
                <h5 className="fs-4">Plot :- {movieinfo.Plot}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>}
      </div>}></Route>
      </Routes>
    </Router>

    </>
  );
}

export default App;
