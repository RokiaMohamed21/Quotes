var secBottom  = document.getElementById('secBottom')



var QuotesOfAuthors = [ 
{ quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author: `― Albert Einstein`
},
{  quote:`“So many books, so little time.”`,
   author :`― Frank Zappa`
},
{  quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
   author: `― Bernard M. Baruch`
},  

]



function  Quotes() {
    
  var randonNum = Math.floor(Math.random()* QuotesOfAuthors.length )

  console.log(randonNum)
  document.getElementById('quotes').innerHTML =QuotesOfAuthors[randonNum].quote;
  document.getElementById('authors').innerHTML =QuotesOfAuthors[randonNum].author;

  

  }

