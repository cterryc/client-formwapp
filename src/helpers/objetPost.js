export const objectPost = (inputs) => {
  const objectToPost = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inputs)
  }
  return objectToPost
}
