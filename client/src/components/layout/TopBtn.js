import Reactm, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';

const TopBtn = () => {

    const [displayBtn, setDisplayBtn] = useState(false);

    const toggleVisible = () => {
        const scrolled  = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setDisplayBtn(true)
        } else if (scrolled <= 200) {
            setDisplayBtn(false);
        }
    }

    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
    }
    
    window.addEventListener('scroll', toggleVisible);

    // useEffect(() => {
    //     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    //         setDisplayBtn(true);
    //     } else {
    //         setDisplayBtn(false);
    //     }
    // }, []);

    return (

        // displayBtn && 
            // <span id='top_div' class={ displayBtn ? `top-div-display` : `top-div-hidden` } onClick={ scrollToTop }>
            //     <i id='top_btn' className='fa-solid fa-arrow-up top-btn' style={{ paddingLef: '0.4rem' }}></i>
            //     <p>Top</p>
            // </span>

            <div className={ displayBtn ? `top-div-display` : `top-div-hidden` } onClick={ scrollToTop }>
                <Button className='top-btn'>
                    <i className="fa-solid fa-arrow-up" style={{ marginRight: '3px'}}></i>
                    Top
                </Button>
            </div>

    )
}

export default TopBtn