import React from 'react';
import Part from './Part';

const Content = (props) => {
    const [part1, part2, part3] = props.parts;
    return (
        <div>
            <Part
                name={part1.name}
                exercise={part1.exercises}
            />
            <Part
                name={part2.name}
                exercise={part2.exercises}
            />
            <Part
                name={part3.name}
                exercise={part3.exercises}
            />
        </div>
    )
}

export default Content;