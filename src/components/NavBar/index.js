import React from 'react';
import style from './style.module.scss';

const NavBar = (props) => {
  return (
    <nav className={style.main}>
      {props.options &&
        props.options.map((x, i) => {
          return (
            <div
              className={
                props.selected === props.options[i]
                  ? style.itemSelected
                  : style.item
              }
              onClick={() => props.update(i)}>
              {x}
            </div>
          );
        })}
    </nav>
  );
};

export default NavBar;
