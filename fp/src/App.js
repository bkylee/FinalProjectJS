import Welcome from "./components/Welcome";
import Header from "./Header/Header";
import NotFound from "./components/NotFound";

const App = () =>{
  
  return(
      <Routes>
        <Route path='/' element={<Welcome />} >
          <Route index element={<Header/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
  )
}

export default App;
