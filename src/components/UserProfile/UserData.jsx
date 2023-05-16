import { Formik, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';

const UserData = () => {
  return (
    <div>
      <h2>My information:</h2>
      <Formik>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </label>
          <label>
            Birthday
            <input
              type="date"
              name="birthday"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.birthday}
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="tel"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tel}
            />
          </label>
          <label>
            City
            <input
              type="text"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
            />
          </label>
        </form>
      </Formik>
      <button type="submit">LogOut</button>
    </div>
  );
};

export default UserData;
