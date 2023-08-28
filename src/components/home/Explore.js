import React from 'react';
import '../css/Explore.css'
import { Player } from 'video-react';
import { exploreBtn, exploreBtn2 } from '../../Constant';
import video from "../../assets/video.mp4";


const Explore = () => {

  return (

    <div className='container-fluid'>
      <div className='row' >

        <div className="video-background">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="content">

            <div className='upperList'>
              {exploreBtn.map((list) => {
                return (
                  <ul className='explore-one'>
                    <li>
                      <button style={{ width: list.width }}>{list.title}</button>
                    </li>
                  </ul>
                )
              })}
            </div>
            
            <div className='explore-two'>
              <h1>Explore the world’s leading <br />design portfolios</h1>
              <h2>Millions of designers and agencies around the world showcase their portfolio work<br /> on Dribbble - the home to the world’s best design and creative professionals.</h2>

              <form action="/search" className="js-search-input-form search-input-form " method="get">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input id="search" type="search" name="q" placeholder="Search..." value="" className="search-input js-search-input  search_bar" />
              </form>

            </div>

            <div className=' sep-a lowerList'>

              <a>Trending searches</a>
              {exploreBtn2.map((list) => {
                return (
                  <ul className='explore-three'>
                    <li>
                      <button style={{ width: list.width }}>{list.title}</button>
                    </li>
                  </ul>
                )
              })}

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Explore