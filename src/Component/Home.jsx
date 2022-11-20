import React from 'react';
import "../css/style.css";
const Home = () => {
    return (
        <div>
      
          <div className="hero_area">
          
            {/* slider section */}
            <section className=" slider_section position-relative">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-5 offset-md-1 ">
                          <div className="detail_box">
                            <h1>
                              Balaji Digital <br />
                              Studio
                            </h1>
                            <p>
                              It is a long established fact that a reader will be distracted by the readable content
                            </p>
                            <div className="btn-box">
                              <a href="./about" className="btn-1">
                                About Us
                              </a>
                              <a href="./contact" className="btn-2">
                                Get A Quote
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 px-0">
                          <div className="img-box">
                            <img style={{borderRadius:"21%"}}  src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/274344911_103298992295433_4713454745635628948_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MrHYuAGu1d0AX9d8WLZ&_nc_ht=scontent-del1-1.xx&oh=00_AfAPNiB6PX8dLdHBAP3yxwASMCDaKD3SvXQX0-CBsNVCdw&oe=637E5C5D" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
                
              </div>
            </section>
            {/* end slider section */}
          </div>
          {/* about section */}
          <section className="about_section layout_padding">
            <div className="container">
              <div className="heading_container">
                <h2>
                  About Studio
                </h2>
              </div>
              <div className="box">
                <div className="img-box">
                  <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/275610658_114994847792514_8262503328088452631_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zwSx6_6dOJ8AX9poB_G&_nc_ht=scontent-del1-1.xx&oh=00_AfAx4NZ5BRy_l_9z7t9YWLC384uz8HcjojSxCM5L-5n1Gg&oe=637E7947" alt="" />
                  <div className="about_img-bg">
                    <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/275687133_115687791056553_5490610170336203646_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LvI8fzYC-jwAX-BJg--&tn=LYmK134n7bEoFs_V&_nc_ht=scontent-del1-1.xx&oh=00_AfBHXzr_PXoTWmgP6DvtEP38et-zcJuDb82apVbQ5LFCQw&oe=637CC3C7" alt="" />
                  </div>
                </div>
                <div className="detail-box">
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters,
                  </p>
                  <div>
                    <a href>
                      about More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end about section */}
          {/* portfolio section */}
          <section className="portfolio_section layout_padding">
            <div className="container">
              <div className="heading_container">
                <h2>
                  Our portfolio
                </h2>
                <p>
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                </p>
              </div>
              <div className="portfolio_container layout_padding2">
                <div className="box-1">
                  <div className="img-box b-1">
                    <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/275687133_115687791056553_5490610170336203646_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LvI8fzYC-jwAX-BJg--&tn=LYmK134n7bEoFs_V&_nc_ht=scontent-del1-1.xx&oh=00_AfBHXzr_PXoTWmgP6DvtEP38et-zcJuDb82apVbQ5LFCQw&oe=637CC3C7" alt="" />
                    <div className="btn-box">
                      <a href className="btn-1">
                      </a>
                    </div>
                  </div>
                  <div className="img-box b-2">
                    <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/275610658_114994847792514_8262503328088452631_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zwSx6_6dOJ8AX9poB_G&_nc_ht=scontent-del1-1.xx&oh=00_AfAx4NZ5BRy_l_9z7t9YWLC384uz8HcjojSxCM5L-5n1Gg&oe=637E7947" alt="" />
                    <div className="btn-box">
                      <a href className="btn-1">
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box-2">
                  <div className="box-2-top">
                    <div className="img-box b-3">
                      <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/275610658_114994847792514_8262503328088452631_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zwSx6_6dOJ8AX9poB_G&_nc_ht=scontent-del1-1.xx&oh=00_AfAx4NZ5BRy_l_9z7t9YWLC384uz8HcjojSxCM5L-5n1Gg&oe=637E7947" alt="" />
                      <div className="btn-box">
                        <a href className="btn-1">
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box-2-top2">
                    <div className="img-box b-4">
                      <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/316039342_181045591187439_3356458111887081326_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xKRR4EeRYm8AX_kAXYy&_nc_ht=scontent-del1-1.xx&oh=00_AfBEuk5u11n02TNxmlHlQ0JssvJoyFWu4LP4qEx3qLWLEA&oe=637DF026" alt="" />
                      <div className="btn-box">
                        <a href className="btn-1">
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box-2-btm">
                    <div className="img-box b-5">
                      <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/316039938_181045544520777_7188796293731940668_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iz6-r4GFcXIAX_ggg44&tn=LYmK134n7bEoFs_V&_nc_ht=scontent-del1-1.xx&oh=00_AfCBe-ip1dNetPaLFRzJ9Uk7jQFXdW9MrSrZ32jNFJh2bg&oe=637D462D" alt="" />
                      <div className="btn-box">
                        <a href className="btn-1">
                        </a>
                      </div>
                    </div>
                    <div className="img-box b-6">
                      <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/316084580_181045557854109_621078519528389236_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=brj2jNKXv6sAX_HLLaU&_nc_ht=scontent-del1-1.xx&oh=00_AfA3txF-XOD0ynSgRcIVAfh8kvF1ILgTOx3M35Ao3LcZww&oe=637E0DD4" alt="" />
                      <div className="btn-box">
                        <a href className="btn-1">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="see_btn">
                <a href>
                  See More
                </a>
              </div>
            </div>
          </section>
          {/* end about section */}
          {/* achieve section */}
          <section className="achieve_section layout_padding">
            <div className="container">
              <div className="heading_container">
                <h2>
                  ACHIEVEMENTS
                </h2>
                <p>
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                </p>
              </div>
              <div className="achieve_container">
                <div className="box">
                  <div className="img-box">
                    <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/316084580_181045557854109_621078519528389236_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=brj2jNKXv6sAX_HLLaU&_nc_ht=scontent-del1-1.xx&oh=00_AfA3txF-XOD0ynSgRcIVAfh8kvF1ILgTOx3M35Ao3LcZww&oe=637E0DD4" alt="" />
                  </div>
                  <div className="detail-box">
                    <h2>
                      1000+
                    </h2>
                    <h6>
                      Photo Session
                    </h6>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/316039938_181045544520777_7188796293731940668_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iz6-r4GFcXIAX_ggg44&tn=LYmK134n7bEoFs_V&_nc_ht=scontent-del1-1.xx&oh=00_AfCBe-ip1dNetPaLFRzJ9Uk7jQFXdW9MrSrZ32jNFJh2bg&oe=637D462D" alt="" />
                  </div>
                  <div className="detail-box">
                    <h2>
                      9000+
                    </h2>
                    <h6>
                      Happy Customers
                    </h6>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/316039342_181045591187439_3356458111887081326_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xKRR4EeRYm8AX_kAXYy&_nc_ht=scontent-del1-1.xx&oh=00_AfBEuk5u11n02TNxmlHlQ0JssvJoyFWu4LP4qEx3qLWLEA&oe=637DF026" alt="" />
                  </div>
                  <div className="detail-box">
                    <h2>
                      1000+
                    </h2>
                    <h6>
                      Archive Photographs
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end achieve section */}
          {/* client section */}
          <section className="client_section layout_padding-bottom">
            <div className="container">
              <div className="heading_container">
                <h2>
                  Testimonial
                </h2>
                <p>
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                </p>
              </div>
              <div className="layout_padding2-top">
                <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="btn_container">
                        <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-9 col-lg-8">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="detail-box">
                            <h4>
                              Aloz den
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                              labore
                              et
                              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                              cillum
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item ">
                          <div className="detail-box">
                            <h4>
                              Aloz den
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                              labore
                              et
                              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                              cillum
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item ">
                          <div className="detail-box">
                            <h4>
                              Aloz den
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                              labore
                              et
                              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                              cillum
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end client section */}
          {/* contact section */}
          <section className="contact_section layout_padding">
            <div className="bg-img1">
              <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/316084580_181045557854109_621078519528389236_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=brj2jNKXv6sAX_HLLaU&_nc_ht=scontent-del1-1.xx&oh=00_AfA3txF-XOD0ynSgRcIVAfh8kvF1ILgTOx3M35Ao3LcZww&oe=637E0DD4" alt="" />
            </div>
            <div className="bg-img2">
              <img src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/316084580_181045557854109_621078519528389236_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=brj2jNKXv6sAX_HLLaU&_nc_ht=scontent-del1-1.xx&oh=00_AfA3txF-XOD0ynSgRcIVAfh8kvF1ILgTOx3M35Ao3LcZww&oe=637E0DD4" alt="" />
            </div>
            <div className="container">
              <div className="heading_container">
                <h2>
                  Contact Us
                </h2>
              </div>
              <div className>
                <div className="row">
                  <div className="col-md-8 mx-auto">
                    <form action>
                      <div className="contact_form-container">
                        <div>
                          <div>
                            <input type="text" placeholder="Name" />
                          </div>
                          <div>
                            <input type="text" placeholder="Phone Number" />
                          </div>
                          <div>
                            <input type="email" placeholder="Email" />
                          </div>
                          <div className>
                            <input type="text" placeholder="Message" className="message_input" />
                          </div>
                          <div className=" d-flex justify-content-center ">
                            <button type="submit">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end contact section */}
          {/* info section */}
          <section className="info_section ">
            
          </section>
          {/* end info_section */}
        </div>
      );
  
}

export default Home