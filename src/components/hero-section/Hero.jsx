import React from 'react'
import "./hero.css"
import PrimaryBtn from '../Header/PrimaryBtn';

function Hero() {
  return <main>
    <div className="hero-left">
        <h1>Your Global Commerce Partner, Engineered for Peak Performance</h1>
        <p>Launch your eye-catching online store with ease,<br /> attract and convert more customers than ever before.</p>
        <PrimaryBtn title={"Get Started"}/>
        <div className='available'>
            <p>Also available on</p>
            <a href="/">  <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.0449 6.5233C16.9629 6.57464 15.0109 7.65797 15.0109 10.06C15.1029 12.7993 17.4742 13.76 17.5149 13.76C17.4742 13.8113 17.1569 15.0686 16.2169 16.3866C15.4709 17.522 14.6429 18.6666 13.3856 18.6666C12.1896 18.6666 11.7602 17.91 10.3802 17.91C8.89824 17.91 8.47891 18.6666 7.34424 18.6666C6.08691 18.6666 5.19758 17.4606 4.41091 16.336C3.38891 14.864 2.52024 12.554 2.48958 10.336C2.46891 9.16064 2.69424 8.00531 3.26624 7.02397C4.07358 5.65397 5.51491 4.72397 7.08891 4.69331C8.29491 4.65264 9.36824 5.5213 10.1042 5.5213C10.8096 5.5213 12.1282 4.69331 13.6202 4.69331C14.2642 4.69397 15.9816 4.88797 17.0449 6.5233ZM10.0022 4.45864C9.78758 3.3853 10.3802 2.31197 10.9322 1.6273C11.6376 0.799305 12.7516 0.237305 13.7122 0.237305C13.7736 1.31064 13.3849 2.3633 12.6902 3.12997C12.0669 3.95797 10.9936 4.58131 10.0022 4.45864Z"
                fill="#1A181E"
              />
            </svg></a>
            <a href="/">  <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.32231 1.7794C3.09611 2.05079 2.98172 2.39812 3.00238 2.75081V18.0722C2.98289 18.4248 3.09714 18.7717 3.32231 19.0436L3.37466 19.096L11.9544 10.5104V10.3068L3.37466 1.72705L3.32231 1.7794Z"
                fill="url(#paint0_linear_358_28886)"
              />
              <path
                d="M14.815 13.3722L11.9531 10.5103V10.3067L14.815 7.45068L14.879 7.48558L18.2702 9.41094C19.2416 9.95772 19.2416 10.8593 18.2702 11.4119L14.879 13.3373L14.815 13.3722Z"
                fill="url(#paint1_linear_358_28886)"
              />
              <path
                d="M14.8822 13.3371L11.9738 10.4287L3.32422 19.0434C3.52359 19.2073 3.77181 19.3002 4.02981 19.3076C4.2878 19.315 4.54093 19.2364 4.74933 19.0841L14.8647 13.3371"
                fill="url(#paint2_linear_358_28886)"
              />
              <path
                d="M14.8822 7.48543L4.74933 1.73263C4.54316 1.57412 4.28836 1.49211 4.02844 1.5006C3.76852 1.50909 3.51961 1.60755 3.32422 1.77917L11.9563 10.4113L14.8822 7.48543Z"
                fill="url(#paint3_linear_358_28886)"
              />
              <path
                opacity="0.1"
                d="M14.8161 13.2729L4.74725 18.985C4.5464 19.1347 4.30262 19.2155 4.05214 19.2155C3.80167 19.2155 3.55789 19.1347 3.35704 18.985L3.30469 19.0374L3.35704 19.0897C3.55789 19.2394 3.80167 19.3202 4.05214 19.3202C4.30262 19.3202 4.5464 19.2394 4.74725 19.0897L14.8626 13.3428L14.8161 13.2729Z"
                fill="#1A181E"
              />
              <path
                opacity="0.07"
                d="M3.32213 18.9504C3.09659 18.6763 2.98238 18.3275 3.00221 17.9731V18.072C2.98271 18.4246 3.09697 18.7715 3.32213 19.0434L3.37448 18.9911L3.32213 18.9504Z"
                fill="#1A181E"
              />
              <path
                opacity="0.07"
                d="M18.2716 11.3072L14.8164 13.2733L14.8804 13.3373L18.2716 11.3887C18.4705 11.3012 18.6426 11.1625 18.7704 10.9867C18.8981 10.8109 18.9769 10.6044 18.9987 10.3882C18.959 10.588 18.8724 10.7756 18.7459 10.9354C18.6195 11.0952 18.4569 11.2226 18.2716 11.3072Z"
                fill="#1A181E"
              />
              <path
                opacity="0.3"
                d="M4.74504 1.83636L18.2691 9.50871C18.4526 9.59123 18.6141 9.71588 18.7405 9.87254C18.8668 10.0292 18.9544 10.2134 18.9962 10.4103C18.9756 10.1937 18.8972 9.98667 18.7694 9.81069C18.6415 9.63472 18.4687 9.49628 18.2691 9.40982L4.74504 1.73166C3.79108 1.18488 3 1.63859 3 2.7496V2.84848C3 1.7433 3.79108 1.28377 4.74504 1.83636Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_358_28886"
                  x1="11.1982"
                  y1="2.58794"
                  x2="-0.429522"
                  y2="14.2157"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#008EFF" />
                  <stop offset="0.01" stopColor="#008FFF" />
                  <stop offset="0.26" stopColor="#00ACFF" />
                  <stop offset="0.51" stopColor="#00C0FF" />
                  <stop offset="0.76" stopColor="#00CDFF" />
                  <stop offset="1" stopColor="#00D1FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_358_28886"
                  x1="18.3865"
                  y1="10.4114"
                  x2="1.62251"
                  y2="10.4114"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFD800" />
                  <stop offset="1" stopColor="#FF8A00" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_358_28886"
                  x1="13.2942"
                  y1="11.9992"
                  x2="-2.4693"
                  y2="27.7627"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF3A44" />
                  <stop offset="1" stopColor="#B11162" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_358_28886"
                  x1="1.14874"
                  y1="-3.32216"
                  x2="8.19287"
                  y2="3.71616"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#328E71" />
                  <stop offset="0.07" stopColor="#2D9571" />
                  <stop offset="0.48" stopColor="#15BD74" />
                  <stop offset="0.8" stopColor="#06D575" />
                  <stop offset="1" stopColor="#00DE76" />
                </linearGradient>
              </defs>
            </svg></a>
        </div>
    </div>
    
    <div className="hero-right">
        <img src="https://mydukaan.io/_next/static/images/hero_image_shadow-new-ef38d2da7a63bb815162083389e05f32.webp" alt="" srcset="" />

    </div>
  </main>
}

export default Hero;