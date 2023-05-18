import Header from "./Header.js";
import '../index.css';
import Main from "./Main.js";
import Footer from "./Footer.js";

function handleEditAvatarClick () {

}

function App() {
    return (
        <div className="body">
            <div className="page">
              <Header />
              <Main 
                handleEditAvatarClick
              />
              <Footer />
            </div>
        </div>
    );
}

export default App;
