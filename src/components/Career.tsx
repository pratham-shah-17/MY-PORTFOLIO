import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Head of AI & Automation</h4>
                <h5>Smilemax Hygiene Pvt. Ltd.</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Designed and implemented AI-driven automation workflows, reducing manual operations by ~25%. Developed demand forecasting models using ML techniques, improving inventory planning accuracy by ~20%. Built conversational AI and CRM automation systems, reducing response time by ~40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Intern</h4>
                <h5>Xyberia Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed an agentic RAG system using LLMs with memory-enabled multi-turn interactions. Developed data analytics dashboards (Python, Tableau) to extract insights, improving decision-making efficiency by 30%. Integrated AI with AR systems, increasing user engagement by 60%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech CSE (AI & ML)</h4>
                <h5>S.R.M Institute of Science and Technology</h5>
              </div>
              <h3>2021 - 2025</h3>
            </div>
            <p>
              CGPA: 8.23. Secretary – Pratham Kadam Foundation (NGO for welfare of women and children). Pursuing coursework and projects with a strong focus on Generative AI, Large Language Models, and Machine Learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
