// // ReportPage.js
// import React from 'react';

// function ReportPage({ quizData, userAnswers }) {
//   return (
//     <div className='report-page'>
//       <h2>Quiz Report</h2>
//       <div>
//         {quizData.map((question, index) => (
//           <div key={index}>
//             <p>{`Question ${index + 1}: ${question.question}`}</p>
//             <p>{`Correct Answer: ${question.options[question.answer - 1]}`}</p>
//             <p>{`Your Answer: ${question.options[userAnswers[index] - 1]}`}</p>
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ReportPage;
