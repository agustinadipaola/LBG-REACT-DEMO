import PropTypes from 'prop-types';

// Component names MUST be capitalised
function Family(props) {
    // components return html
    // Logs for visibility NOT REQUIRED
    // console.log("Props:", props);
    // console.log("Name:", props.name);
    // console.log("Age:", props.age);
    // console.log("Member:", props.member);
    return (
        <div>
            <p>Name:{props.name}</p>
            <p>Age: {props.age}</p>
            <p>Member:{props.member}</p>
        </div>
    );
}

Family.propTypes = {
 name: PropTypes.string,
 age: PropTypes.number,
 member: PropTypes.string,
}
// lets you import the function into another file
export default Family;

