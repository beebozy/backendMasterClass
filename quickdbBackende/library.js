
class Library {
    constructor(name, location, numberOfBooks) {
      this.name = name;
      this.location = location;
      this.numberOfBooks = numberOfBooks;
      this.categories = ["Fiction", "Non-Fiction", "Science"];
      this.books = [];
    }
  
    
    getAvailableBooks() {
      return this.books.filter(book => book.isAvailable).map(book => book.title);
    }
  
    
    addBook(newBook) {
      this.books.push(newBook);
      this.numberOfBooks += 1;
    }
  
    
    calculateAverageRating(title) {
      const book = this.books.find(book => book.title === title);
      if (!book) return null;
      const totalRatings = book.ratings.reduce((sum, rating) => sum + rating, 0);
      return (totalRatings / book.ratings.length).toFixed(2);
    }
  }
  
  
  const library = new Library("City Central Library", "Downtown", 0);
  
  
  library.addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isAvailable: true,
    ratings: [5, 4, 4.5]
  });
  library.addBook({
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isAvailable: true,
    ratings: [5, 5, 4]
  });
  library.addBook({
    title: "1984",
    author: "George Orwell",
    isAvailable: false,
    ratings: [4.5, 4, 4.8]
  });
  
  /
  console.log(`Library Name: ${library.name}`);
  console.log("Available Books:", library.getAvailableBooks());
  
  const bookTitle = "The Great Gatsby";
  console.log(
    `Average Rating for "${bookTitle}":`,
    library.calculateAverageRating(bookTitle)
  );
  
  
  library.categories.push("Technology");
  console.log("Updated Categories:", library.categories);
  
  
  for (const key in library) {
    const value = library[key];
    console.log(`Key: ${key}`);
    if (Array.isArray(value)) {
      console.log("Values:");
      value.forEach(element => console.log(element));
    } else {
      console.log("Value:", value);
    }
  }
  
  const duplicateLibrary = { ...library };
  

  console.log("Object Comparison (==):", library == duplicateLibrary); 
  console.log("Object Comparison (===):", library === duplicateLibrary); 
  
  