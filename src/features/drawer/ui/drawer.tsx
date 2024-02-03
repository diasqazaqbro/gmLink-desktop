import { DrawerContent } from '../../../widgets/DrawerContent';
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
    const onMouseDown = (e: MouseEvent) => {
      if (!drawRef.current) return;
      isClicked.current = true;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = () => {
      if (!drawRef.current) return;
      isClicked.current = false;
      coords.current.lastY = drawRef.current.offsetTop;

      if (coords.current.lastY >= 1 && coords.current.lastY <= -5000) {
        drawRef.current.style.top = '0rem'
        if (setActive) setActive(false);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current || !drawRef.current) return;

      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      if (nextY < coords.current.lastY) {
        drawRef.current.style.top = `${nextY}px`;
      }
    };

    const container = containerRef.current;
    container?.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    container?.addEventListener('mousemove', onMouseMove);

    return () => {
      container?.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      container?.removeEventListener('mousemove', onMouseMove);
    };
  }, [setActive]);

  const handleDrawerClick = () => {
    if (setActive) { 
      setActive(true);
    }
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
        <DrawerContent onClick={() => setActive && setActive(!active)} />
      </div>
    </div>
  );
};



