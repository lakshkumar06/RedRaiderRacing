import React, { useEffect } from 'react';
import Content from '../ContentFiles/Content.json'

const Faqs = () => {
  useEffect(() => {
    const questions = document.querySelectorAll(".question");

    const toggleQuestion = (event) => {
      const question = event.currentTarget;
      const active = document.querySelector(".question.active");
      if (active && active !== question) {
        active.classList.remove("active");
        active.nextElementSibling.style.maxHeight = 0;
      }
      question.classList.toggle("active");
      const answer = question.nextElementSibling;
      if (question.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = 0;
      }
    };

    questions.forEach(question => {
      question.addEventListener("click", toggleQuestion);
    });

    // Cleanup event listeners on component unmount
    return () => {
      questions.forEach(question => {
        question.removeEventListener("click", toggleQuestion);
      });
    };
  }, []);

  return (
    <div className=''>
        <h2 className='text-center pb-0'><span className='text-primary'>Frequently</span> Asked Questions</h2>
    <div className="containerr ">
    {Content.Contact.faqs.map((faq, index) => (


      <div className="contentcontainer">
      <div className="question">{faq.question}</div>
      <div className="answercont">
        <div className="answer">
        {faq.answer}
        </div>
      </div>
    </div>
          ))}


    </div>
    </div>
  );
};

export default Faqs;
