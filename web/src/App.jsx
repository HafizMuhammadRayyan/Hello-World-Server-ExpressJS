import "./App.scss";
import { useState } from "react";
import axios from "axios";
import { CgArrowLongUp, CgArrowLongDown } from "react-icons/cg";
import { BsDroplet } from "react-icons/bs";
import { BsCloudLightningRain } from "react-icons/bs";
import {
  WiDayCloudy, WiDaySunny,
  WiDayLightning, WiDayCloudyGusts,
  WiCloudy, WiDayWindy,
  WiDayHaze
} from "react-icons/wi";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .get(`https://hello-express.cyclic.app/weather/${city}`)
      .then((res) => {
        setWeatherData(res.data);
        console.log("res >>>>", res.data);
      })
      .catch((err) => {
        console.log("err >>>>", err.message);
      });
  };

  return (
    <div className="weatherPage">

      <div className="search">
        <form onSubmit={submitHandler}>
          <input
            id="search"
            type="search"
            placeholder="Enter city name"
            onChange={e => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {(weatherData === null ? null
        :

        <div className="weatherCard">

          <div className="todayWeather">
            <div className="first">
              <h1>{weatherData?.city}</h1>
              <div>
                <div className="min">
                  <CgArrowLongDown />
                  {weatherData?.min}°
                </div>
                <div className="max">
                  <CgArrowLongUp />
                  {weatherData?.max}°
                </div>
              </div>
            </div>

            <div className="second">
              <div className="second_one">
                <span className="day">MONDAY</span>
                <span className="date">05/12/2022</span>
                <span className="wind">Wind {weatherData?.wind}/h</span>
                <span className="drop"><BsDroplet size="2rem" />{weatherData?.drop}</span>
              </div>
              <div className="second_two">
                <BsCloudLightningRain fontSize="10rem" />
                <span>{weatherData?.weatherText}</span>
              </div>
              <span className="second_third">{weatherData?.temp}<sup style={{ fontWeight: "300", fontSize: "4rem" }}>°</sup></span>
            </div>
          </div>

          <div className="weekWeather">
            <div>
              <p>TUE</p>
              <WiDaySunny size="3.5rem" />
              <p>25°</p>
            </div>
            <div>
              <p>WED</p>
              <WiDayLightning size="3.5rem" />
              <p>25°</p>
            </div>
            <div>
              <p>THU</p>
              <WiDayCloudyGusts size="3.5rem" />
              <p>25°</p>
            </div>
            <div>
              <p>FIR</p>
              <WiCloudy size="3.5rem" />
              <p>25°</p>
            </div>
            <div>
              <p>SAT</p>
              <WiDayWindy size="3.5rem" />
              <p>25°</p>
            </div>
            <div>
              <p>SUN</p>
              <WiDayHaze size="3.5rem" />
              <p>25°</p>
            </div>
          </div>
        </div>

      )}
    </div>
  );
}

export default App;
