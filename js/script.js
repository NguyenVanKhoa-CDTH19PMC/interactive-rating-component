window.onload = function () {
    const ratingItems = [...document.getElementsByClassName("rating-item")];
    let ratingScore = 0;
    function chooseRating(ratings) {
        ratings.forEach(
            r => r.onclick = () => {
                if(r.className.indexOf("rating-item-selected")<0)
                {
                    for (var i = 0; i < ratings.length; i++)
                    {
                        ratings[i].classList.remove("rating-item-selected");
                        }
                    r.classList.add("rating-item-selected");
                   document.getElementById("rating-score").innerHTML = ratings.indexOf(r) + 1;
                }
                else
                    r.classList.remove("rating-item-selected")
            }
        );
    }
    function submitRating(ratingScore) {
        document.getElementById("rating-form").addEventListener('submit', function (event) {
            event.preventDefault();
            document.getElementById("rating-card").style.display = "none";
            document.getElementById("thank-card").style.display = "flex";
        });
        
    }
    submitRating(ratingScore);
    chooseRating(ratingItems);

}