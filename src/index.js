import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';

function FAQ(){
    const [visibleAnswers, setVisibleAnswers] = useState([false, false, false, false, false, false, false, false, false, false]);
    
    const handleClick = ({target}) =>{
        const selectedQuestionIndex = Number(target.value);
        setVisibleAnswers((prev) =>{
            return prev.map((answer, index) =>{
                if(index === selectedQuestionIndex && answer === false){
                    answer = true;
                }
                else{
                    answer = false;
                }
                return answer;
            });
        });
    }

    return (
        <div className="center-container">
            <h1>Frequently asked questions</h1>
            <p>Hello! Didn't find what you're looking for? Please contact us.</p>
            <React.StrictMode>
            <div className="question-list">
               {visibleAnswers.map((answer, index) =>(
                   <div className="question-holder" key={'question_holder_' + index}>
                       <button type="button" key={'button_' + index} value={index} onClick={handleClick}>Question number {index}<i className={answer ? "fas fa-sort-up" : "fas fa-sort-down" }></i></button>
                        {answer && 
                            <div className="answer" key={'answer_' + index}>
                                <p key={'answer_text' + index}>Lorem ipsum Lorem ipsum Lorem ipsum</p>
                            </div>
                        }
                   </div>
               ))}
            </div>
            </React.StrictMode>
        </div>
    );
}

ReactDom.render(<FAQ />, document.getElementById('root'));
