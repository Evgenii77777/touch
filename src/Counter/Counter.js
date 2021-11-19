import React, { useState } from "react";
import style from "../Counter/Counter.module.css";

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  const handleReset = () => {
    setValue(0);
  };

  return (
    <div className={value % 2 === 0 ? style.red : style.blue}>
      <div className={style.container}>
        <div className={style.wrapper}>{value}</div>
        {(value % 2 === 0 && (
          <div className={style.wraper}>Введено четное число</div>
        )) || <div className={style.wraper}>Введено нечетное число</div>}

        <div className={style.btnWrapper}>
          <button className={style.btn} tupe="button" onClick={handleDecrement}>
            -
          </button>
          <button className={style.btntwo} tupe="button" onClick={handleReset}>
            Reset
          </button>
          <button className={style.btn} tupe="button" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
