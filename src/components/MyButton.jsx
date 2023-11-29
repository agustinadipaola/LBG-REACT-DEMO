// Arrow : click button

function MyButton() {
        console.log ("I told you do not click");
        alert ("I told you do not click")
    

return ( 
<div>
    <button onClick={MyButton}>DO</button>
    <button onClick={function () { console.log("I told you do not click"); }}> NOT</button>
    <button onClick={() => {console.log ("I told you do not click")}}> CLICK</button>
        
   
</div>
);
}
export default MyButton;

//         <button onClick={() => alert("I TOLD YOU DO NOT CLICK!")}>

//             DO NOT CLICK!!!    </button >

//     );
// }

// function MyButton2() {
//         return (<button onClick={alert("yo")}>
//             DO NOT CLICK!!    </button>);
//     }




// Named: to create a click button
// function MyButton() {
//     function sayYo() {
//         alert ("YO!")
//     }
//     return ( <button onClick={sayYo}>
//     CLICK ME!
//     </button>);
// }

// export default MyButton;

// Annonymous 3 to create a button
// function MyButton() {
//     return (<button onClick={alert("yo")}>
//         DO NOT CLICK!!    </button>);
// }

