import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./components/Card";


function App() {

  //how to write useState HOOK

  const [counter, setCounter] = useState(0);

  const [products, setProducts] = useState([]);

  //let counter = 0;

  const increaseHandler = () => {
    setCounter(counter + 1);
    //console.log("increaseHandler=",counter);
  };

  const decreaseHandler = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    //console.log("decreaseHandler=", counter);
  };

  const dataFetch = () => {
    fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data.products));
  };

  console.log(products);

  useEffect(() => {
    dataFetch();
  },[]);

  return (
    <>
      <div className="container mx-auto h-[100px] flex items-center gap-3 justify-center bg-red-400">
        <button className="btn">Counter {counter}</button>
        <button className="btn">Counter {counter}</button>
        <button className="btn">Counter {counter}</button>
        <button className="btn">Counter {counter}</button>
      </div>
      <div className="container mx-auto h-[100px] flex items-center gap-3 justify-center bg-red-400">
        <button onClick={increaseHandler} className="btn btn-primary">
          Increase
        </button>
        <button onClick={decreaseHandler} className="btn btn-primary">
          Decrease
        </button>
      </div>

      <div className="flex flex-wrap gap-3 items-center justify-center">
        {products.map((prod) => (
          // <li>{prod.brand}</li>
          <Card cardInfo={prod} />
        ))}
      </div>
    </>
  );
}

export default App
