document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)
  const body = document.body
  const giftList = document.getElementById('gift-list')

  gifts.forEach(function(gift){
    // console.log(gift)
    let li = document.createElement('li')
    li.innerText = gift.name
    li.innerHTML += "<br> <a>Edit</a> <a>Delete</a>"
    giftList.appendChild(li)
    let img = document.createElement('img')
    img.src = gift.image
    img.width = '80'
    giftList.appendChild(img)
  })


  searchForm = document.getElementById('filter-input')
  searchForm.addEventListener('input', function (e) {
    e.preventDefault()
    let child = giftList.lastElementChild
    while (child) { 
        giftList.removeChild(child)
        child = giftList.lastElementChild 
    } 
    searchQuery = document.querySelector('input').value
    gifts.forEach(function(data){
      if(data.name.includes(searchQuery)){
        let li = document.createElement('li')
        li.innerText = data.name
        giftList.appendChild(li)
        let img = document.createElement('img')
        img.src = data.image
        img.width = '80'
        giftList.appendChild(img)
      }
    })
  })

  creationForm = document.getElementById('gift-form')
  creationForm.addEventListener('submit', function (e){
    e.preventDefault()
    let giftName = document.getElementById('gift-name-input').value
    let giftImg = document.getElementById('gift-image-input').value
    let li = document.createElement('li')
    li.innerText = giftName
    giftList.appendChild(li)
    let img = document.createElement('img')
    img.src = giftImg
    img.width = '80'
    giftList.appendChild(img)
    document.getElementById('gift-name-input').value = ""
    document.getElementById('gift-image-input').value = ""
  })


})