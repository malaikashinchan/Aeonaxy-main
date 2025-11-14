
import './App.css';
import Card from './component/Card';
import CardsData from './component/CardData';
import CardList from './component/CardList';
import DemoComponent from './component/DemoComponent';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Navi from './component/Navi';
import PaginatedItems from './component/PaginatedItems';
import Form from './NextPage/Form';
import NextPage from './NextPage/NextPage';

function App() {
  
  return (
    <div className="mx-10 App">
        <Navi/>     
        <Header/>
        <Home/>
        <div className="flex justify-center">
      
      <div className="w-4"></div> {/* Space between cards */}
      <PaginatedItems data={CardsData} itemsPerPage={12}  // Define your card data here}
/>
    </div>
    
    <NextPage/>
    <Footer/>
    </div>
  );
}

export default App;
