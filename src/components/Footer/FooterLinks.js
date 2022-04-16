import React from 'react'
import {useState} from 'react'

function FooterLinks(props) {

const [linkVisible, setLinksVisible] = useState(true)

function collapsibleLinks(){
    setLinksVisible( prevState => !prevState)
}

const links  = props.links.map(item => <li key={item}>{item}</li>)


  return (
    <div>
        <p onClick={collapsibleLinks}>{props.category}</p>
        <ul style={{display: linkVisible ? "block" : "None"}}>
            {links}
        </ul>
    </div>
  )
}

export default FooterLinks