import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import FetchItems from "../components/Fetchitems";
import LoadingSpinner from "../components/LoadingSpinner";


function App () {
  const fetchStatus = useSelector ((store) =>  store.fetchStatus);
  
  return  ( <>
  <Header/>
  <FetchItems/>
  {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
  
<Footer/>

</>

  )
}
export default App;