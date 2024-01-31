import sass from './drawer.module.sass';
import { FC, useEffect, useRef } from "react";

interface DrawerProps {
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerComponent: FC<DrawerProps> = (props) => {
  const { active, setActive } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const drawRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>(false);
  const coords = useRef<{
    startY: number,
    lastY: number
  }>({
    startY: 0,
    lastY: 0
  });

  useEffect(() => {
    if (!drawRef.current || !containerRef.current) return;

    const draw = drawRef.current;
    const container = containerRef.current;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startY = e.clientY;
    };
    const onMouseUp = () => {
      isClicked.current = false;
      coords.current.lastY = draw.offsetTop;

      if (draw.offsetTop >= 1 && draw.offsetTop <= 374) {
        draw.style.top = '0px'; 
        if (setActive) setActive(false);
      }

      if (draw.offsetTop >= 395) {
        draw.style.top = '0px';
        if (setActive) setActive(false);
      }
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      if (nextY > coords.current.lastY) {
        draw.style.top = `${nextY}px`;
      }
    };

    draw.addEventListener('mousedown', onMouseDown);
    draw.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);

    const cleanup = () => {
      draw.removeEventListener('mousedown', onMouseDown);
      draw.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
    };

    return cleanup;
  }, [setActive]);

  const handleDrawerClick = () => {
    if (setActive) setActive(true);
  };

  return (
    <div
      className={`${active ? sass.drawer_active : sass.drawer_not_active}`}
      onClick={handleDrawerClick}
      ref={containerRef}
    >
      <div
        className={sass.drawer_container}
        ref={drawRef}
        onClick={e => e.stopPropagation()}
      >
        {/* Drawer content */}
      </div>
    </div>
  );
};

