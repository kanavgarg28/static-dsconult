import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/Slider.module.css';

const Styler: React.FC = () => {
    return (
      <div className={styles.bannerWrapper}>
        <div className={`${styles.bannerVerticalCenter} container-fluid`}>
          <Carousel>
            <Carousel.Item className={styles.carouselItem}>
              <div className="row">
                <div className={`${styles.bannerContent} col-lg-8 col-8 offset-2`}>
                  <h1 className={`${styles.bannerHeading} display-3 light-300 typo-space-line`}>
                    Develop <strong>Strategies</strong> for
                    <br /> your business
                  </h1>
                  <p className={styles.bannerBody}>
                    Purple Buzz is a corporate HTML template with Bootstrap 5 Beta 1. This CSS template is 100% free to download provided by{' '}
                    <a href="https://templatemo.com/page/1" target="_blank" rel="nofollow">TemplateMo</a>. Total 6 HTML pages included in this template. Icon fonts by{' '}
                    <a href="https://boxicons.com/" target="_blank" rel="nofollow">Boxicons</a>. Photos are from{' '}
                    <a href="https://unsplash.com/" target="_blank" rel="nofollow">Unsplash</a> and{' '}
                    <a href="https://icons8.com/" target="_blank" rel="nofollow">Icons 8</a>.
                  </p>
                  <a className={styles.bannerButton} href="#" role="button">Get Started</a>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <div className="row">
                <div className={`${styles.bannerContent} col-lg-8 col-8 offset-2`}>
                  <h1 className={`${styles.bannerHeading} display-3 light-300`}>
                    HTML CSS Template with Bootstrap 5 Beta 1
                  </h1>
                  <p className={styles.bannerBody}>
                    You are not allowed to re-distribute this Purple Buzz HTML template as a downloadable ZIP file on any kind of Free CSS collection websites. This is strongly prohibited. Please contact TemplateMo for more information.
                  </p>
                  <a className={styles.bannerButton} href="#" role="button">Get Started</a>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselItem}>
              <div className="row">
                <div className={`${styles.bannerContent} col-lg-8 col-8 offset-2`}>
                  <h1 className={`${styles.bannerHeading} display-3 light-300`}>
                    Cupidatat non proident, sunt in culpa qui officia
                  </h1>
                  <p className={styles.bannerBody}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
                  </p>
                  <a className={styles.bannerButton} href="#" role="button">Get Started</a>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  };
  
  export default Styler;
  