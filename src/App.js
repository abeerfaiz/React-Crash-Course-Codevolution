import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import { Message } from './components/Message';
import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';
import { NameList } from './components/NameList';
import { Stylesheet } from './components/Stylesheet';
import { Inline } from './components/inline';
import styles from './components/appStyles.module.css'
import './components/appStyles.css'

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
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting/> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet></Stylesheet> */}
      <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
