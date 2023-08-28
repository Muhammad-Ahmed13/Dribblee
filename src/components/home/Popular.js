import React from 'react'
import '../css/Popular.css'
import { popular } from '../../Constant'
const Popular = () => {

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    {popular.map((popular) => {
                        return (
                            <div className="col-md-4 ms-2 main-popular" >
                                <div className="card border-0 ">
                                    <div className='displayOnHover'>
                                        <img src={popular?.image} className="card-img-top  big-image" />
                                        <span className=' justify-content-between on-image '>
                                            <a className='image-text'>{popular?.text}</a>
                                            <i class="fa-regular fa-bookmark"></i>
                                            <i class="fa-regular fa-heart"></i>
                                        </span>
                                    </div>



                                    <div className="card-body d-flex justify-content-between mt-5">
                                        <span className="card-title">
                                            <img src={popular?.logo} />
                                            <a className='title'>{popular?.title}</a>
                                            <span>
                                                <a className='popular-btn'>{popular?.btn}</a>
                                            </span>
                                        </span>
                                        <span className="card-title2">
                                            <i class="fa-solid fa-heart pop"></i>
                                            <a>{popular?.num}</a>
                                            <i class="fa-regular fa-eye"></i>
                                            <a>{popular?.views}</a>
                                        </span>

                                    </div>

                                </div>
                            </div>
                        )
                    })}
                 
                </div>

                <div className='centered-container'>
                    <div className='signUp'>
                        <button>Sign up to continue</button>
                        <a>or sign in</a>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Popular