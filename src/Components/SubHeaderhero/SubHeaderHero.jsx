import "./SubHeaderHero.css"

const SubHeaderHero = () => {
  return (
    <section className="subheader-container">

      <div className="subheader-container-left-wrapper">
        <article className="subheader-writeup-holder">
          <h1 className="subheader-writeup-holder-h1">
            Get Help with <span style={{ color: "#8133F1" }}>Errands</span>
            <br /> or <span style={{ color: "#8133F1" }}>Earn Money</span>
            <br /> Running Them
          </h1>
        </article>

        <article className="subheader-writeup-holder-paragraph">
          <p className="subheader-p">
            Connect with trusted runners in your community. Post tasks, get help, or earn money by helping others with their daily errands.
          </p>
        </article>

        <div className="subheader-btn-wrapper">
          <button className="post-a-request-btn">Post a request</button>
          <button className="earn-a-request-btn">I want to earn</button>
        </div>
      </div>

      <div className="subheader-container-right-wrapper">

        <div className="right-top-image">
          <img 
            src="https://res.cloudinary.com/dwzomhflw/image/upload/v1761053105/Frame_427318968_tippyy.jpg"
            alt="delivery"
          />
        </div>

        <div className="right-bottom-image">
          <img 
            src="https://res.cloudinary.com/dwzomhflw/image/upload/v1761053105/Frame_427318970_ckikyd.jpg"
            alt="money"
          />
        </div>

        <span className="yellow-dot dot-1"></span>
        <span className="yellow-dot dot-2"></span>

      </div> 

    </section>
  )
}

export default SubHeaderHero
