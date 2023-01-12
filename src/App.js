// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import Nft2 from "./assets/nft2.png";
// import Mid from "./components/Mid";
import ReactCardSlider from './components/ReactCardSlider';
function App() {
  const sliderClick = (slider)=>{
    alert("hello world");
  }

  const slides = [
    {image: "https://i.seadn.io/gae/Ur4mL5e4OwR7JDdHVHQsyoR-nOPI_ZbLTtcG5esD-lsat5m2bGEXoag4GrNc56ZYsWeejLqdqr1GzdCNerYVDSxpaG9yxg62EliX?auto=format&w=1000",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    {image:"https://i.seadn.io/gae/Ur4mL5e4OwR7JDdHVHQsyoR-nOPI_ZbLTtcG5esD-lsat5m2bGEXoag4GrNc56ZYsWeejLqdqr1GzdCNerYVDSxpaG9yxg62EliX?auto=format&w=1000",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    {image:"https://i.seadn.io/gae/Ur4mL5e4OwR7JDdHVHQsyoR-nOPI_ZbLTtcG5esD-lsat5m2bGEXoag4GrNc56ZYsWeejLqdqr1GzdCNerYVDSxpaG9yxg62EliX?auto=format&w=1000",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    {image:"https://i.seadn.io/gae/Ur4mL5e4OwR7JDdHVHQsyoR-nOPI_ZbLTtcG5esD-lsat5m2bGEXoag4GrNc56ZYsWeejLqdqr1GzdCNerYVDSxpaG9yxg62EliX?auto=format&w=1000",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    {image:"https://i.seadn.io/gae/Ur4mL5e4OwR7JDdHVHQsyoR-nOPI_ZbLTtcG5esD-lsat5m2bGEXoag4GrNc56ZYsWeejLqdqr1GzdCNerYVDSxpaG9yxg62EliX?auto=format&w=1000",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image:"https://i.seadn.io/gae/Ur4mL5e4OwR7JDdHVHQsyoR-nOPI_ZbLTtcG5esD-lsat5m2bGEXoag4GrNc56ZYsWeejLqdqr1GzdCNerYVDSxpaG9yxg62EliX?auto=format&w=1000",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://i.seadn.io/gae/Ur4mL5e4OwR7JDdHVHQsyoR-nOPI_ZbLTtcG5esD-lsat5m2bGEXoag4GrNc56ZYsWeejLqdqr1GzdCNerYVDSxpaG9yxg62EliX?auto=format&w=1000",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
  ]
  return (
    <div>
      <NavBar />
      <Home />
      <ReactCardSlider slides={slides}/>
      {/* <div>
      <ReactCardSlider />
      </div> */}
    </div>
  );
}

export default App;
