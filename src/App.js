import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import { Message } from './components/Message';
import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/*<Greet name='Bruce' heroName='Batman'/>
      <Greet name='Clark' heroName='Batman'>
        <button>Action</button>  
      </Greet>
      <Greet name='Dianna' heroName='Batman'>
        <p>This is children props</p>
      </Greet>*/}
      {/* <Message></Message> */}
      {/* <ClickHandler></ClickHandler> */}
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
