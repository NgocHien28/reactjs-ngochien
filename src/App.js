import logo from './logo.svg';
import './App.css';
import Info from './components/Info';

function App() {
  return(
    <div>
      <Info a="b" name="Nguyen Van A" age="30" phone="0123456" />
      {/* <Info  name="Nguyen Lam B" age="10" phone="02553457" />
      <Info  name="Hoang Van Giang" age="20" phone="1235537" /> */}
    </div>
  )
   
}


export default App;
