// Component names MUST be capitalised
function Pets (props) {
    // components return html
    // Logs for visibility NOT REQUIRED
    console.log("Props:", props);
    console.log("Name:", props.name);
    console.log("Age:", props.age);
    console.log("Raza:", props.raza);
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Raza: {props.raza}</p>
        </div>
    );
}

// lets you import the function into another file
export default Pets;