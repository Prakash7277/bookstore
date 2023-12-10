import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  constructor(private userService:UserService){
    
  }
  Books = [{
    name :"Rich dad poor dad!",
    Image: "https://media.shortform.com/covers/png/rich-dad-poor-dad-cover.png",
    price : 250,
    // rollNum : "s1-201"
  },
  {
    name:"How to Fly",
    Image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71lHQNZaWRL._SY425_.jpg",
    price : 199
  },
  {
    name :"You Can",
    Image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61aJc8wQX4L._SY425_.jpg",
    price : 150
  },
  {
    name :"You Can Do This!",
    Image: "https://nextlevelimedia.com/wp-content/uploads/2017/10/You-Can-Do-This-200px-width.png",
    price : 99
  },
  {
    name :"How to enjoy your life and your job",
    Image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61tMXtw3aGL._SY425_.jpg",
    price : 78
  },
  {
    name :"Meditation and Its Methods by Swami Vivekananda",
    Image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81lw3sDBxIL._SY425_.jpg",
    price : 300
  },
  {
    name :"How To Stop Worrying And Start Living",
    Image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71+cWkMATuL._SY425_.jpg",
    price : 179
  },
  {
    name :"Think And Grow Rich [Original Edition",
    Image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61B84NiWabL._SY425_.jpg",
    price : 98
  },
  {
    name :"Autobiography of a Yogi",
    Image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71FxngnkNQL._SY425_.jpg",
    price : 240
  },
  {
    name :"How To Win Friends and Influence People ",
    Image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71wrQ0bR8+S._SY425_.jpg",
    price : 149
  }]


  //add to cart
  addTocart(){
    this.userService.addTocart();
    console.log("good mor")
  }

  filtered_book =this.Books
  search_by=""
  
  get search_by_value(){
    return this.search_by;
  
  }


  set search_by_value(book_name)
  {
    this.search_by=book_name
    this.filtered_book= this.Books.filter(book =>book.name.toLowerCase().
    includes (this.search_by.toLowerCase()))

    console.log(book_name);
    console.log(this.search_by);
  }



}
