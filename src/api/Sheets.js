const spreadSheetId = '16orC3dyb1ASO76p7TZttgEB0FMRSl4iuv-9AHvSd_6E';
const rotaId = '1LDYrXR_gUf1hdZYin4yJFFE6gbXkDIuFqZnQqo32Mj8';

let today = new Date();
let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

export const UpdateSpreadSheet = (name, email, token, values) => {
    values.unshift(date, name, email);
    //let sheet = team;

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetId}/values/!A1:X1:append?valueInputOption=USER_ENTERED`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
                majorDimension: 'ROWS',
                values: [values,
                []]
        })
      })
};

export const ReadSpreadSheet = (token) => {
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${rotaId}/values`, {
    method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({})
  })
   
}