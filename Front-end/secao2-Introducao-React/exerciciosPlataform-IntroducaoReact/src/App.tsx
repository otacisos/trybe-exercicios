import HelloWorld from './components/helloWorld';
import Footer from './components/footer';
import Book from './components/book';

const book1 = {
  title: 'the godfather',
  pages: 433,
  isRead: true,
  isFavorite: false,
};

const book2 = {
  title: 'the little prince',
  pages: 92,
  isRead: true,
  isFavorite: true,
};

const book3 = {
  title: 'clean code',
  pages: 92,
  isRead: false,
  isFavorite: false,
};

function App() {
  return (
    <div>
      <HelloWorld />
      <p>Meus livros:</p>
      <ul>
        {/* <li>✅ ⏳ Nome (X páginas) 🥰🥰🥰</li> */}
        <Book
          book={ book1 }
        />
        <Book
          book={ book2 }
        />
        <Book
          book={ book3 }
        />
      </ul>
      <Footer />
    </div>
  );
}

export default App;
