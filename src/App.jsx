import './App.css';
import elephant from './images/elephant.jpeg';

const imageData = () => {
  const data = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];

  return data;
};

const images = imageData(); // Initialize the images variable here

function App() {
  return (
    <div className="App">
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.img} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
