import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  // function time({ target }) {
  //   window.setTimeout(function () {
  //     setSkeleton(false);
  //     target.style.opacity = 1;
  //   }, 3000);
  // }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;
