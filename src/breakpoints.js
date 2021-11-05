const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
const devices = {
  sm: `(min-width: ${sizes.mobileS})`,
  m: `(min-width: ${sizes.tablet})`,
  l: `(min-width: ${sizes.laptop})`,
  xl: `(min-width: ${sizes.laptopL})`,
};

export default devices;
