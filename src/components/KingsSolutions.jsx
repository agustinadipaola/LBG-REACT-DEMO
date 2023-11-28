import PropTypes from 'prop-types';

// Component names MUST be capitalised
function KingsSolutions(props) {
    // components return html
    // Logs for visibility NOT REQUIRED
    // console.log("Props:", props);
    // console.log("Name:", props.name);
    // console.log("Age:", props.age);
    // console.log("Member:", props.member);
    return (
        <div>
            <h1>___________________</h1>
            <p><h2>{props.nm}</h2></p>
            <p>City: {props.cty}</p>
            <p>House: {props.hse}</p>
            <p>Years: {props.yrs}</p>

        </div>
    );
}

KingsSolutions.propTypes = {
    nm: PropTypes.string,
    cty: PropTypes.string,
    hse: PropTypes.string,
    yrs: PropTypes.number,
}
// lets you import the function into another file
export default KingsSolutions;

