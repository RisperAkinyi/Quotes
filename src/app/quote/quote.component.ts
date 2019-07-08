import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';
import { QuoteFormComponent } from '../quote-form/quote-form.component';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() authorName: QuoteFormComponent;
  @Input() quote: any;
  @Input() submitByName: any;
  @Input() quoteUpdate: QuoteFormComponent;

  Id = 7;

  quotes = [
    new Quotes(
      1,
      'Rainer Maria Rilke',
      'The only journey is the journey within.',
      'Natty',
      new Date(2019, 2, 8),
      0,
      0
    ),
    new Quotes(
      2,
      'Risper Akinyi',
      'Some of the most comforting words in the universe are ‘me too.’ That moment when you find out that your struggle is also someone else’s struggle, that you’re not alone, and that others have been down the same road.',
      'Nobat',
      new Date(2019, 1, 13),
      0,
      0
    ),
    new Quotes(
      3,
      'Fred Rodgers',
      'The pessimist sees difficulty in every opportunity. The optimist sees opportunitty in every difficulty.Anything that’s human is mentionable, and anything that is mentionable can be more manageable. When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary.',
      'Orissy',
      new Date(2018, 11, 3),
      0,
      0
    ),
    new Quotes(
      4,
      'Unknown',
      'The strongest people are those who win battles we know nothing about.',
      'Talam',
      new Date(2018, 5, 9),
      0,
      0
    ),

  ];
  showDesc(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    this.quotes[index].showBtn = !this.quotes[index].showBtn;
  }

  deleteQuote(quoteDelete, index) {
    if (quoteDelete) {

      this.quotes.splice(index, 1);
    }
  }


  upVoter(index) {
    let i: number;
    i = this.quotes[index].upVote;
    i++;
    this.quotes[index].upVote = i;
    console.log('this i: ' + i);
  }

  dnVoter(index) {
    let j: number;
    j = this.quotes[index].dnVote;
    j++;
    this.quotes[index].dnVote = j;
  }

  highest(arr) {
    arr = [];
    this.quotes.forEach(quote => {
      arr.push(quote.upVote);
    });
    const high = Math.max.apply(Math, arr);
    return high;
  }

  addQuote(quote) {
    this.quotes.unshift(quote);
    console.log(this.quotes);
  }

  constructor() { }

  ngOnInit() {

    const arr = [];
    this.quotes.forEach(quote => {
      arr.push(quote.upVote - quote.dnVote);
    });
    const high = Math.max.apply(Math, arr);
  }

}
