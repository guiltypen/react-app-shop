//data
import tshirts from "/Users/baderal-ramadan/Desktop/Development/React/shop/src/products.js"
//styling
import styles from "/Users/baderal-ramadan/Desktop/Development/React/shop/src/styles.js";
import img from "/Users/baderal-ramadan/Desktop/Development/React/shop/src/MoonLight.png"
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>MoonLight</title>
        <img src={img} className="Moon" alt="logo" />
        <p>
          Add light to your <b>world</b> 
        </p>

      </header>
      <div style={styles.shirt}>
  <img
    style={styles.shirtImage}
    alt={tshirts[0].name}
    src={tshirts[0].image}
  />
  <p style={styles.text}>{tshirts[0].name}</p>
  <p style={styles.text}>{tshirts[0].price} KD</p>
</div>


    </div>
  );
}
console.log(tshirts[0].image)
export default App;
