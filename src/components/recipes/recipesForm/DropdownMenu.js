import s from './_dropdownMenu.module.scss';

import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '2s',
  },
});

function DropdownMenu({ state, labels, handleEvent, text, name }) {
  return (
    <div className={s.dropdownMenu}>
      <h3 className={s.menuTitle}>
        {text}
        {state.length > 0 ? (
          <span className={s.span}>{state.length}</span>
        ) : null}
      </h3>
      <select
        multiple
        value={state}
        name={name}
        onChange={(event) =>
          handleEvent({
            name: event.target.name,
            value: event.target.value,
          })
        }
        className={`${s.select} ${css(styles.fadeIn)} ${css(styles.fadeOut)}`}
      >
        {labels.map((el) => (
          <option className={s.option} key={el} name={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownMenu;
