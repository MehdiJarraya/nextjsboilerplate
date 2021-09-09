import React from 'react'
import classes from "./MeetupDetail.module.css"
// classes is a js object and that's why defined classes in style file are unique (key unique in object)

export default function MeetupDetail({ image, title, address, description }) {
    return (
        <section className={classes.detail}>
            <img src={image} alt={title} ></img>
            <h1>
                {title}
            </h1>
            {/* address html element ;) */}
            <address>
                {address}
            </address>

            <p>
                {description}
            </p>

        </section>
    )
}
