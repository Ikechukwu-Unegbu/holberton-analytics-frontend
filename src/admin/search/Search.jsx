import React, { Fragment } from 'react'
import DashMenu from '../components/DashMenu'

export default function Search(){
    return (
        <Fragment>
            <div className="container">
                <DashMenu/>
                <div className="mt-4">
                    <h5 className="text-center text-secondary">Search Results</h5>
                    <div className='mt-3'>
                        <ul class="list-group">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}