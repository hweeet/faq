import React from "react";
import {FaPlus, FaMinus} from 'react-icons/fa';

const List = ({ status, statuses, setStatuses, toggleDisplay }) => {
    return (
        <>
            {status.display === true ? (
                <ul>
                    <div onClick={() => toggleDisplay(status.id)} className="questionButtonWrapper">
                        <div className="questions">

                            <h2>{status.question}</h2>
                            <FaMinus onClick={() => toggleDisplay(status.id)}/>
                        </div>
                    </div>
                    <div className="answersWrapper">
                        <div className="answers">
                            <p>{status.answer}</p>
                        </div>
                    </div>
                </ul>
            ) : (
                <ul>
                    <div onClick={() => toggleDisplay(status.id)} className="questionButtonWrapper">
                        <div className="questions">

                            <h2>{status.question}</h2>
                            <FaPlus onClick={() => toggleDisplay(status.id)}/>
                        </div>
                    </div>
                    <div className="answersWrapper">
                        <div className="answers">
                            <p></p>
                        </div>

                    </div>
                </ul>
            )}


        </>
    )
};

export default List;