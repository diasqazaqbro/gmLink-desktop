import sass from './Notification.module.sass'

export function Notification() {
  return <>
        <div className={sass.container}>
          <div className={sass.tnInner}>
            <div className={sass.tnCircle}>
              <div className={sass.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="45" viewBox="0 0 58 45" fill="none">
                    <g clip-path="url(#clip0_0_391)">
                    <path d="M3.90684 4.73148C-2.83091 11.5379 -0.377947 25.0512 9.38569 34.9143C19.1493 44.7774 32.5263 47.2554 39.2641 40.449C46.0018 33.6426 43.5489 20.1293 33.7852 10.2661C24.0216 0.40304 10.6446 -2.07491 3.90684 4.73148Z" fill="white"/>
                    <path d="M23.9108 10.3984C14.1442 20.2585 11.6905 33.7677 18.4303 40.5721C25.1701 47.3764 38.5513 44.8992 48.318 35.0391C58.0846 25.179 60.5384 11.6698 53.7985 4.86546C47.0587 -1.93887 33.6775 0.538333 23.9108 10.3984Z" fill="white"/>
                    <path d="M40.7188 27.6761H45.8751V12.0495H40.7188V27.6761Z" fill="#282727"/>
                    <path d="M35.5625 17.2584V22.4673H51.0315V17.2584H35.5625Z" fill="#282727"/>
                    <path d="M20.9594 16.5571C22.1433 15.8728 22.5468 14.3362 21.8607 13.1249C21.1745 11.9136 19.6586 11.4864 18.4747 12.1707L9.90039 17.1267C8.71652 17.811 8.31303 19.3477 8.99918 20.5589C9.68532 21.7702 11.2013 22.1974 12.3851 21.5132L20.9594 16.5571Z" fill="#282727"/>
                    <path d="M24.2451 23.2549C25.429 22.5706 25.8324 21.0339 25.1463 19.8226C24.4602 18.6113 22.9442 18.1841 21.7604 18.8684L13.186 23.8245C12.0022 24.5087 11.5987 26.0454 12.2848 27.2567C12.971 28.468 14.4869 28.8952 15.6708 28.2109L24.2451 23.2549Z" fill="#282727"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_0_391">
                        <rect width="57.5" height="43.5357" fill="white" transform="matrix(-1 0 0 -1 57.603 44.4207)"/>
                    </clipPath>
                    </defs>
                </svg>
              </div>
            </div>
            <h1 className={sass.tnTitle}>Turn on notifications</h1>
            <p className={sass.tnSubtitle}>This will allow you to immediately find out about new likes and messages.</p>
            <button className={sass.tnBtn}>Next</button>
          </div>
        </div>
  
  
  </>;

}
