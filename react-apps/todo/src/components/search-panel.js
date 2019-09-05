import React from 'react';

const SearchPanel = () => {

    const searchStyle = {
        fontSize: '20px'
    };

    const searchText = 'Напишите тут, чтобы найти';
    return  <input style = {searchStyle} placeholder = {searchText}/>;
};

export default SearchPanel;