import React, {useState } from 'react';
// import React, { Component, useState } from 'react';
import ContactProps from './contactProps';
const Contact = () => {
    const [blogs] = useState([
    // const [blogs, setname] = useState([
        {author: 'Luigi', content: 'Lorem ipsum', id:1},
        {author: 'Mario', content: 'Lorem ipsum set dolor', id:2},
        {author: 'Mushrom guy', content: 'Lorem 50v', id:3},
        {author: 'princess', content: 'Lorem 9000x', id:4}
    ]);
     const people = ['james', 'john', 'peter', 'paul'];
    // const updateName = () => {
    //     var random= blogs[Math.floor(Math.random()*blogs.length)]
    //     setname(random);
    // }
    return ( 
        <>
            <h1>Contact Us Page</h1>
            {/* <p>{name}</p> */}

            <ContactProps bloggers={blogs} title='chief'/>
            <div>
                {console.log(people)}
                {/* {people.filter} */}
            </div>
            {/* {console.log(Array.isArray(people))} */}
            {/* <button >Update</button> */}
            {/* <button onClick={updateName} value='Update'>Update</button> */}
        </>
     );
}
 

export default Contact;