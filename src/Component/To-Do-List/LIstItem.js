import React from 'react';
import './ListItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTrash);

function ListItem(props) {
    const items = props.items;

    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                {item.text}
                <span>
                    <FontAwesomeIcon
                        className="flaticons"
                        icon="trash"
                        onClick={() => { props.deleteItem(item.key) }}
                    />
                </span>
            </p>
        </div>
    })
    return (
        <div>{listItems}</div>
    )
}

export default ListItem;