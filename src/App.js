import './App.css';

import Header from './component/Home/Header';
import Shop from './component/Home/Shop/Shop';
import Images from './component/Images/Images';
import Text from './component/Text';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function  App() {
  return(
    <div>
      <Header></Header>
      <Text></Text>
      <Shop></Shop>
      <Images></Images>
      <ToastContainer />
    </div>
  )
}
export default App;
