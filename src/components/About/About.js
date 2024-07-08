import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const images = [
    'MAFCO-Proofs-2nd-Round-49-2.jpg',
    '17030-Mafco-Fall-4.jpg',
    'paddleboards.jpg',
    'lake-less-saturated.jpg',
    'jumping-rocks.png',
    '16_027_HALIBURTON-3.jpg',
  ];

  const teamMembers = [
    {
      img: 'Chloe_Katwijk.jpg',
      name: 'Chloë Hébert',
      title: 'Architectural Designer',
      description:
        'Chloë joined MAFCOhouse as an intern in June 2019 while enrolled in her B.Arch at the University of Toronto. She moved to Sweden in 2020 to pursue her M.Arch at Lund University. Since graduating in June 2022, she is back with us full-time working remotely from Europe.',
    },
    {
      img: 'Blackwell.jpg',
      name: 'Highland Design',
      title: 'Architectural Designer',
      description:
        'Highland Design is an architectural design firm located in the heart of cottage country in Haliburton, Ontario. They provide full design and project management services in order to provide ongoing support and ensure projects are completed on time and on budget.',
    },
    {
      img: 'Highland.jpg',
      name: 'Blackwell',
      title: 'Structural Engineers',
      description:
        'Blackwell are a team of creative professionals that pursue excellence in structural design. They have been providing structural engineering services to architects, developers and building owners since 1987 – producing efficient structures supported by tight contract documents.',
    },
    {
      img: '01-Freeman-Bunk-Carport.jpg',
      name: 'Emmerson Lumber',
      title: 'Lumber & Materials',
      description:
        'Full service building supply yard in Haliburton, Ontario since 1957. A series of mills were on the site over the years until W.O. Bailey constructed a veneer mill in 1945. His daughter Lois married William Emmerson in 1953 and shortly after, the Emmerson Lumber legacy was born.',
    },
  ];

  return (
    <div>
      <section className="intro wrap" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex">
          <div className="col w6 title center">
            <h2>Uniting families with their environments</h2>
          </div>
        </div>
      </section>

      <section className="slideshow" data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
        <div className="flex wrap remove-gutter-right">
          <div className="col w10 o2">
            <div className="pan">
              <div className="images">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="img"
                    style={{ backgroundImage: `url(../wp-content/uploads/2019/05/${img})` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="flex wrap">
          <div className="col w7 o2 spacing-bottom-medium spacing-top-large" data-aos="fade-up" data-aos-duration="1000">
            <h3>We love to build modernist homes that connect with and celebrate their natural environment.</h3>
          </div>
          <div className="col w7 o4 spacing-bottom-large" data-aos="fade-up" data-aos-duration="1000">
            <p>
              Our first home in 2001 was a personal retreat we named Barerock. An all-glass pavilion, flat roof, post and beam structure.
              The home was off-grid and sustainable, giving us a sense of independence and a synonymous relationship with our natural
              surroundings.
            </p>
          </div>
        </div>

        <div className="flex wrap remove-gutter-left" data-aos="fade-up" data-aos-duration="1000">
          <div className="col w10 o2">
            <div className="image" style={{ backgroundImage: 'url(../wp-content/uploads/2019/06/drag-may-5-1-1.jpg)' }}></div>
          </div>
        </div>

        <div className="flex wrap">
          <div className="col w7 o4 spacing-bottom-large spacing-top-large" data-aos="fade-up" data-aos-duration="1000">
            <p>
              We drew design inspiration from the timeless mid-century “International style” architecture alongside the 1945 – 1966
              California Case Study House Program. Barerock was a phenomenon – attracting the attention of architecture, lifestyle and
              ecological publications worldwide. Like minded people began contacting us and MAFCOhouse was born.
            </p>
          </div>
        </div>
      </section>

      <section className="full-width-slider">
        <div className="flex container">
          <div className="col w12">
            <h3 className="spacing-bottom">Team</h3>
          </div>
          <div className="col w12">
            <div className="slider fixed-width split-buttons" data-aos="fade-left" data-aos-duration="1000">
              {teamMembers.map((member, index) => (
                <div key={index} className="project-link no-underline">
                  <div className="thumbnail force-full">
                    <div style={{ backgroundImage: `url(../wp-content/uploads/2022/10/${member.img})` }}></div>
                  </div>
                  <p>{member.name}</p>
                  <p className="small margin-bottom">{member.title}</p>
                  <p className="small">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="flex wrap" data-aos="fade-up" data-aos-duration="1000">
          <div className="col w8 o2 spacing-top-large spacing-bottom-large">
            <h3>Our ideals remain the same – our inspiration now is you.</h3>
          </div>
        </div>

        <div
          className="image full-width"
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ backgroundImage: 'url(../wp-content/uploads/2019/05/DD-2.jpg)' }}
        ></div>
      </section>
    </div>
  );
};

export default About;
