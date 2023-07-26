import { useState } from 'react';
import { connect } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css/keyboard';
import 'swiper/css/bundle';
import { mealLabel } from './labels';
import { fadeIn, fadeOut } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import SvgGenerator from '../svgGenerator/SvgGenerator';

import { getRecipesList } from '../../redux/recipes/recipes-selectors';
import { addToPlanner } from '../../redux/planner/planner-operations';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { Box } from '@mui/system';

import s from './_plannerForm.module.scss';

import moment from 'moment';

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const toastifyOptions = {
  text: 'You forgot to choose meal type or date',
  className: 'info',
  stopOnFocus: true,
  duration: 3000,
  style: {
    background: 'rgba(154, 22, 46, 0.725)',
  },
};

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '3s',
  },
  fadeOut: {
    animationName: fadeOut,
    animationDuration: '3s',
  },
});

function PlannerForm({ onClose, addToPlanner, index, recipesList }) {
  const [date, setDate] = useState('');
  const [meal, setMeal] = useState(['Choose meal']);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (meal[0] === 'Choose meal') {
      Toastify(toastifyOptions).showToast();
      return;
    }

    if (date === '') {
      Toastify(toastifyOptions).showToast();
      return;
    }

    let formattedDate = moment(date).format('LL');

    addToPlanner({
      uri: recipesList[index].uri,
      date: formattedDate,
      meal: meal[0],
      recipe: recipesList[index],
    });
  };

  return (
    <Swiper className={s.swiper}>
      <SwiperSlide>
        <div className={s.modalWindow}>
          <button
            type="button"
            onClick={(event) => onClose(event)}
            id="closeForm-button"
            className={s.buttonClose}
          >
            <SvgGenerator name="icon__close" />
          </button>
          <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={s.dateBox}>
              <label htmlFor="date" className={s.label}>
                Date:
              </label>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box className={s.box1}>
                  <DatePicker
                    label="Custom input"
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    className={s.datePicker}
                    renderInput={({ inputRef, inputProps, InputProps }) => (
                      <Box
                        className={s.date}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <input
                          ref={inputRef}
                          {...inputProps}
                          className={s.dateInput}
                          required
                          id="date"
                        />
                        {InputProps?.endAdornment}
                      </Box>
                    )}
                  />
                </Box>
              </LocalizationProvider>
            </div>

            <div className={s.mealBox}>
              <label htmlFor="meal" className={s.label}>
                Meal:
              </label>
              <div className={s.dropdownMenu}>
                <h3 className={s.menuTitle}>{meal}</h3>
                <select
                  multiple
                  value={meal}
                  name="meal"
                  id="meal"
                  onChange={(event) => setMeal([event.target.value])}
                  className={s.select}
                >
                  {mealLabel.map((el) => (
                    <option className={s.option} key={el} name={el} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={(e) => handleSubmit(e)}
              className={s.button_submit}
            >
              Add
            </button>
          </form>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

const mapStateToProps = (state) => ({
  recipesList: getRecipesList(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToPlanner: (data) => {
    return dispatch(addToPlanner(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlannerForm);
