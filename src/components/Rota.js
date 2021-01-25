import {ReadSpreadSheet} from '../api/Sheets';

let Rota = (props) => {
    return ReadSpreadSheet(props.user.attributes.website);
}

export default Rota;