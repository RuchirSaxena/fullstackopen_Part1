import React from 'react'

const Anecdote = ({ startText = '', value, endText = '' }) => <div>
    {startText} {value} {endText}
</div>



export default Anecdote;  