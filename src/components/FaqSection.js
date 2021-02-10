import React from 'react';

const FaqSection = () => {
    return(
        <div className="faq">
            <h2>Any questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start</h4>
               <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, qui!</p>
               </div>
            </div>
            <div className="question">
                <h4>Calendrier</h4>
               <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, qui!</p>
               </div>
            </div>
            <div className="question">
                <h4>Payment methods</h4>
               <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, qui!</p>
               </div>
            </div>
            <div className="question">
                <h4>Whats our products</h4>
               <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, qui!</p>
               </div>
            </div>
        </div>
    )
}

export default FaqSection;