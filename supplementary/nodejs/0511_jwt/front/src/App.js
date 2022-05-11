
import './App.css';
import { useState } from 'react'
import Login from './components/Login';
import Profile from './components/Profile';


//조건부 랜더링
//isLogin true 일때는 profile 컴포넌트가 나오고, false 면 login 컴포넌트
// 삼항연산자 조건 ? 진실 : 거짓
function App() {
  const [isLogin, setIsLogin] = useState(false);

  const clickToggle = () => {
    setIsLogin(!isLogin); // isLogin true -> false -> true ...
  }
  return (
    <>
      {
        isLogin
          ? <Profile onClick = { clickToggle } />
          : <Login onClick = { clickToggle } />
      }
    </>
  );
}

export default App;
