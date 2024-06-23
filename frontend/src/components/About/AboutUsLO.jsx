import './AboutUsLO.css';
import aboutUsIcon from '../../assets/aboutUsIcon.png'

const AboutUsLO = () => {
  return (
    <div>
      <section id='services-box'>
        <h1 className='servHeader'>About Mil Leches and our purpose</h1>
        <div>
          <p className='servDesc'>In our current fast-paced world, life can be quite demanding for pet owners. Between work obligations, social engagements, and personal time, giving our pets undivided attention is not always feasible. </p>
          <p className='servDesc'><span>Whether you are working late, traveling, or just need a respite, Mil Leches is your solution!</span></p>
          <p className='servDesc'>We offer services such as home-sitting, boarding, dog walking, and grooming, connecting you with passionate pet lovers who treat your furry companions as their own in a paradise of cuddles and belly rubs.</p>
        </div>
        <div>
          <img className='aboutUsIcon' src={aboutUsIcon} alt="" />
        </div>
      </section>
      <section id='members'>
        <h3 className='hSHeader'>Mil Leches Team</h3>
        <div>
          <img src="" alt="" />
          <h5>Marta</h5>
          <p className='servDesc'>Head back-end designer and animal lover.</p>
        </div>
        <div>
        <img src="" alt="" />
          <h5>Diana</h5>
          <p className='servDesc'>Head front-end designer and pet cuddles enthusiast.</p>
        </div>
        <div>
        <img src="" alt="" />
          <h5>Borja</h5>
          <p className='servDesc'>Head of IT and dreaming of drawing full time.</p>
        </div>
        <button className='aboutButton'>Get started!</button>
      </section>
    </div>
  );
};

export default AboutUsLO;