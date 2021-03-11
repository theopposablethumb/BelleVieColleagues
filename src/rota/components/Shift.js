let Shift = (props) => {
    let time = props.start.replace(':', '');
    let hour = time.substring(0, 2);
    let minutes = time.substring(3, 5);

    let date = new Date();
    date.setHours(hour);
    date.setMinutes(minutes);
    console.log(date);

    let startTime = date.toLocaleTimeString();
    let end = date.setHours( startTime + 5 );
    console.log(end);
    //let endTime = end.toLocaleTimeString();

    return (
        <div className="shift">
            <p>{props.day}: {startTime} </p>
        </div>
    );
}

export default Shift;