export const labelVerify = (id, preview) => {
  const findLabel = preview.find(ele => ele.id === id)
  return findLabel
}
