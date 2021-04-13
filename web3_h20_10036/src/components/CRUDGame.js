import React, {useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

const CRUDGame = () => {

  // Game info related state
  const [gameTitle, setGameTitle] = useState("");
  const [price, setPrice] = useState();
  const [platform, setPlatform] = useState("");
  const [pegi, setPegi] = useState();
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("default.png");

  // const [ showConfirmation, setShowConfirmation] = useState(false);,
  let history = useHistory();



  const handleChange = (e) => {
    switch (e.target.id) {
      case "gameTitle":
        setGameTitle(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "platform":
        setPlatform(e.target.value);
        break;
      case "pegi":
        setPegi(e.target.value);
        break;
      case "publisher":
        setPublisher(e.target.value);
        break;
      case "genre":
        setGenre(e.target.value);
        break;
      case "image":
        setImage(e.target.value);
        break;
      default:
    }
  }

  const clearFields = () => {
    setImage("default.png");
    setGameTitle("");
    setGenre("");
    setPublisher("");
    setPegi(0);
    setPlatform("");
    setPrice(0);
  }

  const createGame = () => {
    const url = "https://localhost:5001/games";
    const newGameInfo = {
      title: gameTitle,
      price: parseInt(price),
      platform: platform,
      pegi: parseInt(pegi),
      publisher: publisher,
      genre: genre,
      image: image
    };

    if (!gameTitle || !price || !platform || !pegi || !publisher || !genre) {
      alert("Du må fylle inn alle feltene!")
    } else {
      try {
        axios.post(url, newGameInfo);
        clearFields();
        alert("Nytt spill lagt til.")
        history.replace("/all-games")
      } catch (e) {
        alert("whoops, noe gikk galt... Error:" + e)
      }
    }
  }




  return (
      <section>

        <h3 style={{textAlign: 'center'}}>Legg til spill</h3>
        <label>Spilltittel</label>
        <input id="gameTitle" type="text" onChange={handleChange} value={gameTitle}/>
        <label>Pris</label>
        <input id="price" type="number" onChange={handleChange} value={price}/>
        <label>Plattform</label>
        <input id="platform" type="text" onChange={handleChange} value={platform}/>
        <label>Aldersgrense</label>
        <input id="pegi" type="number" onChange={handleChange} value={pegi}/>
        <label>Utgiver</label>
        <input id="publisher" type="text" onChange={handleChange} value={publisher}/>
        <label>Sjanger</label>
        <input id="genre" type="text" onChange={handleChange} value={genre}/>
        <label>Coverbilde</label>
        <input id="image" type="text" onChange={handleChange} value={image}/>
        <input onClick={createGame} type="button" value="Legg til spillet"/>



      </section>
  )
}

export default CRUDGame;