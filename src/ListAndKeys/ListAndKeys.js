import React from 'react';

const ListKeys = (props) => {
    const countries = props.countries;
    const listItems = countries.map(country => <li>{ country }</li>)

    return (
        <ul> {listItems} </ul>
    )
}
  

const Numbers = () => {
    const contrryList = ["India","Germany","Switzerland","Czech","Austria"]
    return (
        <ListKeys countries={contrryList} />
    )
}

export default Numbers;