const quotes = [
{ quote : "The First",
    author:"공준우"
},

{ quote : "The second",
author:"김긱믹"
},

{ quote : "The third",
author:"아니츠"

},

{ quote : "The fourth",
author:"바오냐"

},

{ quote : "The fifth",
author:"코런더"

},

{ quote : "The sixth",
author:"니이니"

},

{ quote : "The seventh",
author:"바야바"

},
{ quote : "The eighth",
author:"바야바"

},
{ quote : "The ninth",
author:"zz"

},
{ quote : "The tenth",
author:"바야ss바"

},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote  = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;