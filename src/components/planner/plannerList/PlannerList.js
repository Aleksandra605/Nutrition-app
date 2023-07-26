import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPlannerList } from '../../../redux/planner/planner-selectors';
import MealSwiper from '../mealSwiper/MealSwiper';
import s from './_plannerList.module.scss';

const mealsList = ['Breakfast', 'Lunch', 'Snack', 'Teatime', 'Dinner'];

function PlannerList({ plannerList }) {
  const [data, setData] = useState(null);
  let params = useParams();

  useEffect(() => {
    setData(plannerList.filter((el) => el.date === params.date));
  }, [params, plannerList]);

  return (
    <ul className={s.plannerList}>
      {mealsList.map((el) => (
        <li key={el}>
          <h3 className={s.h3}>{el}</h3>
          <MealSwiper
            recipes={data?.find((x) => x.mealType === el)?.meals}
            mealType={el}
          />
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  plannerList: getPlannerList(state),
});

export default connect(mapStateToProps)(PlannerList);
