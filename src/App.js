import valimage from "./image1/a.jpg"
import kingsimage from "./image1/b.jpg"
function App() {
  return (
   <div className='container-fluid bg-light wage'>
    <div className="col-4 bg-info ">
      <div className="moaz-head p-4">
        <h1>The Moaz Story</h1>
        <p>We know SEO infact, we wrote the blog on it</p>
      </div>
      <div className="content p-4">
        <p>At Moz, we believe there is a better way to do marketing.
           A more valuable way where customers are earned rather than bought.
            We’re obsessively passionate about it, 
            and our mission is to help people achieve it.
             We focus on search engine optimization.
              It’s one of the least understood and least transparent aspects of great marketing,
               and we see that as an opportunity.
                We’re excited to simplify SEO for everyone through our software,
                 education, and community
         </p>
      </div>
      <div className="image-content bg-warning p-3">
        <div className="image"> <img src={valimage} alt="simple"/></div>
        <div className="text p-4">
          <p>To thrive in project management, you must understand basis concepts that will facilitate your career growth
          It’s one of the least understood and least transparent aspects of great marketing,
               and we see that as an opportunity.
                We’re excited to simplify SEO for everyone through our software,
                 education, and community
          </p>
        </div>
      </div>
      <div className="text-image bg-light">
        <div className="texts p-4 ">
        <p>To thrive in project management, you must understand basis concepts that will facilitate your career growth
          It’s one of the least understood and least transparent aspects of great marketing,
               and we see that as an opportunity.
                We’re excited to simplify SEO for everyone through our software,
                 education, and community
          </p>
        </div>
        <div className="imagex"> <img src={kingsimage} alt="sample"/>
        </div>
      </div>
    </div>

   </div>
        
  );
}

export default App;
