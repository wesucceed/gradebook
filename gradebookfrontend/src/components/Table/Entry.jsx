import React from 'react'

const Entry = ({props}) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.exercise_score}</td>
            <td>{props.test_score}</td>
            <td>{props.homework_score}</td>
            <td>{props.exam_score}</td>
        </tr>
  )
}

export default Entry