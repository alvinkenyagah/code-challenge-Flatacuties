document.addEventListener("DOMContentLoaded", () => {
  addEventListener("submit", (event) => {
    event.preventDefault();

    let votes = document.querySelector("#votes").value;
    let votecount = document.querySelector("#vote-count");

    if (isNaN(votes)) {
      votes = 0;
    } 

    // additionalVotes+=votes;


       votecount.innerHTML = votes;

       const reset = document.querySelector("#reset-btn");
       reset.addEventListener("click", () => {
         votecount.innerHTML = "0";
       });


  });


});




