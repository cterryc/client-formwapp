export const objectPost = (inputs) => {
  const objectToPost = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inputs)
  }
  return objectToPost
}

export const objectPatach = (dataToUpdate) => {
  const objectToPost = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataToUpdate)
  }
  return objectToPost
}
