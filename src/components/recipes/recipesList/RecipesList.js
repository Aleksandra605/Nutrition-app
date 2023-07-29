import s from './_recipesList.module.scss';

import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';

import { getRecipesList } from '../../../redux/recipes/recipes-selectors';
import {
  addToWishlist,
  deleteFromWishList,
} from '../../../redux/wishList/wishList-operations';
import { fetchNextPage } from '../../../redux/recipes/recipes-operations';

import { useToggleModal } from '../../../hooks/useToggleModal';
import { useTogglePlanerForm } from '../../../hooks/useTogglePlanerForm';

import Modal from '../../modalWindow/Modal';
import SvgGenerator from '../../svgGenerator/SvgGenerator';
import PlannerForm from '../../plannerForm/PlannerForm';

function RecipesList({
  recipesList,
  addRecipeToWishList,
  deleteFromWishlist,
  fetchNextPage,
}) {
  const [modalOpen, setModalOpen] = useToggleModal(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [plannerForm, setPlannerForm] = useTogglePlanerForm(false);
  const [fetching, setFetching] = useState(false);

  const cardsListRef = useRef(null);

  useEffect(() => {
    async function fetchingNextPage() {
      if (fetching) {
        await fetchNextPage();
        await setFetching(false);
      }
    }

    fetchingNextPage();
  }, [fetching]);

  // useEffect(() => {
  //   console.log('recipes list has changed');
  // }, [recipesList]);

  useEffect(() => {
    const listNode = cardsListRef.current;

    listNode.addEventListener('scroll', handleScroll);

    return function () {
      listNode.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onClose = (event) => {
    if (event.currentTarget.id === 'closeForm-button') {
      return setPlannerForm(false);
    }
    if (event.currentTarget.id === 'closeModal-button') {
      return setModalOpen(false);
    }
    return;
  };

  const handleCardClick = (e, index) => {
    if (
      e.target.localName === 'path' ||
      e.target.localName === 'svg' ||
      e.target.localName === 'input' ||
      e.target.localName === 'button'
    ) {
      return;
    }
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const handleScroll = (e) => {
    if (
      cardsListRef.current.scrollHeight -
        (cardsListRef.current.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <>
      {plannerForm ? (
        <PlannerForm onClose={onClose} index={currentIndex} />
      ) : null}
      {modalOpen ? <Modal index={currentIndex} onClose={onClose} /> : null}
      <div className={s.cardsListBox} hidden={modalOpen}>
        <ul className={s.cardsList} ref={cardsListRef}>
          {recipesList.map((el, index) => (
            <li
              key={nanoid()}
              className={s.card}
              onClick={(event) => handleCardClick(event, index, el)}
            >
              <img
                src={el.images.SMALL.url}
                width={el.images.SMALL.width}
                height={el.images.SMALL.height}
                alt={el.recipeLabel}
                className={s.image}
              />
              <div className={s.thumb}>
                <h3 className={s.h3}>{el.recipeLabel}</h3>
                <p className={s.calories}>{Math.round(el.calories)} kcal.</p>
              </div>
              <div className={s.checkbox}>
                <input
                  type="checkbox"
                  id="liked"
                  name="liked"
                  className={s.checkbox__input}
                  onClick={(event) => {
                    console.log('event>>>', event);
                    if (el.liked) {
                      return deleteFromWishlist({ uri: el.uri });
                    }
                    return addRecipeToWishList({ uri: el.uri });
                  }}
                />
                <label
                  htmlFor="liked"
                  className={`${s.label} ${el.liked ? s.liked : null}`}
                >
                  <SvgGenerator name="icon__like" />
                </label>
              </div>
              <button
                className={s.calendarBtn}
                name="calendar-button"
                type="button"
                onClick={() => {
                  setCurrentIndex(index);
                  setPlannerForm(true);
                }}
              >
                <SvgGenerator name="icon__calendar" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  recipesList: getRecipesList(state),
});

const mapDispatchToProps = (dispatch) => ({
  addRecipeToWishList: (data) => {
    return dispatch(addToWishlist(data));
  },
  deleteFromWishlist: (id) => {
    return dispatch(deleteFromWishList(id));
  },
  fetchNextPage: () => {
    return dispatch(fetchNextPage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
