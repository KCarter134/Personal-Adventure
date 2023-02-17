import React, { useState } from 'react'

const HomepageForm = props => {

    const [textInput, setTextInput] = useState('')

    const handleClick = (e) => { //sends user input to console
        e.preventDefault();
        console.log(textInput);
        return textInput[e];
        // props.send(textInput); 
        // ------- WILL NEED THIS TO WORK LATER TO SEND USER INPUT INTO API CALL --------
       
    };

    const handleChange = (event) => {  // grabs user input 
        setTextInput(event.target.value);
    }; 



        return(
            <section id="search-section">
                <form className="input field">
                    <input 
                        onChange={handleChange}
                        className="search-bar text" 
                        placeholder="city, artist, or venue" 
                        id="user-input"
                        />
                
                    <button 
                        onClick={handleClick}
                        type="submit" 
                        className="search-bar submit" 
                        id="submit-button" 
                        >Search</button> 
                </form>  
                <article id="card-container">

                </article>
            </section>
        )
    }


export default HomepageForm;