  import React from 'react';
  import Background from "../images/storebg.jpg";

  const Home = () => {
    return (
 <div className=''>
 <div className="card text-bg-dark border-0">
     <img src={Background} className="card-img" alt="Background"/>
     <div className="card-img-overlay d-flex flex-column justify-content-center">
     <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS
    </p>
  </div>
</div>
      </div>
    )
  }
  
  export default Home

