import React, { Component } from 'react';
import ClayJournalHeroBg from '../Images/clayJournalHeroImage.jpeg';


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div className="hero container text-center" 
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgb(44, 46, 60, 0.5), rgb(44, 46, 60, 0.9)), url(' + ClayJournalHeroBg + ')',
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
          <div className="hero-text">
            <h1>Welcome to ClayJournal</h1>
            <h3>Don't forget that special glaze combination ever again</h3>
          </div>
        </div>
      </div>
    );
  }
}
