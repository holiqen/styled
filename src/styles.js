import { css } from "styled-components";

export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7"
};

export const setFont = {
  main: "'Lato', sans-serif",
  slanted: "'Courgette', cursive;"
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `
        display: flex;
        align-items: ${y};
        justify-content: ${x};
    `;
};

export const setBackground = ({
  img = "https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  color = "rgba(0, 0, 0, 0)"
} = {}) => {
  return `
        background: linear-gradient(${color}, ${color}), url(${img}) center/cover fixed no-repeat;
    `;
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setLetterSpacing = (number = 2) => {
  return `${number}px`;
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black"
} = {}) => {
  return `${width} ${style} ${color}`;
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const setTransition = ({
  property = "all",
  time = "0.3a",
  timing = "ease-in-out"
} = {}) => {
  return `${property} ${time} ${timing}`;
};

export const setShadow = {
  light: `3px 3px 5px 0px rgba(0, 0, 0, 0.75)`,
  dark: `6px 6px 5px 0px rgba(0, 0, 0, 0.75)`,
  darkest: `10px 10px 5px 0px rgba(0, 0, 0, 0.75)`
};
