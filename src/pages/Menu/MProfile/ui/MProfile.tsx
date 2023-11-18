import sass from './MProfile.module.sass'
export function MProfile() {
    return <>
    <div className={sass.background}>
        <div className={sass.inner}>
            <div className={sass.profile}>
                <div className={sass.info}>
                    <div className={sass.circle}></div>
                    <h1>Artem</h1>
                    <div className={sass.cause}>
                        <h1>Find in love</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
