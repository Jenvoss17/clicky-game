import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highscore: 0,
      message: 'Click an image to begin!',
      clickedImages: [],
      images: [
        {
          id: 1,
          url: '/assets/images/b_alice.png'
        },
        {
          id: 2,
          url: '/assets/images/b_cinderella.png'
        },
        {
          id: 3,
          url: '/assets/images/b_minnie.png'
        },
        {
          id: 4,
          url: '/assets/images/b_mickeyreg.png'
        },
        {
          id: 5,
          url: '/assets/images/b_stitch.png'
        },
        {
          id: 6,
          url: '/assets/images/b_tinkerbell.png'
        },
        {
          id: 7,
          url: '/assets/images/p_cars.png'
        },
        {
          id: 8,
          url: '/assets/images/b_tangled.png'
        },
        {
          id: 9,
          url: '/assets/images/b_frozen.png'
        },
        {
          id: 10,
          url: '/assets/images/b_chipndale.png'
        },
        {
          id: 11,
          url: '/assets/images/b_ariel.png'
        },
        {
          id: 12,
          url: '/assets/images/b_snowwhite.png'
        },
      ]
    }

    this.handleImageClick = this.handleImageClick.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  handleImageClick(id) {
    if (!this.state.clickedImages.includes(id)) {
      this.setState(prevState => ({
        message: 'Good job, keep clicking!',
        score: this.state.score + 1,
        clickedImages: [...prevState.clickedImages, id]
      }), () => {
        if (this.state.clickedImages.length === this.state.images.length) this.setState({ message: 'You win!' })
      })
    } else {
      this.setState({
        highscore: (this.state.score > this.state.highscore) ? this.state.score : this.state.highscore,
        message: 'You lose...',
        score: 0,
        clickedImages: []
      })
    }
    this.shuffle(this.state.images)
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({ images: array });
  }

  render() {
    return (
      <div className="App" >
        <div>
          <nav className="navbar">
            <ul>
              <li className="brand"><a href="/">Disney Clicky Game</a></li>
              <li className="">{this.state.message}</li>
              <li>Score: {this.state.score} | Top Score: {this.state.highscore}</li>
            </ul>
          </nav>
          <header className="header">
            <h1>Disney Clicky Game!</h1>
            <h2>Click on an image to earn points, but be careful! You can only click each image once.</h2>
          </header>
          <main className="container">
            {
              this.state.images.map(image => {
                return (
                  <div role="img" aria-label="click item" className="click-item" key={image.id}
                    style={{ backgroundImage: `url(${image.url})` }} onClick={() => this.handleImageClick(image.id)}></div>
                )
              })
            }
          </main>
          <footer className="footer">
            <div className="bottom">Disney Clicky Game! <img alt="react" src="/assets/images/logo.svg" /></div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
