//Componetns
import ControlPanel from "./components/ControlPanel";
import StoreDetails from "./components/StoreDetails";
import BooksView from "./components/BooksView";
import ReadList from "./components/ReadList";

function App() {
  return (
    <>
      <StoreDetails />
      <ControlPanel />
      <BooksView view={true} />
      <ReadList view={false} />
    </>
  );
}

export default App;
