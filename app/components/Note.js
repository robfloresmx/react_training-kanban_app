import React from 'react';

function Note(props) {
    return(
        <div>
            {props.task}
            <button onClick={props.onDelete}>x</button>
        </div>
    );
}

module.exports = Note;

/**
 * The previous code can also be writing in the following ways
 *import React from 'react';
 *export default ({task}) => <div>{task}</div>;
 *OR
 *import React from 'react';
 *export default (props) => <div>{props.task}</div>;
 */

