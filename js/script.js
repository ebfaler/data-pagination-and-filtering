/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering 
*/





// Global
const itemsPerPage = 9;

/*
`showPage` function creates and inserts/append sthe elements needed to display a "page" of nine students
*/
function showPage(list, page) {

// list and page parameters represent student data that will be passed as an argument when the function is called.

let startIndex = (page* itemsPerPage) - itemsPerPage;
let endIndex = page* itemsPerPage;
let studentList = document.querySelector('.student-list');

// setting student-list variable to an empty string will remove any students that might have previously been displayed.
studentList.innerHTML = "";

for(let i=0; i<list.length; i++) {
 if( i >= startIndex && i <= endIndex) {

   let studentItem = `<li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
      <h3>Ethel Dean</h3>
      <span class="email">ethel.dean@example.com</span>
    </div>
    <div class="joined-details">
      <span class="date">Joined 12-15-2005</span>
    </div>
  </li>`;

  studentList.innerHTML= studentItem;
 }
}


};

showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
