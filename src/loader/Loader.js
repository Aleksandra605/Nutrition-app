import s from './_loader.module.scss';

function Loader() {
  return (
    <div className={s.loaderContainer}>
      <div className={s.clockLoader}></div>
    </div>
  );
}

export default Loader;
