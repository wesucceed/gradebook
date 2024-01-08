import React from 'react';
import './TerminalReport.css';


const StudentDetail = (props) => {

  return (
    <div className='StudentInfo'>
        <table>

        <thead>
            <tr>

            </tr>
        </thead>
        <tbody>
            <tr>

                <td colspan="2">Student Name: ABDUL-HAKEEM, INUSSAH</td>
                <td>Gender: MALE</td>
            </tr>

            <tr>

                <td>Admission Number: BS 721</td>
                <td>Status: BOARDING</td>
                <td>Academic Year: 2014-2015    Term: 3</td>

            </tr>

            <tr>

                <td>Class: 2 SCIENCE 6</td>
                <td>House: ST. THOMAS  II</td>
                <td>Date Vacated: July 31, 2015</td>

            </tr>

            <tr>

                <td colspan="2">Programme:  GENERAL SCIENCE</td>
                <td>Next Term Begins: September 11, 2015</td>
            </tr>

            <tr>

                <td>Student’s Average Mark: 68.60</td>
                <td>No. On Roll: 45</td>
                <td>Position in Class: 31st</td>
            </tr>
        </tbody>
        
      </table>
    </div>
  );
};

export default StudentDetail;


