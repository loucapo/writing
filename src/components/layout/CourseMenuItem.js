/**
 * Created by rharik on 5/12/16.
 */
import React from 'react'
import {Link} from 'react-router';

export default ({id, isActive, name}) => {
    return isActive
        ? (<li tabindex="0" role="button" aria-controls="st1"><Link to={'/course/'+id}>{name}</Link></li>)
        : (<li tabindex="0" role="menuitem" class="menu-item" aria-controls="st1"><Link to={'course/'+id}>{name}</Link></li>)
}