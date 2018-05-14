import React from "react";
import {
  NavLink
} from 'react-router-dom'
import "./ReadingList.css";

import { READ, REREAD, NOT_READ, READING } from "../constants";

let id = 0;

//Helper
const getKey = () => ++id;

/**********
 * BookRow
 **********/
class BookRow extends React.Component {
  render() {
    const {action, name, url} = this.props;

    return (
      <li className="BookRow">
        {action !== READ ? <h3>{name}</h3> : <h3><strike>{name}</strike></h3>} 
        <a href={url} target="_blank" >{url}</a>
      </li>

    )
  }
}

/**************
 * BookSection
 **************/
class BookSection extends React.Component {

  render() {
    let {action, books} = this.props;


    let comp = null;
    let paragraph = "";

    if(action === READ) {
      action = "Books I Have Read";
      paragraph = "These are books I have read since 2017.";
    }else if(action === NOT_READ) {
      action = "Books I Will Read";
      paragraph = "These are books I plan on reading in 2018.";
    }else if(action === REREAD) {
      action = "Books I Will Reread";
      paragraph = "These are books I plan on rereading in 2018.";
    }else if(action === READING) {
      action = "Books I Am Reading";
      paragraph = "These are books I reading at the moment.";
    }

    if(books.length > 0) {
      comp = (
        <div className="BookSection">
          <h1>{action}</h1>
          <p>{paragraph}</p>
          <ul>
          {
            books.map(({name, url, imageUrl}) => (
              <BookRow
                action={action}
                key={getKey()}
                name={name}
                url={url}
                imageUrl={imageUrl}
              />))
          }
          </ul>
        </div>
      )
    }

    return comp;
  }
}

/**************
 * ReadingList
 **************/
export default class ReadingList extends React.Component {

  constructor() {
    super();

    this.books =[];

    //Read books
    this.addBook("9 Algorithms that Changed the Future", READ, "https://www.amazon.com/Nine-Algorithms-That-Changed-Future/dp/0691158193");
    this.addBook("The Simple Path to Wealth", READ, "https://www.amazon.com/Simple-Path-Wealth-financial-independence/dp/1533667926");
    this.addBook("Go Web Programming", READ, "https://www.manning.com/books/go-web-programming");
    this.addBook("Kubernetes Up and Running", READ, "http://shop.oreilly.com/product/0636920043874.do");
    this.addBook("Designing Data-Itensive Applications", READ, "https://dataintensive.net/");
    this.addBook("Thinking with Type", READ, "http://thinkingwithtype.com/");
    this.addBook("The Little Schemer", READ, "https://www.amazon.com/Little-Schemer-Daniel-P-Friedman/dp/0262560992");
    this.addBook("Logo Design Love", READ, "https://www.logodesignlove.com/");

    //Currently reading
    this.addBook("Distributed Systems", READING, "https://www.distributed-systems.net/index.php/books/distributed-systems-3rd-edition-2017/");
    this.addBook("Mysql in a Nutshell", READING, "http://shop.oreilly.com/product/9780596514334.do");
    this.addBook("The Bible - King James Version", READING, "https://www.bible.com/");

    //Future books
    this.addBook("Elements of Distributed Computing", NOT_READ, "https://www.wiley.com/en-us/Elements+of+Distributed+Computing-p-9780471036005");
    this.addBook("Purely Functional Data Structures", NOT_READ, "https://www.amazon.com/Purely-Functional-Structures-Chris-Okasaki/dp/0521663504");
    this.addBook("Transitions and Animcations in CSS", NOT_READ, "https://www.amazon.com/Transitions-Animations-CSS-Adding-Motion/dp/149192988X");
    this.addBook("The Go Programming Language", NOT_READ, "https://www.amazon.com/Programming-Language-Addison-Wesley-Professional-Computing/dp/0134190440");

    //Reread books
    this.addBook("Building Microservices", REREAD, "http://shop.oreilly.com/product/0636920033158.do");
  }

  addBook(name, readState=NOT_READ, url){ 
    this.books.push({
      name,
      readState, 
      url
    });
  }

  render() {
    const { action } = this.props;

    const books = this.books.filter(book => book.readState === action );

    return (
      <div className="ReadingList text">
          <BookSection action={action} books={books} />
          <div className="Reading-recommendation">
            <a href="mailto:nickstradford@gmail.com?Subject=Book%20Recommendation" target="_top">Recommend me a book!</a>
          </div>
          <ul className="Reading-actions">
            <li><NavLink exact activeClassName='active' to={`${READ}`}>Read</NavLink></li>
            <li><NavLink exact activeClassName='active' to={`${REREAD}`}>Reread</NavLink></li>
            <li><NavLink exact activeClassName='active' to={`${NOT_READ}`}>Not Read</NavLink></li>
            <li><NavLink exact activeClassName='active' to={`${READING}`}>Reading</NavLink></li>
          </ul>
      </div>
    )
  }
}
