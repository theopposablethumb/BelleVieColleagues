const spreadSheetId = '16orC3dyb1ASO76p7TZttgEB0FMRSl4iuv-9AHvSd_6E';

let today = new Date();
let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

let FetchSpreadSheet = (name, email, token, team, values) => {
    values.unshift(date, name, email);
    let sheet = team;
    console.log(token);

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetId}/values/${sheet}!A1:X1:append?valueInputOption=USER_ENTERED`, {
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
    }

export default FetchSpreadSheet;