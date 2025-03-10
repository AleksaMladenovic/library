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
  const table = document.querySelector("table");
  table.appendChild(newRow);

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
  const checkbox = document.createElement("input");
  checkbox.setAttribute('type','checkbox');
  if(book.read){
    checkbox.checked = true;
  }
  checkbox.addEventListener('change',()=>{
    let fiddenBook = myLibrary.find((el)=>el==book);
    fiddenBook.read = checkbox.checked;
  });
  tdRead.appendChild(checkbox);
  newRow.appendChild(tdRead);

  const btnRemoveBook = document.createElement('button');
  btnRemoveBook.textContent = 'remove';
  const tdRemoveBook = document.createElement('td');
  tdRemoveBook.appendChild(btnRemoveBook);
  newRow.appendChild(tdRemoveBook);

  btnRemoveBook.addEventListener('click',()=>{
    table.removeChild(newRow);
  });
}


const btnAddNewBook = document.querySelector("#btnAddNewBook");
const dialogAddNewBook = document.querySelector("dialog.addBook");
btnAddNewBook.addEventListener('click',()=>{
    dialogAddNewBook.showModal();
});

const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener('click',()=>{
    let name = document.querySelector("input#name").value;
    let author = document.querySelector("input#author").value;
    let pages = document.querySelector("input#pages").value;
    let read = document.querySelector("input#read").checked;

    addBookToLibrary(name,author,pages,read);
});

addBookToLibrary("Moja knjga", "Aleksa", 54, true);
addBookToLibrary("Njena knjiga", "Marta", 100, false);
