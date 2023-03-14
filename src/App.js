import React, { useState } from "react"

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const changeHandler = (e) => {
    setCity(e.target.value);
    console.log(city)
  }
  const submitHandler = e => {
    e.preventDefault();
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const kelvin = data.main.temp;
        console.log(kelvin);
        const celcius = kelvin - 272.15;
        console.log(celcius)
        setResult("Temperature at " + city + " \n " + Math.round(celcius) + "°C");
      })
      .catch(error => console.log(error));
    setCity("");
  }

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">This is Weather Application</h1>
            <form onSubmit={submitHandler}>
              <input type="text" name="city" value={city} onChange={changeHandler} /> <br /> <br />
              <input type="submit" value="get Temperature" />
            </form>  <br /> <br />
            <div>
              <h1>{result}</h1>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
