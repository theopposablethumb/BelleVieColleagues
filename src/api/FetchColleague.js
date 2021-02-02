let endpoint = "https://api.hrpartner.io/bellevie";

let FetchProfile = () => {
  fetch(endpoint, {
    method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.HR_PARTNER,
      }
    }).then(response => {
      if (response.ok) {
        console.log(response);
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message)
    })
}

export default FetchProfile;