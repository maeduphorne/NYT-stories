const apiCalls = {
  fetchCountriesData: ()  => {
      return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=vL2ZALsvqjevKxlzZSCBoSF3YWZ102OD')
          .then((response) => checkForErrors(response))
        
  }
}

const checkForErrors = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw `${response.status} ERROR. Could not access server data.`
  }
} 

export default apiCalls;