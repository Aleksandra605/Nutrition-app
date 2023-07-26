import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { fetchWishlist } from '../../redux/wishList/wishList-operations';

import s from './_wishlist.module.scss';

function Wishlist({ wishList }) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current === true) {
      wishList();
      isFirstRender.current = false;
    }
  }, [isFirstRender]);

  return <div></div>;
}

const mapDispatchToProps = (dispatch) => ({
  wishList: () => {
    return dispatch(fetchWishlist());
  },
});

export default connect(null, mapDispatchToProps)(Wishlist);
