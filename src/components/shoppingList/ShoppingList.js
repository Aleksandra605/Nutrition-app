import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { getShoppingList } from '../../redux/food/food-selectors';
import { fetchShoppingList } from '../../redux/food/food-operations';

import s from './_shoppingList.module.scss';

function ShoppingList({ shoppingList, toFetchShoppingList }) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      toFetchShoppingList();
      isFirstRender.current = false;
    }
  }, [isFirstRender]);

  return (
    <section className={s.section}>
      {shoppingList === [] ? (
        <p>Just wait...</p>
      ) : (
        <ul className={s.list} id="checklist">
          {shoppingList.map((product) => (
            <li key={product.foodId} className={s.item}>
              <input type="checkbox" id={product.foodId} className={s.input} />
              <label htmlFor={product.foodId} className={s.label}>
                {product.food}
              </label>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  shoppingList: getShoppingList(state),
});

const mapDispatchToProps = (dispatch) => ({
  toFetchShoppingList: () => {
    return dispatch(fetchShoppingList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
