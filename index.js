
let bodyEl = document.querySelector('body')

let imageCount = 12

// making function to fetch images

 async function fetchImages( imageCount){
    let fetchurl = (`https://picsum.photos/v2/list?page=2&limit=${imageCount}`)
    const response = await fetch(fetchurl);
    const images= await response.json();
   
    // create div
    const mainDiv = document.createElement('div')
    mainDiv.classList.add('images')
    mainDiv.classList.add('container-flex')

    let photos = ""

    for (const image of images){
        let url = image.download_url
        // to add the image dimensation as per choice at end of the url.
        url = url.slice(0, url.length - 10) + "/1600/1800";
        photos += `<img class='image' src = "${url}">`
    }
    mainDiv.innerHTML = photos
    bodyEl.appendChild(mainDiv)
 }
 
 fetchImages(imageCount)
 .then(clickImage)

function  clickImage() {
    const photos = document.querySelectorAll('.image')
     for(const photo of photos){
        photo.addEventListener("click", (event)=>{
            const url = event.target.getAttribute("src")
            window.open(url, '_blank')
         })
       
     }
}

// function clickImage(){
//     const parentDiv = document.querySelector('.images')
//     const photos = document.querySelectorAll('.image')
 
//     for (const photo of photos){
//         photo.addEventListener('click', (event) =>{
//             let imageClick = event.target
//             imageClick.classList.add('onscreen')

//             const tempDiv = document.createElement('div')
//             tempDiv.classList.add('outerDiv')

//             parentDiv.replaceChild(tempDiv, imageClick)
//             tempDiv.append(imageClick)

//             tempDiv.addEventListener('click', (event) =>{
//                 tempDiv.removeChild(imageClick)
//                 parentDiv.replaceChild(imageClick, tempDiv)
                
//                 for(const pho of photos){
//                     if (pho.classList.contains('onscreen'))
//                     pho.classList.remove('onscreen')
//                 }
//             })
            
//         })
//     }
// }

// const ur = "https://example.com/images/original-image.jpg"
// let urs = ur.slice(0, ur.length - 10) + "/600/800";
// let rs = urs
// console.log(rs)

//  const ur = 'https://picsum.photos/v2/list?page=2&limit=${count}'
//  let urs = ur.slice(0, ur.length - 9) + "/600/800";
// let rs = urs
// console.log(rs)