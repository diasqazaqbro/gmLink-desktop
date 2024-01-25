import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data'
import sass from './MInsideChat.module.sass'
import Back from './assets/arrow_back_ios.svg'
import get from './assets/get.svg'
import sent from './assets/sent.svg'

interface Emoji {
    unified: string;
    native: string;
}

export function MInsideChat() { 
    const [isPickerVisible, setPickerVisible] = useState<boolean>(false);
    const [currentEmoji, setCurrentEmoji] = useState<Emoji | boolean>(false);
    const [message, setMessage] = useState<string>('');
    

    const handleEmojiPickerClick = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setPickerVisible(!isPickerVisible);
    }

    useEffect(() => {
        
    }, []); 
    
    const onEmojiClick = (emoji: Emoji ) => {
        setMessage(prevInput => prevInput + emoji.native);
        setCurrentEmoji(currentEmoji);
    }  
    
    const addEmoji = (e: Emoji) => {
        const sym = e.unified.split('_');
        const codeArray: number[] = sym.map((el: string) => parseInt(el, 16));
        const emoji = String.fromCodePoint(...codeArray);
        setMessage(message + emoji);
    };

    return <>
        <div className={sass.background}>
            <div className={sass.inner}>
                <div className={sass.header}>
                    <Link to='/menu/mchat' className={sass.back}>
                        <img src={Back} alt="" />
                    </Link>
                    <a className={sass.avatar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                            <circle cx="23.3564" cy="23.4276" r="22.5" fill="#5571FF"/>
                        </svg>
                    </a>
                    <div className={sass.header_text}>
                        <a>Artem</a>
                        <p>Was there 30 minutes ago</p>
                    </div>
                    <a href="" className={sass.dots}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="9" viewBox="0 0 35 9" fill="none">
                            <circle cx="4.80981" cy="4.92761" r="4" fill="#282727"/>
                            <circle cx="17.8098" cy="4.92761" r="4" fill="#282727"/>
                            <circle cx="30.8098" cy="4.92761" r="4" fill="#282727"/>
                        </svg>
                    </a>
                </div>
                <div className={sass.main}>
                    <div className={sass.data}>
                        <h1>Yesterday</h1>
                    </div>
                    <div className={sass.first_massage}>
                        <div className={sass.dataset}>
                            <h1><img src={get} alt="" /> 14:13</h1>
                        </div>
                        <div className={sass.massage}></div>
                    </div>

                    <div className={sass.second_massage}>
                        <div className={sass.dataset}>
                            <h1>14:13 <img src={sent} alt="" /></h1>
                        </div>
                        <div className={sass.massage}></div>
                    </div>

                    <div className={sass.third_massage}>
                        <div className={sass.dataset}>
                            <h1><img src={sent} alt="" /> 14:13</h1>
                        </div>
                        <div className={sass.massage}></div>
                    </div>
                </div>
            </div>
            <div className={sass.footer}>
                <div className={sass.textbar}>
                    <div className={sass.text_sending}>
                        
                        <div className={sass.send_left}>
                            
                            <div className={sass.emoji}>
                                <div 
                                    className={`${sass.emoji_picker} ${isPickerVisible ? sass.blueFill : ''}`}
                                    onClick={handleEmojiPickerClick}
                                >
                                    <a href="">
                                        <svg  xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                                            <path className={isPickerVisible ? `${sass.blue_stroke}` : ''} d="M13.4238 24.9363C19.9412 24.9363 25.2246 19.6529 25.2246 13.1355C25.2246 6.61811 19.9412 1.33472 13.4238 1.33472C6.90644 1.33472 1.62305 6.61811 1.62305 13.1355C1.62305 19.6529 6.90644 24.9363 13.4238 24.9363Z" stroke="black" stroke-width="2"/>
                                            <path className={isPickerVisible ? `${sass.blue_stroke}` : ''} d="M8.73535 16.21V16.21C10.836 19.742 15.9722 19.7179 18.1128 16.21V16.21" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                            <path className={`${sass.blueFill} ${isPickerVisible ? sass.blueFillActive : ''}`} d="M18.6084 9.52171C18.7028 10.8211 18.0764 11.9267 17.2101 11.9897C16.3439 12.0526 15.5642 11.0491 15.4698 9.74971C15.3754 8.45032 16.0019 7.34468 16.8681 7.28175C17.7344 7.21883 18.514 8.22233 18.6084 9.52171Z" fill="black"/>
                                            <path className={`${sass.blueFill} ${isPickerVisible ? sass.blueFillActive : ''}`} d="M9.63834 11.9823C10.5054 12.0401 11.2786 11.0327 11.3654 9.7321C11.4521 8.43151 10.8196 7.33029 9.95252 7.27245C9.08546 7.21461 8.31224 8.22206 8.22548 9.52265C8.13872 10.8232 8.77128 11.9245 9.63834 11.9823Z" fill="black"/>
                                        </svg>
                                    </a>
                                </div>
                                <span className={isPickerVisible ? `${sass.block}` : `${sass.none}`}>
                                    <Picker 
                                        data={data} 
                                        previewPosition='none' 
                                        onEmojiSelect={addEmoji}
                                        onEmojiClick={onEmojiClick}
                                    />
                                </span>
                            </div>
                            <input 
                                type="text" 
                                autoComplete='off' 
                                placeholder='Message'
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                        </div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 20 25" fill="none">
                                <path d="M2.12569 11.3826L7.51629 3.68403C8.40178 2.41942 9.75337 1.55836 11.2737 1.29028C12.7941 1.0222 14.3587 1.36906 15.6233 2.25455C16.8879 3.14004 17.7489 4.49163 18.017 6.01198C18.2851 7.53233 17.9382 9.09693 17.0527 10.3615L8.29033 21.9867C7.9979 22.4041 7.62613 22.7599 7.19623 23.0336C6.76633 23.3073 6.28673 23.4937 5.7848 23.5821C5.28287 23.6705 4.76845 23.6591 4.2709 23.5487C3.77336 23.4383 3.30244 23.2309 2.88503 22.9385C2.46761 22.6461 2.11188 22.2743 1.83815 21.8444C1.56442 21.4145 1.37804 20.9349 1.28966 20.433C1.20128 19.931 1.21262 19.4166 1.32305 18.9191C1.43347 18.4215 1.64082 17.9506 1.93324 17.5332L10.704 5.89603C11.0047 5.48538 11.4549 5.21057 11.9572 5.12855C12.4594 5.04653 12.9738 5.16515 13.3895 5.45882C13.8051 5.7525 14.0888 6.19774 14.1792 6.69857C14.2697 7.1994 14.1598 7.71574 13.8732 8.13628L5.67842 19.8396M10.6948 5.91079L10.7053 5.8958" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

