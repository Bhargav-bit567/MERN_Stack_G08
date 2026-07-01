//var,let,const

var btn=document.getElementById("submit")
// console.log(btn)
// document.querySelector("")
btn.addEventListener("click",handleClick)
function handleClick(){
   
    var image=document.getElementById("url")
    var title=document.getElementById("title")
    var rating=document.getElementById("rating")

    var inpImage=image.value
    var inpTitle=title.value
    var inpRating=rating.value

    var MovieDiv=document.getElementById("movieCards")
    MovieDiv.innerHTML=`
    <div class="card">
                <img src ="${inpImage}" alt="">
                <p>Movie : ${inpTitle}</p>
                <h3>Rating: ${inpRating}</h3>
             </div>`
   console.log(inpImage)
}