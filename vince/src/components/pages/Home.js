import React from 'react'

const Home = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                
                <div className="carousel-item active">
                    <img src="https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/north-america/toronto-travel.adapt.1900.1.jpg" className="d-block w-100" alt="toronto" style={{opacity: 0.6}} />
                    <div className="carousel-caption d-none d-md-block carousel-box">
                        <h3>Hello World</h3>
                        <p>My name is Kang Suho who is passionate about Web Development.</p>
                    </div>
                </div>


                <div className="carousel-item">
                    <img src="https://wallpaperaccess.com/full/10098.jpg" className="d-block w-100" alt="tokyo" height="950" style={{opacity: 0.6}}  />
                    <div className="carousel-caption d-none d-md-block carousel-box">
                        <h3>こんにちは世界</h3>
                        <p>ウェブ開発を心から愛してやまないカンと申します</p>
                    </div>
                </div>


                <div className="carousel-item">
                    <img src="https://www.gsma.com/newsroom/wp-content/uploads//Korean-Mobile-IoT.jpg" className="d-block w-100" alt="korea" height="950" style={{opacity: 0.6}} />
                    <div className="carousel-caption d-none d-md-block carousel-box">
                        <h3>안녕하세요 월드</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
    )
}

export default Home
