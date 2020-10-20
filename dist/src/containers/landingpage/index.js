//import { Button } from "@material-ui/core";
import React from "react";
import Button from '../../components/button/index'
import './module.css'

function LandingPage() {
  return (
    <div>
      <section className='text'>
      <h1>Find the good life by good mood</h1>
      <p>Dr Viswanath is an accomplished and respected psychiatrist
      among the fraternity. He has counselled many people to help 
      them come out of despair and depression.  </p>
      <Button >Learn more</Button>
      </section>  
      <section className="image">
          <img src="./consult.JPG" alt="Lady Consults" className="consult"/>
      </section>
    </div>
  );
}

export default LandingPage;
