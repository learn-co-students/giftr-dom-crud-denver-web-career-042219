document.addEventListener('DOMContentLoaded', () => {
  console.log(gifts)
  let giftsUl = document.querySelector('.gift-list')

  const appendGifts = (gifts) =>{
    gifts.map(gift =>{
      const giftImg = document.createElement('img')
      giftImg.src = gift.image
      const giftName = document.createElement('li')
      giftName.innerText = gift.name
      giftsUl.append(giftName, giftImg)
    })
  }
  appendGifts(gifts)
  let searchInput = document.getElementById('filter-input')
  let filter = searchInput.value
  console.log(filter)
})
