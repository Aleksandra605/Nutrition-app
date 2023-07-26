import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/keyboard';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { nanoid } from 'nanoid';

import { addToShoppingList } from '../../../redux/food/food-operations';
import { removeFromPlanner } from '../../../redux/planner/planner-operations';

import s from './_mealSwiper.module.scss';
import SvgGenerator from '../../svgGenerator/SvgGenerator';

function MealSwiper({
  recipes,
  addToShoppingList,
  removeFromPlanner,
  mealType,
}) {
  let params = useParams();

  return (
    <>
      <Swiper
        navigation={true}
        rewind={true}
        modules={[Navigation, Keyboard]}
        effect="fade"
        autoHeight={true}
        slidesPerView="2"
        className={s.swiper}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
          pageUpDown: true,
        }}
        initialSlide={0}
      >
        {recipes ? (
          recipes.map((recipe, index) => (
            <SwiperSlide key={nanoid()} className={s.slide}>
              <div className={s.card}>
                <img
                  src={recipe.images.SMALL.url}
                  alt={recipe.recipeLabel}
                  className={s.card__image}
                />
                <div className={s.additionalInfo}>
                  <ul className={s.nutrients_list}>
                    {recipe.totalNutrients.map((item) => (
                      <li className={s.nutrientsList__item} key={nanoid()}>
                        <span>{item.label}</span>
                        <span>
                          {Number(item.quantity).toFixed(0)} {item.unit}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className={s.buttonsBox}>
                    <button
                      className={s.button}
                      onClick={() => {
                        addToShoppingList(recipe.ingredients);
                      }}
                    >
                      <SvgGenerator name="addToShoppingList" />
                    </button>
                    <button
                      className={s.button}
                      onClick={() => {
                        removeFromPlanner({
                          date: params.date,
                          uri: recipe.uri,
                          mealType,
                        });
                      }}
                    >
                      <SvgGenerator name="icon__delete" />
                    </button>
                  </div>
                </div>
                <div className={s.card__content}>
                  <h4 className={s.content__h4}>{recipe.recipeLabel}</h4>
                  <ul className={s.ingredientsList}>
                    {recipe.ingredientList.map((el) => (
                      <li className={s.ingredientsList__item} key={nanoid()}>
                        {el}
                      </li>
                    ))}
                  </ul>
                  <div className={s.spanBox}>
                    <span>{`${Math.round(recipe.calories)} kcal.`}</span>
                    <span>{`${Math.round(recipe.totalWeight)} g.`}</span>
                    <span>{`${recipe.cuisineType} cuisine`}</span>
                    {recipe.totalTime !== 0 ? (
                      <span>{`${recipe.totalTime} min.`}</span>
                    ) : null}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <button className={s.button_add}>
            <SvgGenerator name="planner__add" />
            Add recipe
          </button>
        )}
      </Swiper>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addToShoppingList: (data) => {
    return dispatch(addToShoppingList(data));
  },
  removeFromPlanner: (data) => {
    return dispatch(removeFromPlanner(data));
  },
});

export default connect(null, mapDispatchToProps)(MealSwiper);
