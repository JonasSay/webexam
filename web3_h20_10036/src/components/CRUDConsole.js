import React, {useState} from 'react';
import axios from "axios";

const CRUDConsole = () => {

  // Game info related state
  const [consoleName, setConsoleName] = useState("");
  const [release, setRelease] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("default.png");

  // const [ showConfirmation, setShowConfirmation] = useState(false);


  const handleChange = (e) => {
    switch (e.target.id) {
      case "gameTitle":
        setConsoleName(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "platform":
        setRelease(e.target.value);
        break;
      case "pegi":
        setManufacturer(e.target.value);
        break;
      case "image":
        setImage(e.target.value);
        break;
      default:
    }
  }

  const clearFields = () => {
    setConsoleName("");
    setRelease("");
    setManufacturer("");
    setPrice(0);
    setImage("default.png");
  }

  const createConsole = () => {
    const url = "https://localhost:5001/consoles";
    const newConsoleInfo = {
      consoleName: consoleName,
      price: parseInt(price),
      release: release,
      manufacturer: manufacturer,
      image: image
    };

    if (!consoleName || !price || !manufacturer || !release) {
      alert("Du må fylle inn alle feltene!")
    } else {
      try {
        axios.post(url, newConsoleInfo);
        clearFields();
      } catch (e) {
        alert("whoops, noe gikk galt... Error:" + e)
      }
    }
  }


  return (
      <section>

        <h3 style={{textAlign: 'center'}}>Legg til konsoll</h3>
        <label>Konsollnavn</label>
        <input id="consoleName" type="text" onChange={handleChange} value={consoleName}/>
        <label>Pris</label>
        <input id="release" type="text" onChange={handleChange} value={release}/>
        <label>Coverbilde</label>
        <input id="manufacturer" type="text" onChange={handleChange} value={manufacturer}/>
        <label>Lanseringsdato (DD-MM-ÅÅÅÅ)</label>
        <input id="price" type="number" onChange={handleChange} value={price}/>
        <label>Utgiver</label>
        <input id="image" type="text" onChange={handleChange} value={image}/>
        <input onClick={createConsole} type="button" value="Legg til spillet"/>



      </section>
  )
}

export default CRUDConsole;