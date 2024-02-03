import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import sass from './card.module.sass';
import { Circle1, Circle2, Circle3, Dots } from '../../../shared/ui/Icon/Icon';

export const Card = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const [startX, setStartX] = useState<number>(0);
    const [startY, setStartY] = useState<number>(0);
    const [lastX, setLastX] = useState<number>(0);
    const [lastY, setLastY] = useState<number>(0);

    useEffect(() => {
        const container = containerRef.current;
        const box = boxRef.current;

        const onMouseDown = (e: MouseEvent) => {
            setStartX(e.clientX);
            setStartY(e.clientY);
        };

        const onMouseMove = (e: MouseEvent) => {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;

            const nextX = deltaX + lastX;
            const nextY = deltaY + lastY;

            if (nextX >= -30 && nextX <= 30) {
                if (box) box.style.left = `${nextX}px`;
            }

            setLastX(nextX);
            setLastY(nextY);
        };

        const onMouseUp = () => {
            setStartX(0);
            setStartY(0);
            setLastX(0);
            setLastY(0);

            if (lastX < -30 || lastX > 30) {
                if (box) box.style.left = '0px';
            }
        };

        container?.addEventListener('mousedown', onMouseDown);
        container?.addEventListener('mousemove', onMouseMove);
        container?.addEventListener('mouseup', onMouseUp);

        return () => {
            container?.removeEventListener('mousedown', onMouseDown);
            container?.removeEventListener('mousemove', onMouseMove);
            container?.removeEventListener('mouseup', onMouseUp);
        };
    }, [lastX, startX, startY]);

    return (
        <motion.div
            className={sass.swiperBox}
            ref={boxRef}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            style={{ left: 0 }}
            whileTap={{ cursor: 'grabbing', scale: 1.05 }}
        >
            <div className={sass.inner} ref={containerRef}>
                <div className={sass.swiperHeader}>
                    <h1>Artem / 18</h1>
                    <a className={sass.swiperDots}>
                        <Dots />
                    </a>
                </div>
                <div className={sass.cause}>
                    <div className={sass.causeBgc}>
                        <h1>Find in love</h1>
                    </div>
                </div>
                <div className={sass.swiperMain}></div>
                <div className={sass.swiperFooter}>
                    <div className={sass.swiperCircle}>
                        <Circle1 />
                    </div>
                    <div className={sass.swiperCircle}>
                        <Circle2 />
                    </div>
                    <div className={sass.swiperCircle}>
                        <Circle3 />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

