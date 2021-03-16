import React, {useRef, useLayoutEffect, useState} from 'react';

let Progress = (props) => {
    const [show, doShow] = useState({
        showProgress: false,
    });

    const progress = useRef(null);

    useLayoutEffect(() => {
        const topPos = (element) => element.getBoundingClientRect().top;
        const getHeight = (element) => element.offsetHeight;
        const progressPos = topPos(progress.current);
        
        const progressHeight = getHeight(progress.current);
        
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight
            if (progressPos < scrollPos) {
                // Element scrolled to
                doShow((state) => ({ ...state, showProgress: true }));
                let progressPercent = ((scrollPos - progressPos) * 100) / progressHeight;
                if (progressPercent > 100) progressPercent = 100;
                if (progressPercent < 0) progressPercent = 0;
            } else if (progressPos > scrollPos) {
                // Element scrolled away (up)
                doShow((state) => ({ ...state, showProgress: false }))
            }
        }
        
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    let progressStyle = show.showProgress ? 'show' : 'hide';

    let total = props.total;
    let width =  100 / props.total.length;
    let liStyle = {width: width +'vw'};

    return (
        <div ref={progress}>
            <ul className={progressStyle + " progress"} >
                {total.map((level, index) => {
                    if (index === props.progress) {
                        return <li key={index} className="youAreHere teal" style={liStyle}>{index + 1}. <span>{level.title}</span></li>
                    } else if (index < props.progress) {
                        return <li key={index} className="complete dark" style={liStyle}>{index + 1}. <span>{level.title}</span></li>
                    } else {
                        return <li key={index} style={liStyle}>{index + 1}. <span>{level.title}</span></li>
                    }})}
            </ul>
        </div>
    )
}

export default Progress;