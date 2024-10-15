import virtualGlasses from '../../assets/img/virtual-glasses-1.png'; 
import shape from '../../assets/svg/outline/shape.svg';
import location from '../../assets/svg/outline/location.svg';
import phone from '../../assets/svg/outline/phone-call.svg';
import mail from '../../assets/svg/outline/mail.svg';

import '../../ui/Sections/VirtualReality.css';

export default function VirtualReality(): React.JSX.Element {
  return (
    <section className='virtual-reality'>
      <div className='virtual-reality__flex'>
        <article className='virtual-reality__content'>
          <h3 className='virtual-reality__title'>
            <span className='virtual-reality__title_type-1'>Dive {' '}</span>
            <span className='virtual-reality__title_type-2'>Into The Depths Of {' '}</span>
            <span className='virtual-reality__title_type-1'>Virtual Reality</span>
          </h3>
          <p className='virtual-reality__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            nisl tincidunt eget. Lectus mauris eros in vitae.
          </p>
          <div className='virtual-reality__content-flex'>
            <button
              className='virtual-reality__button'
              type='button'>
              BUILD YOUR WORLD
            </button>
            <img
              className='virtual-reality__icon'
              src={shape}
              alt='not-foundImg'
            />
          </div>
        </article>
        <div className='virtual-reality__image-container'>
          <img
            className='virtual-reality__image'
            src={virtualGlasses}
            alt='not-foundImg'
          />
        </div>
      </div>
      <div className='virtual-reality__contacts'>
        <div className='virtual-reality__contacts-block-1'>
          <img
            className='virtual-reality__contacts-icon-1'
            src={location}
            alt='not-foundImg'
          />
          <div className='virtual-reality__contacts-item'>
            <strong className='virtual-reality__contacts-title'>
              Pay Us a Visit
            </strong>
            <a
              href='#address'
              className='virtual-reality__contacts-text'>
              Union St, Seattle, WA 98101, United States
            </a>
          </div>
        </div>
        <div className='virtual-reality__contacts-block-2'>
          <img
            className='virtual-reality__contacts-icon-2'
            src={phone}
            alt='not-foundImg'
          />
          <div className='virtual-reality__contacts-item'>
            <strong className='virtual-reality__contacts-title'>
              Give Us a Call
            </strong>
            <a
              href='tel:+11011111010'
              className='virtual-reality__contacts-text'>
              (110) 1111-1010
            </a>
          </div>
        </div>
        <div className='virtual-reality__contacts-block-3'>
          <img
            className='virtual-reality__contacts-icon-3'
            src={mail}
            alt='not-foundImg'
          />
          <div className='virtual-reality__contacts-item'>
            <strong className='virtual-reality__contacts-title'>
              Send Us a Message
            </strong>
            <a 
              href='mailto:contacts@HydraVTech.com'
              className='virtual-reality__contacts-text'>
              Contact@HydraVTech.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}