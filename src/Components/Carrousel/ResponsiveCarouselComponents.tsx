import styled from 'styled-components'

const breakpoints = {
  xs: 0,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1536,
}

export const devices = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  xxl: `(min-width: ${breakpoints.xxl}px)`,
}
// DESIGN  ELEMENTS
export const Wrapper = styled.div`
  height: ${({ height }:any) => (height ? height : '100%')};
  width: ${({ width }:any) => (width ? width : '100%')};
  position: relative;
  margin-top:20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  .inactive {
    color: rgba(80, 78, 78, 0.453);
    font-size: 2.5rem;
    display: block;

    :hover {
    color: rgba(80, 78, 78, 0.453);
  }
  }
`
export const CardContainer = styled.div`
  height: 100%;
  width: ${({ cardContainerWidth }) => (cardContainerWidth ? cardContainerWidth : '100%')};
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
  scroll-snap-type: both mandatory;
  scroll-snap-align: center;
  scroll-behavior: smooth;
  cursor: ew-resize;
  background: ${({ color }:any) => color && color};
  flex-direction: ${({ orientation }:any) => (orientation && typeof orientation === 'object' ? orientation.default : orientation)};
  ${({ orientation }:any) =>
    orientation &&
    typeof orientation === 'object' &&
    `
       @media ${devices.md} {
         flex-direction:  ${orientation.md};
       }
       @media ${devices.lg} {
         flex-direction: ${orientation.lg};
       }
       @media ${devices.xl} {
         flex-direction: ${orientation.xl};
       }
       `}
  .show {
    transform: translateY(0);
    opacity: 1;
  }
`
export const CarrouselCard = styled.div`
scroll-snap-align: start;
scroll-snap-stop: always;
transform: translateY(-100px);
opacity: 0;
transition: 150ms;
position: relative;
display: flex;
align-items: center;
justify-content: center;

// TO BE DELETED.... THIS WAS USED FOR BUILDING THE COMPONENT
font-size: 1.5em;
text-align: center;
outline: 1px solid black;


/* CONTROLS SIZE OF THE CARDS USING THE cardsPerView PROP */

${({ cardsPerView }:any) => (cardsPerView && typeof cardsPerView === 'object' ? `flex: 0 0 ${100 / cardsPerView.default}%;` : `flex: 0 0 ${100 / cardsPerView}%;`)}
    
    ${({ cardsPerView }:any) =>
      cardsPerView &&
      typeof cardsPerView === 'object' &&
      `
     @media ${devices.md} {
      flex: 0 0 ${100 / cardsPerView.md}%;
     }
     @media ${devices.lg} {
      flex: 0 0 ${100 / cardsPerView.lg}%;
     }
     @media ${devices.xl} {
      flex: 0 0 ${100 / cardsPerView.xl}%;
     }
     `}
  }
`

// flex: 0 0 ${({ cardsPerView }) => (cardsPerView ? 100 / cardsPerView : 100)}%;

const CarouselButton = styled.button`
  position: absolute;
  z-index: 100;
  min-height: 5rem;
  min-width: 5rem;
  font-size: 3.2rem;
  font-weight: 100;
  background: transparent;
  border: none;
  color: rgba(0, 0, 0, 0.571);
  transition: transform 0.1s ease-in-out;
  cursor: pointer;

  :hover {
    color: yellow;
  }
`
export const LeftCarouselButton = styled(CarouselButton)`
  ${({ orientation }) =>
    orientation && typeof orientation === 'object' ? `${orientation.default === 'row' ? 'left: 0; top:auto; transform: rotate(0deg);' : 'top: 0; transform: rotate(90deg);'}` : `${orientation === 'row' ? 'left: 0; top:auto; transform: rotate(0deg);' : 'top: 0; transform: rotate(90deg);'}`}

  ${({ orientation }) =>
    orientation &&
    typeof orientation === 'object' &&
    `
     @media ${devices.md} {
       ${orientation.md === 'row' ? 'left: 0; top:auto; transform: rotate(0deg);' : 'top: 0; transform: rotate(90deg);'};
     }
     @media ${devices.lg} {
        ${orientation.lg === 'row' ? 'left: 0; top:auto; transform: rotate(0deg);' : 'top: 0; transform: rotate(90deg);'};
     }
     `}
`
export const RightCarouselButton = styled(CarouselButton)`
  ${({ orientation }) =>
    orientation && typeof orientation === 'object'
      ? `${orientation.default === 'row' ? 'right: 0; bottom:auto; transform: rotate(0deg);' : 'bottom: 0; transform: rotate(90deg);'}`
      : `${orientation === 'row' ? 'right: 0; bottom:auto; transform: rotate(0deg);' : 'bottom: 0; transform: rotate(90deg);'}`}

  ${({ orientation }) =>
    orientation &&
    typeof orientation === 'object' &&
    `
   @media ${devices.md} {
     ${orientation.md === 'row' ? 'right: 0; bottom:auto; transform: rotate(0deg);' : 'bottom: 0; transform: rotate(90deg);'};
   }
   @media ${devices.lg} {
      ${orientation.lg === 'row' ? 'right: 0; bottom:auto; transform: rotate(0deg);' : 'bottom: 0; transform: rotate(90deg);'};
   }

   `}
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`
export const RightContainer = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;


`

export const Pagination = styled.nav`
  block-size: calc(10% 100%);
  position: absolute;
  z-index: 100;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  display: flex;
  margin: 0 auto;
  inline-size: max-content;
  /* DRY: set here the gap between the dots,
    * we will need it later to set the position
    * of the nav::before pseudoelement
    */
  --gap: 1rem;
  gap: var(--gap, 0.5rem);

  ::before,
  a {
    inline-size: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #9bc;
  }
  a {
    inline-size: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #9bc;
    text-indent: 100%;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0.33;
  }
  a:hover,
  a:focus {
    background: #eee;
  }

  ::before {
    content: '';
    position: absolute;
    /* z-index: 1; */
    /* display: block;
   cursor: not-allowed; */

    /* here we use the above --gap variable.
    * the --slide variable is set in the
    * keyframes below.
    */
    transform: translateX(calc((100% + var(--gap, 0.5rem)) * calc(var(--slide, 1) - 1)));
    animation: dot 1s steps(1, end) forwards;
    /* shhh... here is the magic */
    animation-timeline: slide;
  }
  /* timeline animation */
  @scroll-timeline slide {
    source: selector(#s);
    orientation: inline;
    time-range: 1s;
  }

  @keyframes dot {
    0% {
      --slide: 1;
    }
    12.5% {
      --slide: 2;
    }
    25% {
      --slide: 3;
    }
    37.5% {
      --slide: 4;
    }
    50%,
    100% {
      --slide: 5;
    }
    62.5%,
    100% {
      --slide: 6;
    }
    75%,
    100% {
      --slide: 7;
    }
    87.5%,
    100% {
      --slide: 8;
    }
  }
`
