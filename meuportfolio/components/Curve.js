'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { text, curve, translate } from './Anim';

const routes = {
    "/": "Home",
    "/projects": "Projects",
    "/about": "About Me",
    "/contact": "Contact"
};

const anim = (variants) => ({
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit"
});

export default function Curve({ children, backgroundColor, onAnimationComplete }) {
    const router = useRouter();
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    });

    useEffect(() => {
        function resize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            console.log("route change");
        };
        router.events.on("routeChangeStart", handleRouteChange);
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router.asPath]);

    return (
        <div className='page curve' style={{ backgroundColor }}>
            <div style={{ opacity: dimensions.width == null ? 1 : 0 }} className='background' />
            <motion.p className='route' {...anim(text)}>
                {routes[router.asPath]}
            </motion.p>
            {dimensions.width != null && 
                <SVG {...dimensions} onAnimationComplete={onAnimationComplete} />
            }
            {children}
        </div>
    );
}

const SVG = ({ height, width, onAnimationComplete }) => {
    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

    return (
        <motion.svg {...anim(translate)} onAnimationComplete={onAnimationComplete}>
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    );
};
