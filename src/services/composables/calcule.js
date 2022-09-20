const endpoint = "";

const calcule = (params) => {
  if (typeof params === 'object') {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: { params } })
    }).catch((error) => {
      return {
        data: {
          errors: { error }
        }
      }
    });
  }
  return console.error('type of the parameter incorrect, the parameter need to be a object.');
}

export default { calcule };
export { calcule };
