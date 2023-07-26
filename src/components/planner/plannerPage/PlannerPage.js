import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {
  NavLink,
  useLocation,
  Outlet,
  useParams,
  useNavigate,
} from 'react-router-dom';

import moment from 'moment';

import createWeek from '../../../helpers/createWeek';
import { getPlannerList } from '../../../redux/planner/planner-selectors';
import { fetchPlanner } from '../../../redux/planner/planner-operations';

import PlannerList from '../plannerList/PlannerList';

import s from './_plannerPage.module.scss';

function PlannerPage({ plannerList, toFetchPlanner }) {
  const [week, setWeek] = useState(createWeek());
  const [currentDate, setCurrentDate] = useState(
    moment(new Date()).format('LL')
  );

  const isFirstRender = useRef(true);

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    console.log('currentDate>>>', currentDate);
    navigate(`/planner/${currentDate}`, { replace: true });
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      toFetchPlanner();
      isFirstRender.current = false;
    }
  }, [isFirstRender]);

  return (
    <section className={s.planner_section}>
      <div className={s.daysBox}>
        {week.map((el) => (
          <NavLink
            to={`/planner/${el[1]}`}
            onClick={(e) => setCurrentDate(e.target.id)}
            key={el[1]}
            id={el[1]}
            className={s.dayLink}
            style={{
              background: el[1] === currentDate ? '#51655c' : null,
              color: el[1] === currentDate ? 'whitesmoke' : null,
            }}
          >
            {el[0]}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </section>
  );
}

const mapStateToProps = (state) => ({
  plannerList: getPlannerList(state),
});

const mapDispatchToProps = (dispatch) => ({
  toFetchPlanner: () => {
    return dispatch(fetchPlanner());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlannerPage);
