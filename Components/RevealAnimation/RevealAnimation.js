import React, { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



function Reveal () {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
        }
    }, [isInView,mainControls] )
    return (
    <div className="">
        <motion.div variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity: 2, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.25}}
        >
            
        </motion.div>
        </div>
    );
};

export default Reveal