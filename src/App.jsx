import "./App.css";
import { CurrentWeatherTop } from "./components/CurrentWeatherTop";
import { TodayHourlyWeather } from "./components/TodayHourlyWeather";
import { WeeklyWeatherTable } from "./components/WeeklyWeatherTable";
import { SearchCity } from "./components/SearchCity";


function App() {



  return (
    <div className="App">
      <SearchCity  />
      <CurrentWeatherTop />
      <TodayHourlyWeather />
      <WeeklyWeatherTable />
    </div>
  );
}

export default App;
