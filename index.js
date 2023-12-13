let userName = document.getElementById("user");
userName.innerText = localStorage.getItem("username");
let AllBoxes = document.querySelectorAll(".box");
let ImageGit = document.querySelectorAll(".gift");
let selectdBoxes = [];
let ImagesArray = [
  "./assets/candy1.png",
  "./assets/candy2.png",
  "./assets/candy3.png",
  "./assets/candy4.png",
  "./assets/candy5.png",
  "./assets/candy6.png",
  "./assets/danger1.png",
  "./assets/danger2.png",
  "./assets/danger3.png",
  "./assets/danger4.png",
  "./assets/danger5.png",
  "./assets/danger6.png",
];

function UserclickFunction(event) {
  let Id = event.target;
  console.log(Id);
  //   AllBoxes[index].innerHTML=" ";
  //   let ImageIndex = ImagesArray[Math.floor(Math.random() * ImagesArray.length)];
  //   let Image = document.createElement("img")
  //   Image.src = ImageIndex
  //   Image.style.width  = "100px"
  //   ImageGit[index].style.display="none";
  //   AllBoxes[index].appendChild(Image)
}
console.log(AllBoxes);

// AllBoxes.forEach((EachDiv, index) => {
//   EachDiv.addEventListener("click",  UserclickFunction);
//   console.log(EachDiv);
// });
for (let i = 0; i < AllBoxes.length; i++) {
  AllBoxes[i].addEventListener("click", UserclickFunction);
}
