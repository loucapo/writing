/**
 * Created by rharik on 5/11/16.
 */


import React from 'react'
import item from './item'

export default ({content}) => (
    <div className="accord-content">
        <p></p>
            <p>{content.description}</p>
        <p></p>
        <div className="chapter-content" id="assignment_2346">
            <table summary={content.summary}>
            <caption>{content.caption}</caption>
                <thead>
                    <tr>
                        <th className="cth-content">CONTENT</th>
                        <th className="cth-done"></th>
                        <th className="cth-status">STATUS</th>
                        <th className="cth-date">DATE</th>
                        <th className="cth-points">POINTS</th>
                    </tr>
                </thead>
                <tbody>
                    {content.items.map(item=>{
                        <item {...item} />
                    })}
                </tbody>
            </table>
        </div>
    </div>
)