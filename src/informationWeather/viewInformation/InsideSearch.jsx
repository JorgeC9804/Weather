import React from "react";

const InsideSearch = ({handleSumbit, handleSearch}) => {

    return (
        <form onSubmit={ e => handleSumbit(e)}>
            <input
                type='text'
                placeholder='Search country or state weather' 
                className='input'
                onChange={({target}) => handleSearch(target)}
            />
        </form>
    )
};

export default InsideSearch;