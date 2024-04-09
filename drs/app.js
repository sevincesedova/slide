
let data = [];
let i=0
const product=document.createElement("div")
product.classList.add("product")
const showdata=()=>{
    data.map((a)=>{

       

        const photo_img=document.createElement("div")
        photo_img.classList.add("photo_img");

        const photo=document.createElement("img")
        photo.src=a.image
        photo_img.append(photo)
        product.append(photo_img)
        
    })
    
}

document.body.append(product)
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((responseData) => {
    data = responseData;
    showdata()
  })
  
 let slideIndex = 0;
  function showSlides() {
    for (i = 0; i < data.length; i++) {
        data[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > data.length) {slideIndex = 1}
    data[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
  }

