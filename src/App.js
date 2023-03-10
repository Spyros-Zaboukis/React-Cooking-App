import { useEffect, useState } from "react";
import axios from "axios";
import './styles/index.css';

function App() {

  const [meals , setMeals]=useState([]);
  const [search, setSearch]=useState("");

  useEffect( ()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
    .then((res) => setMeals(res.data.meals))
  } , [search])


return (
    <div className="App">
      
      <div className="header">
        <h1 className="principalTitle">React Cooking App</h1>

        <p>
          <input type="text" className="searchBar" placeholder="Entrez une recherche en Anglais" 
            onChange={(e) => { setSearch(e.target.value); }
          }/>
        </p>
      </div>

      <div className="containerMeals">
        {
          meals && meals.map((meal) => {
            return(
              <div className="meal" key={meal.idMeal}>
                <h2 className="titleMeal">{meal.strMeal}</h2>
                <img className="imgIllu" src={meal.strMealThumb} alt="image of meal"/><br/>
                <button className="buttonEnter">Voir la recette</button>
              </div>
          )})
        }
      </div>
      </div>
  );
}

export default App;
