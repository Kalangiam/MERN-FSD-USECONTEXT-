import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import CardList from "./CardList"
import { UserProvider } from "./UserContext"
import Navbar from "./Navbar"
import ItemsList from "./ItemsList"

function App() {



  return (
    <UserProvider>
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col-8">
            <CardList />
          </div>
          <div className="col-4">
            <ItemsList />
          </div>
        </div>

      </div>
    </UserProvider>
  )
}

export default App
