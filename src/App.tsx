import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
  const handleCounterOnClick = () => {};

  return (
    <>
      <main>
        <h1 className="heading">TO DO LIST</h1>
        <div className="to-do-list-container">
          <Counter
            onClick={handleCounterOnClick}
            buttonText="Add!"
            heading="Freetime:"
            storageKey="counter-1"
          />
          <Counter
            onClick={handleCounterOnClick}
            buttonText="Add!"
            heading="School:"
            storageKey="counter-2"
          />
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
