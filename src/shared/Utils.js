export const sizes = ["Tiny", "Small", "Medium", "Large"]
export const quantities = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
export const colors = ['Strawberry', 'Blackberry', 'Crazyberry', 'Fire Orange']

export const getFirstImage = (shirt) => {
  const firstColor = shirt.colors && Object.keys(shirt.colors)[0]

  return shirt.colors[firstColor]
}

export const getItemsCount = (cart) => {
  let itemsCount = 0
  for (let i=0; i<cart.length; i++) {
    itemsCount += parseInt(cart[i].quantity)
  }
  return itemsCount
}