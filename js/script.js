/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering 
*/

/*
`showPage` function creates and inserts/append the elements needed to display a "page" of nine students
*/
const itemsPerPage = 9;
function showPage(list, page) {

   // list and page parameters represent student data that will be passed as an argument when the function is called.

   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = (page * itemsPerPage) - 1;
   let studentList = document.querySelector('.student-list');

   // setting student-list variable to an empty string will remove any students that might have previously been displayed.
   studentList.innerHTML = "";

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex) {

         let studentItem = `<li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
      <h3> ${list[i].name.first} ${list[i].name.last}</h3>
      <span class="email">${list[i].email}</span>
    </div>
    <div class="joined-details">
      <span class="date">Joined ${list[i].registered.date}</span>
    </div>
  </li>`;

         studentList.insertAdjacentHTML('beforeend', studentItem);
      }   
   }

};
//calling the function
showPage(data, 1);


/*
`addPagination` function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

   let paginationButtons = Math.ceil((list.length) / itemsPerPage);
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = "";

   for (let i = 0; i < paginationButtons; i++) {

      let button = (`<li>
                    <button type="button">${i + 1}</button>
                    </li>`);

      linkList.insertAdjacentHTML('beforeend', button);
   }


   const buttons = linkList.getElementsByTagName("button");
   if(buttons.length > 0 ){
      buttons[0].className = "active";
   }
   else {
      const studentList = document.querySelector('.student-list');
      studentList.innerHTML =  
      `<h3>No Results Found</h3>`;
   }

   /* click event listener for linkList*/
   linkList.addEventListener('click', (e) => {

      if (e.target.tagName === "BUTTON") {
         // loop over any button that has class active and remove class
         for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains("active")) {
               buttons[i].classList.remove("active");
            }
         }
         // adding active class to button clicked and passing textContent to load the new page
         e.target.className = "active";
         //textContent gets the button number
         let newPage = e.target.textContent;
         showPage(list, newPage);
      }
   })
};
//calling the function
addPagination(data);



/* 
Adding search functionality
*/

const header = document.querySelector('.header');
const searchHTML = `<label for="search" class="student-search">
<span>Search by name</span>
<input id="search" placeholder="Search by name...">
<button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`;
header.insertAdjacentHTML('beforeend', searchHTML);


//global search variables

const studentSearchArea = document.querySelector('.student-search');
const searchBar = studentSearchArea.querySelector('#search');
const searchButton = studentSearchArea.getElementsByTagName('button');
const studentItems = document.querySelectorAll('.student-item');

//function to filter by first and last names

function search(searchTerm){

   const filteredPeople = data.filter((person) => {
      const name = `${person.name.first} ${person.name.last}`.toLowerCase();
      return name.includes(searchTerm);

   });
   showPage(filteredPeople, 1);
   addPagination(filteredPeople);
}

//adding an event listener to searchBar
searchBar.addEventListener('keyup', (e) => {
   const searchTerm = e.target.value.toLowerCase();
   search(searchTerm);
});


//making searchButton clickable
searchButton[0].addEventListener('click', (e) => {
   const searchTerm = searchBar.value.toLowerCase();
   search(searchTerm);
});
