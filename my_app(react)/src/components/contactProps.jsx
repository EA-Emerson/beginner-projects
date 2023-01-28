import React from 'react';
// import React, { Component } from 'react';
const ContactProps = ({bloggers, title}) => {
    // const bloggers = props.bloggers;
    // const title = props.title;
    return ( 
        <>
        <div>
            {title}
            {bloggers.map((blog) => [
                <div key={blog.id}>
                    <p>{blog.author}</p>
                    <p>{blog.content}</p>
                    
                </div>
            ])}
        </div>
        </>
     );
}
 
export default ContactProps;