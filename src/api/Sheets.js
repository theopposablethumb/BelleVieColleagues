const spreadSheetId = '1FS_8aXPeRqzTDXShYoNWcoZZZjC3n7JthW_PyQK038w';

let today = new Date();
let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

export const UpdateSpreadSheet = (name, email, team, token, values) => {
    values.unshift(date, name, email, team);
    console.log(values);
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetId}/values/!A1:X1:append?valueInputOption=USER_ENTERED`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
                majorDimension: 'ROWS',
                values: [values, []]
        })
      })
};