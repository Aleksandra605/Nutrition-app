import style from './_chips.module.scss';

function Chips({ data, handleClick }) {
  return (
    <ul className={style.chipsContainer}>
      {data.map((el) => (
        <li key={el} className={style.item}>
          <button
            type="button"
            name={el}
            className={style.chip}
            onClick={(e) => handleClick(e.target.name)}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Chips;
