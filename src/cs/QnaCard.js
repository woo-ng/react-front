import { useEffect } from "react";
import useMoveScroll from "./useMoveScroll";

export const QnaCard = ({ item, index, cardOnOff, setCardOnOff }) => {
  const { element, onMoveToElement } = useMoveScroll();
  useEffect(() => {
    setCardOnOff((cardOnOff) =>
      cardOnOff.map((item, i) => {
        if (i === index)
          item.onMoveToElement = onMoveToElement;
        return item;
      })
    );
  }, []);
  return (
    <div className="faq-card" key={index}>
      <div
        ref={element}
        id={item.key ?? `${item.category}__${item.question}`}
        className="faq-card-title"
        onClick={() => {
          setCardOnOff((cardOnOff) =>
            cardOnOff.map((item, i) => {
              if (i === index) item.show = !item.show;
              return item;
            })
          );
        }}
      >
        <span className="question-mark">Q</span>
        <span>{item.question}</span>
      </div>
      <div
        className={
          cardOnOff[index].show
            ? "faq-card-answer"
            : "faq-card-answer faq-card-none"
        }
        data-test={
          JSON.stringify(cardOnOff[index])
        }
      >
        <span className="answer-mark">A</span>
        <span className="FAQ_card-answer">{item.answer}</span>
      </div>
    </div>
  );
};

export default QnaCard;
