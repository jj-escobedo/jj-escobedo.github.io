import './Home.css';

function Home() {
  return (
    <div>
      <div>
        <h1 className='home-header'>Class of '25 Money Goal</h1>
        <h2 className='home-header-2'>$36,000</h2>
        <div className='thermometer-container'>
          <div className='left-text'>
            <h2 className='home-text-left'>41.667% of the way there!</h2>
          </div>
          <img src='thermometer.png' alt='money-thermometer' className='home-image'/>
          <h2 className='home-text-right'>$15,000 raised</h2>
        </div>
        <h2 className='home-header-2'>$0</h2>
      </div>
    </div>
  );
}

export default Home;
