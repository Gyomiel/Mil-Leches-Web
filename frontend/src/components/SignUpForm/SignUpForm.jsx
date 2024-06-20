import './SignUpForm.css';
import signUpPic from '../../assets/signUpPic.png'

const SignUpForm = () => {
  return (
    <div id='centerForm'>
      <form id='signUpForm'>
        <h2>Create your free account now!</h2>
        <img className='signUpPic' src={signUpPic} />
        <input className='nameInput' type="text" placeholder='Name'/>
        <input className='emailInput' type="text" placeholder='Email'/>
        <input className='passInput' type="password" placeholder='Password' />
        <div className='pleaseStop'>        
        <p className='letMeLive'><input type="radio" />
        <label htmlFor="">I am a pet owner</label></p>
        <p className='letMeLive2'><input type="radio" />
        <label htmlFor="">I am a pet sitter</label></p></div>
        <p className='leaveMeAlone'><input type="checkbox" />
        <p className='formP'>I have read and agreed to the <a className='tspp' href=''>Terms of Service</a> and <a className='tspp' href=''>Privacy Policy</a>.</p></p>
        <h4>Already have an account? <a className='login' href="">Log in!</a></h4>
      </form>
    </div>
  );
};

export default SignUpForm;