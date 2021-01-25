import {ReadSpreadSheet} from '../api/Sheets';

let Rota = (props) => {
    ReadSpreadSheet(props.user.attributes.website);
}

export default Rota;