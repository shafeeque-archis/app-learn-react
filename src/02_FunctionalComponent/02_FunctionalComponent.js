import React, { useState } from 'react';

const FunctionalComponent = (props) => {
    const [name, setName] = useState("Shafeeque");
    const [address, setAddress] = useState({
        houseNo: "10 A, Bavasons Dale",
        place: "Kochi",
    })
    
    const updateName = () => {
        setName("Shafeeque N")
    }

    const updateAddress = () => {
        setAddress({
            houseNo: "10/22 A, Muttippalam Upper",
            place: "Manjeri, Malappuram, India"
        })
    }

    return (
        <div>
            <p>I am a Functional Component, I get my prop from the component "{props.name}"</p>
            <p>My name is {name}</p>
            <p>I am from {address.houseNo}, {address.place}</p>
            <button onClick={updateName}>update name</button>
            <button onClick={updateAddress}>update my Address</button>
        </div>
    )
}

export default FunctionalComponent