

const books = [
    { title: 'El Aleph', author: 'Jorge Luis Borges' },
    { title: 'La ciudad y los perros', author: 'Mario Vargas Llosa' },
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
    { title: 'Rayuela', author: 'Julio Cortázar' },
    { title: 'Ficciones', author: 'Jorge Luis Borges' },
    { title: 'El hacedor', author: 'Jorge Luis Borges' },
    { title: 'Los pasos perdidos', author: 'Alejo Carpentier' },
    { title: 'El reino de este mundo', author: 'Alejo Carpentier' },
    { title: 'La fiesta del chivo', author: 'Mario Vargas Llosa' },
    { title: 'La tía Julia y el escribidor', author: 'Mario Vargas Llosa' },
    { title: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez' },
    { title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
    { title: 'Bestiario', author: 'Julio Cortázar' },
    { title: 'Las armas secretas', author: 'Julio Cortázar' }
];
      
function filterBooksByAuthor(books, author) {
    const filteredBooks = books.filter(book => book.author === author);
    const modifiedBooks = filteredBooks.map(book => {
        book.author = 'J.L. Borges';
        return book;  //this modify the original "book" array . 
    });
    console.log(modifiedBooks);
};

filterBooksByAuthor(books, 'Jorge Luis Borges');
console.log(books);

// Primera parte: dado un array de libros, implementar una función filterBooksByAuthor( ) que reciba por parámetros
// dicho array y un string con el nombre de un autor, y devuelva un nuevo array con libros del autor indicado.
// filter Books By Author(books, ‘Jorge Luis Borges’) return ==> [
//   { title: 'El Aleph', author: 'Jorge Luis Borges' },
//   { title: 'Ficciones', author: 'Jorge Luis Borges' },
//   { title: 'El hacedor', author: 'Jorge Luis Borges' }
// ];

// Segunda parte: a partir de lo realizado en la primera parte, utilizar la función para obtener todos los libros
// de un autor a elección, luego mediante métodos de array modificar el nombre del autor de todos los libros filtrados.
// Observar que si se muestra en consola los libros filtrados se verá el autor modificado.
// ¿Qué sucede si se muestra en consola el array original?

// Tercera parte: modificar la función de la primera parte para que ahora funcione si mando el nombre completo del autor,
// o solo su apellido. Por ejemplo, la función debe devolver lo siguiente, ya sea si le mando ‘Jorge Luis Borges’ o ‘Borges’:
// return ==> [
//   { title: 'El Aleph', author: 'Jorge Luis Borges' },
//   { title: 'Ficciones', author: 'Jorge Luis Borges' },
//   { title: 'El hacedor', author: 'Jorge Luis Borges' }
// ];

// Cuarta parte: teniendo en cuenta lo observado en la segunda parte, corregir ese comportamiento
//  de la forma que considere apropiada.
