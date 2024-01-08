import React from 'react'

const RowItem = (prop) => {
    const data = prop.props
    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.exercise_score}</td>
            <td>{data.test_score}</td>
            <td>{data.homework_score}</td>
            <td>{data.exam_score}</td>
        </tr>

    )
}


const Entry = (props) => {
    const data = props.props;
    const rowItems = data.map((data) =>
        <RowItem props={data} />
    );

    return (
        <>
            {rowItems}
        </>
    );
}

export default Entry