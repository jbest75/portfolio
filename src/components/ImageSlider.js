import React, { useState, useRef } from 'react'
import { SliderData } from './SliderData'
import { SliderDataMobile } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaMobileAlt, FaDesktop, FaHatWizard, FaReact, FaLinkedin } from 'react-icons/fa'
import { GiRaiseZombie, GiCowboyHolster } from "react-icons/gi";


const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    // todo - get buttons to not load 2 slides, mobile and desktop, per click
    // and speed test and optimization

    const [showMobile, setShowMobile] = useState(false)
    const [showDesktop, setShowDesktop] = useState(false)
    const [hideShowMobile, setHideShowMobile] = useState(false)
    const [hideShowDesktop, setHideShowDesktop] = useState(false)
    const length = slides.length
    const ref = useRef(null)

    const scrollToSlides = () => {
        setTimeout(() => {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        }, 25);
    };

    const nextslide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const previousslide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextslideMobile = () => {
        const length = 11
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const previousslideMobile = () => {
        const length = 11
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const showMobileWork = () => {
        setHideShowMobile(!hideShowMobile)
        setShowMobile(!showMobile)
        if (showDesktop === true) {
            setHideShowDesktop(!hideShowDesktop)
            setShowDesktop(false)
        }
        setCurrent(0)
        scrollToSlides()
    }
    const showDesktopWork = () => {
        setHideShowDesktop(!hideShowDesktop);
        setShowDesktop(!showDesktop)
        if (showMobile === true) {
            setHideShowMobile(!hideShowMobile)
            setShowMobile(false)
        }
        setCurrent(0)
        scrollToSlides()
    }

    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='wrapper'>
            <h1>
                <p><span>Joshua Best's</span> Portfolio</p>
                <p><small>Design, Print & Frontend Developer</small></p>
                <p><span className='red'>Angular</span> <span className='white'>Html</span> <span className='green'>CSS</span> <span className='blue'>React</span></p>
                <p className='small'><b>&copy; Warrior Workshop LLC, Evil Duck Studios & Joshua Best.</b> Screenshots are &copy; by their perspective persons and or companys</p>
                <img id="headerFlag" src={require("../images/usflag.png")} alt="Made In The USA!" tag="Made In The USA!"></img>
            </h1>
            <section id='mobileOrDesktop'>
                <h2>Check out some of my previous work!</h2>
                <div id='choiceWrapper'>
                    <div className={hideShowMobile ? "choiceBtn viewing" : "choiceBtn notViewing"} onClick={showMobileWork}>
                        <FaMobileAlt className='icon' />
                        <p>
                            <b>Web Mobile</b>
                            <br />
                            (handful of slides)
                            <br />
                            <FaReact className='blue' />
                        </p>
                    </div>
                    <div className={hideShowDesktop ? "choiceBtn viewing" : "choiceBtn notViewing"} onClick={showDesktopWork}>
                        <FaDesktop className='icon' />
                        <p>
                            <b>Web & Design</b>
                            <br />
                            (handful of slides)
                            <br />
                            <FaReact className='blue' />
                        </p>
                    </div>
                    <a className='choiceBtn notViewing' href='https://jbest75.github.io/RuneLordsGameInstructionsApp/' target='_blank'>
                        <FaHatWizard  className='icon wizard' />
                        <p>
                            <b>My Runlords Card Game App</b>
                            <br />
                            (angular 17)
                        </p>
                    </a>
                    <a className='choiceBtn notViewing' href='https://www.thezombietimes.com' target='_blank'>
                        <GiRaiseZombie className='icon zombie' />
                        <p>
                            <b>One of My Sites</b>
                            <br />
                            (old - built on jekyll)
                        </p>
                    </a>
                    <a className='choiceBtn notViewing' href='https://www.evilduckstudios.com' target='_blank'>
                        <GiCowboyHolster className='icon leather' />
                        <p>
                            <b>Leather Work</b>
                            <br />
                            (leather products, Evil Duck Studios)
                        </p>
                    </a>
                    <a ref={ref} className='choiceBtn notViewing' href='http://www.linkedin.com/in/joshua-best-66b0771a' target='_blank'>
                        <FaLinkedin className='icon' />
                        <p>
                            <b>About Me</b>
                            <br />
                            (linkedin profile, contact info, resume, etc...)
                        </p>
                    </a>
                </div>
            </section>


            {/* {showDesktop && ( */}
            <section id='DesktopSlides' className={hideShowDesktop ? "slider show" : "slider hide"}>
                <FaArrowAltCircleLeft className="previous-arrow icon" onClick={previousslide} />
                <FaArrowAltCircleRight className="next-arrow icon" onClick={nextslide} />

                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            <p className='description'>{slide.description}</p>
                            {index === current && (<img src={slide.image} className='image {' alt={slide.description} title={slide.description} />
                            )}
                        </div>
                    )
                })}
            </section>
            {/* )} */}

            {/* {showMobile && ( */}
            <section id='mobileSlides' className={hideShowMobile ? "slider show" : "slider hide"}>
                <FaArrowAltCircleLeft className="previous-arrow icon" onClick={previousslideMobile} />
                <FaArrowAltCircleRight className="next-arrow icon" onClick={nextslideMobile} />

                {SliderDataMobile.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide forMobile active' : 'slide forMobile'} key={index}>
                            <p className='description'>{slide.description}</p>
                            {index === current && (<img src={slide.image} className='image {' alt={slide.description} title={slide.description} />
                            )}
                        </div>
                    )
                })}
            </section>
            {/* )} */}
        </div>
    )
}

export default ImageSlider
