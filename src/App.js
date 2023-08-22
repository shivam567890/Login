import './App.css';
import XeroCode from './Img/Logo4.svg';
import Img from  './Img/Vector.png';
import Img66 from './Img/Img66.svg';
import Google from './Img/google.svg';
import GitHub from './Img/image2.svg';
function App() {
  return (
    <>
       
    <div className="flex-container">
      
        <div className='left'>
           <img src={XeroCode} alt="Logo" width="160px" className='logo'/>
           <div className='card'>
           <h1>Welcome Arya Soni !</h1>
               <div className='line'> 
                   <hr className='half_line'/>
                   Login To Your Account
                   <hr  className='half_line'/>
                 </div>

                 <div className='form'>
                   <input type="text" className='input'/>
                   <input type="text" className='input'/>
                   <button className='input btn'>LOGIN</button>                 
                
                 <p className='OR'> OR</p>

                 <div className='logins'>
                       
                        <div className='google'>
                          <p>Login With Google</p>
                           <img src={Google} alt="login" style={{marginLeft:"4px"}}/>
                        </div>
                        

                        <div className='google'>
                          <p>Login With GitHub</p>
                           <img src={GitHub} alt="login" style={{marginLeft:"4px"}}/>
                        </div>
                        </div>
                 </div>
               </div>
        </div>
        <hr className='center_hr'/>
        <div className='right'>
            <img src={Img66} alt="llooggoo"  />
            <img src={Img} alt="bluecorner"  className='down'/>
        </div>
    </div>
     
    </>
  );
}

export default App;
