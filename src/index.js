document.addEventListener("DOMContentLoaded", () => {
    const form =document.getElementById('votes-form')
    const votecount = document.querySelector("#vote-count");
    let currentVotes = 0;
  
    document.addEventListener("submit", (event) => {
      event.preventDefault();
      
  
      let votes = parseInt(document.querySelector("#votes").value);
      if (isNaN(votes)) {
        votes = 0;
      }
      currentVotes += votes;
      votecount.innerHTML = currentVotes;
      form.reset()
    });
  
    const resetBtn = document.querySelector("#reset-btn");
    resetBtn.addEventListener("click", () => {
      currentVotes = 0;
      votecount.innerHTML = currentVotes;
    });















  });
  