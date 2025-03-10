function Book(name, author, pages, read) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const myLibrary = [];

function addBookToLibrary(name, author, pages, read) {
  let book = new Book(name, author, pages, read);
  myLibrary.push(book);
  displayBook(book);
}

function displayAllBooks() {
  resetTable();
  myLibrary.forEach((book) => displayBook(book));
}
function resetTable() {
  const table = document.querySelector("table");
  table.innerHTML = "";
  const row = document.createElement("tr");
  const thName = document.createElement("th");
  thName.textContent = "Name";
  const thAuthor = document.createElement("th");
  thAuthor.textContent = "Author";
  const thPages = document.createElement("th");
  thPages.textContent = "Pages";
  const thRead = document.createElement("th");
  thRead.textContent = "Read";

  table.appendChild(row);
  row.appendChild(thName);
  row.appendChild(thAuthor);
  row.appendChild(thPages);
  row.appendChild(thRead);
}
function displayBook(book) {
  const newRow = document.createElement("tr");

  const tdName = document.createElement("td");
  tdName.textContent = book.name;
  newRow.appendChild(tdName);

  const tdAuthor = document.createElement("td");
  tdAuthor.textContent = book.author;
  newRow.appendChild(tdAuthor);

  const tdPages = document.createElement("td");
  tdPages.textContent = book.pages;
  newRow.appendChild(tdPages);

  const tdRead = document.createElement("td");
  tdRead.textContent = book.read;
  newRow.appendChild(tdRead);

  const table = document.querySelector("table");
  table.appendChild(newRow);
}
resetTable();

addBookToLibrary("Moja knjga", "Aleksa", 54, true);
addBookToLibrary("Njena knjiga", "Marta", 100, false);
