import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Navigation, Pagination, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css/keyboard';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './_modal.module.scss';

import {
  addToWishlist,
  deleteFromWishList,
} from '../../redux/wishList/wishList-operations';
import { getRecipesList } from '../../redux/recipes/recipes-selectors';

import SvgGenerator from '../svgGenerator/SvgGenerator';

function Modal({
  onClose,
  recipes,
  index,
  addRecipeToWishList,
  deleteFromWishlist,
}) {
  const [nutrientsToggle, setNutrientsToggle] = useState(false);

  return (
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      rewind={true}
      modules={[Pagination, Navigation, Keyboard]}
      effect="fade"
      className={s.swiper}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
        pageUpDown: true,
      }}
      initialSlide={index}
      hideonclick="true"
    >
      {recipes.map((el) => {
        let imageRegular = el.images.REGULAR;
        return (
          <SwiperSlide key={nanoid()}>
            <div className={s.slide} id={'slide'}>
              <button
                type="button"
                onClick={(event) => onClose(event)}
                id="closeModal-button"
                className={s.buttonClose}
              >
                <SvgGenerator name="icon__close" />
              </button>
              <img
                src={imageRegular.url}
                width={imageRegular.width}
                height={imageRegular.height}
                alt={el.recipeLabel}
                className={s.image}
              />
              <div className={s.card__content}>
                <div className={s.checkbox}>
                  <input
                    type="checkbox"
                    id="liked"
                    name="liked"
                    className={`${s.checkbox__input} `}
                    onClick={(event) => {
                      console.log('event>>>', event);
                      if (el.liked) {
                        return deleteFromWishlist({ uri: el.uri });
                      }
                      return addRecipeToWishList({ uri: el.uri });
                    }}
                  ></input>
                  <label
                    htmlFor="liked"
                    className={`${s.label}  ${el.liked ? s.liked : null}`}
                  >
                    <SvgGenerator name="icon__like" />
                  </label>
                </div>

                <h3 className={s.h3}>{el.recipeLabel}</h3>
                <h4 className={s.h4}>
                  {nutrientsToggle ? 'Nutrients:' : 'Ingredients:'}
                </h4>
                {nutrientsToggle ? (
                  <>
                    <ul className={s.nutrients_list}>
                      {el.totalNutrients.map((item) => (
                        <li className={s.nutrientsList__item} key={nanoid()}>
                          <span>{item.label}</span>
                          <span>
                            {Number(item.quantity).toFixed(0)} {item.unit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <ul className={s.labels_list}>
                      {[...el.dietLabels, ...el.healthLabels].map((label) => (
                        <li className={s.labelsList__item} key={label}>
                          {label}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <ul className={s.ingredients_list}>
                    {el.ingredientList.map((item) => (
                      <li className={s.ingredientsList__item} key={nanoid()}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={s.spanBox}>
                <span>{`${Math.round(el.calories)} kcal.`}</span>
                <span>{`${Math.round(el.totalWeight)} g.`}</span>
                <span>{`${el.cuisineType} cuisine`}</span>
                {el.totalTime !== 0 ? (
                  <span>{`${el.totalTime} min.`}</span>
                ) : null}
              </div>

              <div className={s.buttonsBox}>
                <button
                  type="button"
                  className={s.buttonsBox__btn}
                  onClick={() => setNutrientsToggle(!nutrientsToggle)}
                >
                  {nutrientsToggle ? 'Show ingredients' : 'Show nutrients'}
                </button>
                <a href={el.sourceUrl} className={s.sourceLink}>
                  Source: {el.source}
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const mapStateToProps = (state) => ({
  recipes: getRecipesList(state),
});

const mapDispatchToProps = (dispatch) => ({
  addRecipeToWishList: (data) => {
    return dispatch(addToWishlist(data));
  },
  deleteFromWishlist: (id) => {
    return dispatch(deleteFromWishList(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
