const books = [
  { title: "El Aleph", author: "Jorge Luis Borges" },
  { title: "La ciudad y los perros", author: "Mario Vargas Llosa" },
  { title: "Cien años de soledad", author: "Gabriel García Márquez" },
  { title: "Rayuela", author: "Julio Cortázar" },
  { title: "Ficciones", author: "Jorge Luis Borges" },
  { title: "El hacedor", author: "Jorge Luis Borges" },
  { title: "Los pasos perdidos", author: "Alejo Carpentier" },
  { title: "El reino de este mundo", author: "Alejo Carpentier" },
  { title: "La fiesta del chivo", author: "Mario Vargas Llosa" },
  { title: "La tía Julia y el escribidor", author: "Mario Vargas Llosa" },
  { title: "Crónica de una muerte anunciada", author: "Gabriel García Márquez" },
  { title: "El amor en los tiempos del cólera", author: "Gabriel García Márquez" },
  { title: "Bestiario", author: "Julio Cortázar" },
  { title: "Las armas secretas", author: "Julio Cortázar" },
];

function filterBooksByAuthor(books, authorName) {
  // -----------------(solucion 1 - crea una shallow copy)---------------------
  // const filteredBooks = books.filter(book => book.author.includes(authorName));
  // const modifiedBooks = filteredBooks.map(book => {
  //     book.author = 'J.L.B.';
  //     return book;
  // });
  // ----------------(solucion 2 - crea una deep copy)-------------------------
//   const booksCopy = books.map((book) => {
//     return { ...book
//     }
//   });
//   const filteredBooksCopy = booksCopy.filter((bookCopy) =>
//   bookCopy.author.includes(authorName)
// );
// const modifiedBooksCopy = filteredBooksCopy.map((bookCopy) => {
//   bookCopy.author = "J.L.B.";
//   return bookCopy;
// });
  // ----------------(solucion 3 - crea una deep copy)-------------------------
  const booksCopy = JSON.parse(JSON.stringify(books));
  const filteredBooksCopy = booksCopy.filter((bookCopy) =>
    bookCopy.author.includes(authorName)
  );
  const modifiedBooksCopy = filteredBooksCopy.map((bookCopy) => {
    bookCopy.author = "J.L.B.";
    return bookCopy;
  });
  console.log(modifiedBooksCopy);
}

filterBooksByAuthor(books, "Borges");
console.log(books);