const quotes = [
  {
    text: "Go on your path, even if you live for a day.",
    author: "Park Jimin"
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    text: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: " Robert Frost"
  },
  {
    text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches"
  },
  {
    text: "Live your life. It’s yours anyway. Don’t try too hard. It’s okay to lose.",
    author: "BTS, Fire"
  },
  {
    text: "There is nothing permanent except change.",
    author: "Heraclitus"
  },
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci"
  },
  {
    text: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill"
  }
];

const background = [
  "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  "https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  "https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  "https://images.pexels.com/photos/414667/pexels-photo-414667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  "https://images.pexels.com/photos/963063/pexels-photo-963063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  "https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  "https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  "https://images.pexels.com/photos/207135/pexels-photo-207135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: "Hardships often prepare ordinary people for an extraordinary destiny.",
      currentAuthor: "C.S. Lewis"
    }
    this.changeQuote = this.changeQuote.bind(this);
  }
  changeQuote() {
    let index = Math.floor(Math.random()*9)
    let imgUrl = "url(" + this.props.bg[index] + ")"
    this.setState({
      currentText: this.props.quoteList[index]["text"]
    })
    this.setState({
      currentAuthor: this.props.quoteList[index]["author"]
    })
    container.style.backgroundImage = imgUrl;
  }
  render() {
      let textToTweet = this.state.currentText + " - " + this.state.currentAuthor;
      let makeLink = (input) => {
        let regex = /\s/gi
        let tweet = input.replace(regex, "%20");
        return tweet;
      };
    let link = "https://twitter.com/home?status=" + makeLink(textToTweet);
    console.log(link);
    return(
      <div id="container" className="animated">
        <div id="inner-container">
          <div id="text-container">
            <p id="quote"><i className="fas fa-quote-left"></i> {this.state.currentText}</p>
            <p id="author">- {this.state.currentAuthor} </p>
          </div>
          <div id="icon-container"  className="row">
            <a href={link} target="_blank"><i className="fab fa-twitter-square"></i></a>
            <button type="button" className="btn btn-light " onClick={this.changeQuote} id="changeColor">New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

class Nest extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <App quoteList={quotes} bg={background} />
    );
  }
}

ReactDOM.render(<Nest />, document.getElementById("root"));
