import Header from './components/Header';
import Entry from './components/Entry';
import data from './data';
import './App.css';
import './components/Entry.css'

function App() {

  // implementing information from data.js to each Entry component
  const entryData = data.map((info)=>{
    return (
      <Entry

      // the Entry component is expecting data to fill its props. 
        img = {info.img} // the src and alt properties are auto-filled
        title = {info.title}
        country = {info.country}
        googleMapsLink = {info.googleMapsLink}
        dates = {info.dates}
        text = {info.text}
      />
    )
  })

  return (
    <>
      <Header />
      <main>
        {entryData}
      </main>
    </>
    
  );
}

export default App;
