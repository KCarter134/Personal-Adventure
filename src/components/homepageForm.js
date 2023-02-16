import React, { Component } from 'react'

class homepageForm extends Component {

    state = { text: '' };

    render() {
        return(
            <section id="search-section">
                <form className="input field">
                    <input 
                        // onChange={handleChange} 
                        type="text" 
                        className="search-bar text" 
                        placeholder="city, artist, or venue" 
                        id="user-input"
                        />
                
                    <input 
                        type="submit" 
                        value="Search" 
                        className="search-bar submit" 
                        id="submit-button" 
                        /> 
                </form>  
                <article id="card-container">

                </article>
            </section>
        )
    }
}

export default homepageForm;