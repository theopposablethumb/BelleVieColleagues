let endpoint = "https://api.hrpartner.io/employees";

let FetchProfile = () => {
  fetch(endpoint, {
    method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.HR_PARTNER,
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