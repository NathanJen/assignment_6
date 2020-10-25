export const getFirstImage = (shirt) => {
  const firstColor = shirt.colors && Object.keys(shirt.colors)[0]

  return shirt.colors[firstColor]
}