'use strict';
{
  // create list
  let amazingBookTitles = [
    'a_game_of_thrones',
    'the_chronicles_of_narnia',
    'to_kill_a_mockingbird',
    'the_help',
    'gone_girl',
    'city_of_bones',
    'the_princess_bride',
    'life_of_pi',
    'the_lovely_bones',
    'the_hunger_games',
  ];
  //1.3 Function for ul
  /*for (i = 0; i < amazingBookTitles.length; i++) {
    document.write('no' + index(amazingBookTitles));
  }*/

  /*1.4 Make an object (not an array!) containing information for each book.
  Each property of this object should be another(i.e., nested) object with the book ID you thought up in step 1.1 as a key,
  and at least the following properties: title, language and author.*/

  let bookList = {
    a_game_of_thrones: {
      title: 'A Game Of Thrones',
      language: 'english',
      author: 'george_r.r_martin',
      id: '1',
    },
    the_chronicles_of_narnia: {
      title: 'The Chronicles Of Narnia',
      language: 'english',
      author: 'c.s_lewis',
      id: '5',
    },
    to_kill_a_mockingbird: {
      title: 'To Kill a mockingbird',
      language: 'english',
      author: 'harper_lee',
      id: '10',
    },
    the_help: {
      title: 'The Help',
      language: 'english',
      author: 'kathryn_stockett',
      id: '6',
    },
    gone_girl: {
      title: 'Gone Girl',
      language: 'english',
      author: 'gillian_flynn',
      id: '3',
    },
    city_of_bones: {
      title: 'City of Bones',
      language: 'english',
      author: 'cassandra_clare',
      id: '2',
    },
    the_princess_bride: {
      title: 'The Princess Bride',
      language: 'english',
      author: 'william_goldman',
      id: '9',
    },
    life_of_pi: {
      title: 'Life of Pi',
      language: 'english',
      author: 'yann_martel',
      id: '4',
    },
    the_lovely_bones: {
      title: 'The Lovely Bones',
      language: 'english',
      author: 'alice_sebold',
      id: '8',
    },
    the_hunger_games: {
      title: 'The Hunger Games',
      language: 'english',
      author: 'suzanne_collins',
      id: '7',
    },
  };

  /* 1.5 Now change the function from step 1.3 that you used to display the book ID's in a list to take the actual information about the book from the object and display that.
   Make sure you choose the correct HTML elements for each piece of info, for instance, a heading for the title.*/
  /*function favBooks(title, language, author) {
    this.title = 'string ';
    this.language = 'english ';
    this.author = 'name';
  
    return;*/

  // keys
  /*for (let key in listObj) {
    if (listObj.OwnProperty(key)) {
      console.log(key + ' -> ' + listObj[key]);
    }
  }

  bookList.keys(listObj).forEach(function(key) {
    console.log(key, listObj[key]);
  });

  /*let book = document.getElementById('No');
  for (let i = 0; i < books.length; i++) {
    let book = bookImage[i].innerHTML;
    bookList.push(bookImage); */

  /*1.7 Find and download book covers for each book and construct a new object which has as keys the book IDs again, 
  and as value the path to the image source (e.g. { harry_potter_blabla: './img/harry_potter_blabla.jpg', ... }). */

  //My book images with the links
  let bookImage1 = {
    a_game_of_thrones: 'https://i.imgur.com/AoFSoyC.jpg',
    No_5_the_chronicles_of_narnia: 'https://i.imgur.com/N3BkOKG.jpg',
    No10_to_kill_a_mockingbird: 'https://i.imgur.com/pgZlYt9.jpg',
    No6_the_help: 'https://i.imgur.com/YweZVCY.jpg',
    No3_gone_girl: ' https://i.imgur.com/MpnCko8.jpg',
    No2_city_of_bones: 'https://i.imgur.com/c0wHGwp.jpg',
    No9_the_princess_bride: 'https://i.imgur.com/qMbzv2g.jpg',
    No4_life_of_pi: 'https://i.imgur.com/MJm1tqt.jpg',
    No8_the_lovely_bones: 'https://i.imgur.com/cARRH0p.jpg',
    No7_he_hunger_games: 'https://i.imgur.com/cARRH0p.jpg',
  };
  // My book images inside my source folder
  let bookImage = {
    a_game_of_thrones: 'book images/1.jpg',
    the_chronicles_of_narnia: 'book images/5.jpg',
    to_kill_a_mockingbird: 'book images/10.jpg',
    the_help: 'book images/6.jpg',
    gone_girl: 'book images/3.jpg',
    city_of_bones: 'book images/2.jpg',
    the_princess_bride: 'book images/9.jpg',
    life_of_pi: 'book images/4.jpg',
    the_lovely_bones: 'book images/8.jpg',
    the_hunger_games: 'book images/7.jpg',
  };

  /*1.8 Loop over these entries(hint: Object.keys(objectName) gives you an array containing the keys).Then write a function which places an image at the corresponding li element.Remember that objects are not ordered, so you cannot guarantee that the first key is the first li element.
   (Hint: you could give each li item an id tag by modifying the function you made before.*/
  /*
  let img = document.images;
  let string = ' ';
  let i;
  for (i = 0; i < img.length; i++) {
    string = string + [i].src + '<br>';
  }

  function setup() {
    image = createImage(100);
    images.position(40);
  }

  // example
  /*function Book(title, language, author, src) {
    this.title = title;
    this.language = language;
    this.author = author;
    this.src = src;
    let container = document.getElementById('wrapper');
    let img = document.createElement('img');

  
  }
  //my example
  /*let newLi = document.createElement('li');
    let newA = document.createElement('a');
    
    let menu = document.getElementById('wrapper').getElementsByTagName('ul')[0];
    menu.appendChild(newLi);
    newLi.appendChild(newA);
    
    document.body.appendChild(menu);*/
  /*------------- this is for me ---------------------
    function createListItem(text) {
      let li = document.createElement('li');
      li.textContent = text;
      return li;
    }
  
    function appendChildren(parent, children) {
      children.forEach(function(child) {
        parent.appendChild(child);
      });
    }
    let myList = document.getElementById('my-list');
    let items = [createListItem('bookList'), createListItem('list')];
    appendChildren(myList, items); */

  // these was the best functions that made my page happened, after all tried many examples and tutorials

  let myBody = document.getElementById('wrapper');
  let elem = document.createElement('h1');
  myBody.appendChild(elem);
  let elemText = document.createTextNode('10 Amazing Books');
  elem.appendChild(elemText);
  let myDiv = document.createElement('div');
  myBody.appendChild(myDiv);

  // 2 different functions argument one for parent and children
  for (let key in bookList) {
    let newUl = document.createElement('ul');
    myDiv.appendChild(newUl);
    let source = bookImage[key];
    let bookCover = document.createElement('img');
    bookCover.setAttribute('src', source);
    newUl.appendChild(bookCover);

    for (let key2 in bookList[key]) {
      let myLi = document.createElement('li');
      newUl.appendChild(myLi);
      let liElement = bookList[key][key2];
      myLi.innerHTML = liElement;
    }
  }
  document.myBody;
}
// my example ---------------------------------------------------------
/*let bookImages = document.getElementsByTagName('http://www.w3.org/1999/xhtml');
for (let bookImageIndex in bookImages) {
  let no = bookImages[bookImageIndex].querySelector('No');*/

/*let a = document.createElement('a');
  let linkText = document.createTextNode('my_title_text');
  a.appendChild(linkText);
  a.title = 'my_title_text';
  a.href = 'http://example.jpg';*/
