import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './testimonialsContent.module.css';
import { CSSProperties } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FaHeart } from 'react-icons/fa';

const arrowStyles: CSSProperties = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 50,
  height: 50,
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'transparent',
  color: '#2b2c30',
};

export default function TestimonialsContent() {
  return (
    <div className={styles.testimonials}>
      <h2>What Our Members Say</h2>
      <div className={styles.carousel}>
        <FaHeart className={styles.heart1} />
        <FaHeart className={styles.heart2} />
        <Carousel
          showStatus={false}
          showArrows
          infiniteLoop
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, left: 15 }}
              >
                <GrFormPrevious size={26} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, right: 15 }}
              >
                <GrFormNext size={26} />
              </button>
            )
          }
        >
          <div
            key="slide1"
            style={{ padding: 20, height: 150 }}
          >
            <p>
              "TranquilVibes has woven tranquility into my daily life. The guided meditations are a
              balm for the soul."
            </p>
            <span>-Emily Tranquil</span>
          </div>
          <div
            key="slide2"
            style={{ padding: 20, height: 150 }}
          >
            <p>
              "The wellness retreats are a journey to relaxation. TranquilVibes has become my
              sanctuary of peace."
            </p>
            <span>-Oliver Bliss</span>
          </div>
          <div
            key="slide3"
            style={{ padding: 20, height: 150 }}
          >
            <p>
              "The calm community hangouts provide a refuge where I feel truly understood and
              embraced."
            </p>
            <span>-Harmony Garcia</span>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
