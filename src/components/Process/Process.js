import React, { useEffect } from 'react';
import './Process.css';

function Process() {
  useEffect(() => {
    const sections = document.querySelectorAll('.content-section');

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => {
      fadeInObserver.observe(section);
    });

    // Smooth scroll function
    const smoothScroll = target => {
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };

    // Event listener for dashboard links
    document.querySelectorAll('.dashboard-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
      });
    });

    return () => {
      sections.forEach(section => {
        fadeInObserver.unobserve(section);
      });
      // Clean up event listeners if needed
      document.querySelectorAll('.dashboard-link').forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="app-container">
      <p className='title'>An efficient journey from start to finish.</p>
      <div className="dashboard">
        <ul>
          <li><a href="#meet" className="dashboard-link">meet</a></li>
          <li><a href="#site-discovery" className="dashboard-link">site discovery</a></li>
          <li><a href="#schematic-design" className="dashboard-link">schematic design</a></li>
          <li><a href="#budget-analysis" className="dashboard-link">budget analysis</a></li>
          <li><a href="#construction-documents" className="dashboard-link">construction documents</a></li>
          <li><a href="#structural-engineer" className="dashboard-link">structural engineer</a></li>
          <li><a href="#energy-efficient" className="dashboard-link">energy efficient</a></li>
          <li><a href="#mh-components" className="dashboard-link">mh components</a></li>
          <li><a href="#the-build" className="dashboard-link">the build</a></li>
        </ul>
      </div>
      <div className="container">
        <div id="meet" className='content-section fade-in'>
          <img src="https://mafcohouse.com/wp-content/uploads/2019/05/DJI_0034-2.jpg" alt="" />
          <p>
            We believe that great homes begin with great relationships. By listening and getting to know you we’ll gain an intimate understanding of the requirements of your home. Through discussions at our studio, on-site or in your home you’ll come to know us and the Mh design philosophy. And, together, we will develop an inspired, collaborative process to realizing your vision.
          </p>
        </div>

        <div id="site-discovery" className='content-section fade-in'>
          <img src="https://mafcohouse.com/wp-content/uploads/2019/06/1-2.jpg" alt="" />
          <p>
            Walking your property with you enables us to gain a sense of balance between nature and structure. To establish the optimum building footprint: to address set-back requirements, to truly understand the topography features and geographic orientation of the house. Time spent together on site will inform the home’s sensitivity and integration with your natural environment.
          </p>
        </div>

        <div id="schematic-design" className='content-section fade-in'>
          <img src="https://mafcohouse.com/wp-content/uploads/2019/05/DSC_0008-1-3.jpg" alt="" />
          <p>
            Mh develops a site-specific schematic design. The floor plan, elevation drawings, and 3D model enable you to envision the interior open plan flow, view each exterior elevation, and gain a visual perspective. With the drawings in hand, we revisit your property to confirm the schematic designs site orientation. Combining a meaningful design with a home that is synonymous with its surroundings has defined the success of each home.
          </p>
        </div>

        <div id="budget-analysis" className='content-section fade-in'>
          <img src="https://mafcohouse.com/wp-content/uploads/2019/06/1-2-1.jpg" alt="" />
          <p>
            We have developed a budget analysis spreadsheet that will take you step-by-step through both the Mh build and complete finishing of the house. Our team will provide a square foot estimate for the Mh supplied components. The cost to finish the home can vary, based on the level of finishing materials you choose. Our budget analysis spreadsheet will guide you through the options and costs for a variety of finishes, helping you to make the optimum choices to meet your design and budget requirements.
          </p>
        </div>

        <div id="construction-documents" className='content-section fade-in'>
          <img src="https://mafcohouse.com/wp-content/uploads/2019/05/DSC_0023-2.jpg" alt="" />
          <p>
            Mh works with municipal planning and building departments to establish by-law and building compliance. We will complete building permit applications, create site plan development drawings and SB12 energy design summaries. We develop BCIN certified construction drawings. The documents include General Notes, Typical Details, Foundation, Floor, Floor Framing, Roof Framing, and Roof Slope Plans, 4 Elevations, Cross Sections, Wall Sections, and Specified Detail drawings from the foundation to the roof slope construction.
          </p>
        </div>

        <div id="structural-engineer" className='content-section fade-in'>
          <img src="https://mafcohouse.com/wp-content/uploads/2019/05/DSC_0024-2.jpg" alt="" />
          <p>
            The Mh pre-engineered post and beam building system is specified to a 16’ x 16’ modular grid. The superstructure of our custom modular home eliminates the requirement for load-bearing walls, providing an open plan with the opportunity to integrate extensive floor-to-ceiling windows. Roof lines are kept low and flat. The Mh roof framing system is engineered to withstand maximum wind and snow loads. Our structural engineer partner, Blackwell, reviews, and stamps the structural drawings for building permit.
          </p>
        </div>

        <div id="energy-efficient" className='content-section fade-in'>
          <img src="https://mafcohouse.com/wp-content/uploads/2019/05/DSC_0158-2.jpg" alt="" />
          <p>
            Our governments have wisely implemented new home energy efficiency guidelines and we design our homes to comply. Working with our building science partner, Building Knowledge Canada, we create an energy model for your Mh. Design features include large cantilevered eaves that shade the interior from the summer sun while allowing the low-angle winter sun to penetrate and warm the building. Optimum energy performance is achieved using high spec building components including energy efficient glazing, high R-Value insulation, and high-efficiency heating systems. Our homes exceed energy guidelines and provide great performance and efficiency.
          </p>
        </div>

        <div id="mh-components" className='content-section fade-in'>
          <img src="https://mafcohouse.com/wp-content/uploads/2019/06/1-2-3.jpg" alt="" />
          <p>
            Mh supplies and deliver in phases all components including the pre-engineered superstructure, steel connectors, framing timber, sheathing plywood, waterproof wall membranes, two-ply modified roof membrane, windows, and exterior doors. We construction manage the general contractor (GC) to expedite the erection of the custom modular home, advising on building methods and construction materials. Mafco specialist contractors apply the roof membrane and install all exterior windows and doors to the phase, “sealed structure”.
          </p>
        </div>

        <div id="the-build" className='content-section fade-in'>
          <img src="https://mafcohouse.com/wp-content/uploads/2019/06/1-2-4.jpg" alt="" />
          <p>
            Building a custom modular home, whether in Toronto or beyond, using pre-engineered components and our proven construction method simplifies the building process, expedites construction and reduces costs throughout the project. We can recommend a qualified GC or work with a contractor of your choice. The GC is involved from the ground up, being responsible for the building’s foundation; the labour to erect the Mafco framing component; and, assisting in the provision of a network of sub-trades to install electrical, mechanical and plumbing requirements. When it comes time to finish your home inside and out, the GC will provide Mh specified or your choice of finish.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;