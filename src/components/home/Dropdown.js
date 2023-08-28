import React, { useState } from 'react';
import '../css/Dropdown.css'

const Dropdown = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleHandler = () => {
        setIsOn(prevIsOn => !prevIsOn);
    }

    return (
        <div>
            <div className='left-pop'>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Popular</option>
                    <option value="2">New & Noteworthy</option>
                </select>


                <button onClick={toggleHandler}>
                    <img width={'15px'} src='https://www.svgrepo.com/show/472431/bars-filter.svg' />
                    Filters
                </button>
            </div>
            <div className='container'>
                <div className={`row ${isOn ? '' : 'd-none'}`}>
                    <div className='col-md-4 mt-4 '>
                        <label>Tags</label><br />
                        <div className="search-container">
                            <i className="fas fa-search search-icon"></i>
                            <input type="text" className="search-input tagsearch" />
                        </div>
                    </div>
                    <div className='col-md-4 mt-4 '>
                        <label>Color</label><br />
                        <div className="search-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" role="img" className="icon color-svg">
                                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                    <circle cx="10" cy="10.5" r="10" fill="#C4C4C4"></circle>
                                </mask>
                                <g mask="url(#mask0)">
                                    <rect x="10" y="0.5" width="10" height="20" fill="#3A8BBB"></rect>
                                    <path d="M20 4.5L10 -2.5V10.5L20 4.5Z" fill="#00B6E3"></path>
                                    <path d="M20 16.5L10 24.5V10.5L20 16.5Z" fill="#C142A0"></path>
                                    <path d="M0 0.5H10V10.5L0 16.5V0.5Z" fill="#FCC870"></path>
                                    <path d="M-7 0.5H10V10.5L-7 0.5Z" fill="#EF875B"></path>
                                    <path d="M0 16.5L10 24.5V10.5L0 16.5Z" fill="#FF5555"></path>
                                </g>
                                <circle cx="10" cy="10.5" r="3" fill="#F5F6F7"></circle>
                            </svg>
                            <input type='color' className="search-input tagsearch2 " />

                            <input placeholder='Enter hex or select' className="search-input tagsearch " />
                        </div>
                    </div>
                    <div className='col-md-4 mt-4'>
                        <label>Timeframe</label><br />
                        <div className="search-container">
                            <select className="form-select selector2" aria-label="Default select example">
                                <option selected>Now</option>
                                <option value="1">This Past Week</option>
                                <option value="2">This Past Month</option>
                                <option value="3">This Past Year</option>
                                <option value="4">All Time</option>

                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown