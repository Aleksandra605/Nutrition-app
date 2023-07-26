import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import s from '../_views.module.scss';
import { logIn } from '../../../redux/authentication/auth-operations';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onLogin({ email, password });

    setEmail('');
    setPassword('');

    return;
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.form__label}>Email</label>
      <input
        className={s.form__input}
        type="email"
        name="email"
        title="This is a required field"
        placeholder="your@email.com"
        required
        value={email}
        onChange={handleChange}
        autoComplete="off"
      />

      <label className={s.form__label}>Password</label>
      <input
        className={s.form__input}
        type="password"
        name="password"
        required
        value={password}
        onChange={handleChange}
        autoComplete="off"
      />
      <div className={s.form__btnContainer}>
        <button
          type="submit"
          className={s.btn}
          name="login"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
      <Link className={s.form__link} to={'/signup'}>
        Or create account
      </Link>
    </form>
  );
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(Login);
