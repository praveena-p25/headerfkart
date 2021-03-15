import Header from "./Header";
import alanBtn from '@alan-ai/alan-sdk-web';
import {useEffect} from 'react';
import  {Data} from "./Data";
import {useState} from 'react';
// import { Card } from "@material-ui/core";
import Card from "./Card";

 

function App() {
  const [category, setCategory] = useState([])
  useEffect(() => {
    alanBtn({
      key:"efea4bc7445c813627dbe22c43ec18082e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command }) => {
        if (command === 'firstCommand') {
          alert("firstcommand");
        }
        if (command === "shoe") {
          filter("shoe");
        }
        if (command === "toys") {
          filter("toys");
        }

      },
    });
    filter("");
  }, []);
  

  const filter = (names) => {
  //    const filtered = Data.filter(function (item) {
  //    if (item.name.includes(names)){
  //       return true   
  //     }else return null

  //  });

    const filtered = Data.filter((item) => item.name.includes(names));

    console.log(filtered);
    setCategory(filtered);
  };  

  return (
    <div className="App">
      <Header />
       <div style={{ display:"flex", flexWrap:"wrap" }}>
         {category.map((item) => (
            <Card
            image={item.image} 
            name={item.name} 
            rating={item.rating} 
            actualPrice={item.actualPrice} 
            offerPrice={item.offerPrice}
            />
  
         
        ))}
      </div>
    </div>
  );
}

export default App;
