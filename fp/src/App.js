import Header from "./Header/Header";

const App = () =>{
  
  return(
      <Routes>
        <Route path='/' element={<Welcome />} >
          <Route index element={<Header/>} />
        </Route>
      </Routes>
  )
}

export default App;
