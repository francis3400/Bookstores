import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoaded: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/E2qzz8QdXa8h3oCKPE3K/books',
  );
  const data = await response.json();
  return data;
});

export const addBook = createAsyncThunk('books/addBook', async ({ book }) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/E2qzz8QdXa8h3oCKPE3K/books';
  const dat = {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: book.category,
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(dat),
  });
  return response.text();
});

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async ({ item_id }) => {
    const response = await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/E2qzz8QdXa8h3oCKPE3K/books/${item_id}`,
      {
        method: 'delete',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ item_id }),
      },
    );

    response.text();
    return { item_id };
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const fresh = Object.entries(action.payload);
      return {
        books: fresh.map((book) => ({
          item_id: book[0],
          ...book[1][0],
        })),
      };
    });

    builder.addCase(addBook.fulfilled, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoaded = true;
    });
    builder.addCase(removeBook.fulfilled, (state, action) => ({
      books: state.books.filter(
        (book) => book.item_id !== action.payload.item_id,
      ),
    }));
  },
});

export default bookSlice.reducer;
