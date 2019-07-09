import * as emailjs from 'emailjs-com';

const initEmailjs = () => {
  emailjs.init(process.env.REACT_APP_USER_ID);
};

export default initEmailjs;
