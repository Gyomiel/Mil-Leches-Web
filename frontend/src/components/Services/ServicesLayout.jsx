import './ServicesLayout.css';
import houseService from '../../assets/houseService.png';
import boardingService from '../../assets/boardingService.png';
import walkingService from '../../assets/walkingService.png';
import groomingService from '../../assets/groomingService.png';

const ServicesLayout = () => {
  return (
    <div>
      <section id='services-box'>
        <h1 className='servHeader'>WHAT DO OUR PET SITTERS OFFER?</h1>
        <div className='servicesCards'>
          <div className='houseSitting'>
            <img src={houseService}/>
            <h3 className='hSHeader'>HOUSE SITTING</h3>
            <p className='servDesc'>Our sitters care for both your pets and your home, ensuring your pets receive all the love and attention they need while staying in their familiar, comfortable environment.</p>
          </div>
          <div className='boardingS'>
            <img src={boardingService} />
            <h3 className='hSHeader'>BOARDING</h3>
            <p className='servDesc'>Your pets will stay overnight at the home of the sitter of your choice, where they will be treated like family in a cozy and inviting setting.</p>
          </div>
          <div className='dogWalking'>
            <img src={walkingService} />
           <h3 className='hSHeader'>DOG WALKING</h3>
           <p className='servDesc'>Your dog will enjoy a walk around your neighborhood, perfect for busy days and for dogs with lots of energy to burn.</p>
          </div>
          <div className='grooming'>
            <img src={groomingService} />
            <h3 className='hSHeader'>GROOMING</h3>
            <p className='servDesc'>Our pet sitters provide grooming services to pamper your pet, ensuring they look and feel their best.</p>
          </div>
        </div>
        <button className='appointButton'>Book an appointment now!</button>
      </section>
    </div>
  );
};

export default ServicesLayout;