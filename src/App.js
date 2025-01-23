import './App.css';
import User from './component/User'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import UsernameValidation from './component/UsernameValidation';
import Empolyee from './component/Employee'
// import Customer from './component/Customer';
import Custdetails from './component/Custdetails';

function App() {
  return (
    <div className="App">
      {/* <User/> */}
      {/* <UsernameValidation/> */}
      {/* <Empolyee/> */}
      {/* <Customer/> */}
      <Custdetails/>
    </div>
  );
}

export default App;
