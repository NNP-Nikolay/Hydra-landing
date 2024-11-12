import '../../ui/Sections/About.css';
import shape from '../../assets/svg/outline/shape.svg';
import virtualGlasses from '../../assets/img/virtual-glasses-2.png';

export function About(): React.JSX.Element {
  return (
    <section className="about">
      <div className="about__flexTop">
        <div>
        <h3 className='about__title'>Introduction</h3>
          <div className='about__blockLeft'>
            <p className='about__highText'>TO HYDRA VR</p>
            <img
              className='about__arrow-icon'
              src={shape}
              alt='not-foundImg'
            />
          </div>
        </div>
          <div>
            <p className='about__smallText'>
              Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
              nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
              quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
              lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
            </p>
          </div>
      </div>
      <div className='about__flexBottom'>
        <div>
          <img
            className='about__image'
            src={virtualGlasses}
            alt='not-foundImg'
          />
        </div>
        <div>
          <h3 className='about__title'>
            About
          </h3>
          <p className='about__highText about__margin-highText'>
            HYDRA VR
          </p>
          <p className='about__smallText about__extraStyle-smallText'>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
            n tempor.
          </p>
          <button
            className='about__btnGetInTouch'
            type='button'
          >
            LET’S GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
}
