const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'EwswTcYuzU4aOuTDDUU0';

export const getBooks = async () => {
  const response = await fetch(`${baseUrl}/apps/${apiKey}/books`);
  return response.json();
};

export const postBook = async (book) => {
  const response = await fetch(`${baseUrl}/apps/${apiKey}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(book),
  });
  return response;
};

export const postDeleteBook = async (id) => {
  const response = await fetch(`${baseUrl}/apps/${apiKey}/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};
