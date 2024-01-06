import React from 'react';

const Table = () => {
  const data = [
    //BACKEND: data from backend
    { id: 1, name: 'John', exercise: 25, subtotal: 'john@example.com', class_test: 12, homework:43, subtotal:43, total_class_score:43, to_30:453, term_exam:432, to_70:4324, overall:324, position:343},
    { id: 2, name: 'John', exercise: 25, subtotal: 'john@example.com', class_test: 12, homework:43, subtotal:43, total_class_score:43, to_30:453, term_exam:432, to_70:4324, overall:324, position:343}
  ];

  return (
    <div>
        //HEADING

      <h2>Sample Table</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid white', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>NAME</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>EXERCISE</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>CLASS TEST</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>HOMEWORK</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>TOTAL CLASS SCORE</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>30%</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>TERM EXAM</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>70%</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>OVERALL TOTAL 30% + 70%</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>POSITION</th>

          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid white', padding: '8px' }}>{item.id}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{item.name}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{item.exercise}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{item.class_test}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{item.homework}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{item.total_class_score}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{item.to_30}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{item.term_exam}</td>
              
              <td style={{ border: '1px solid white', padding: '8px' }}>{item.to_70}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{item.overall}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{item.position}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
