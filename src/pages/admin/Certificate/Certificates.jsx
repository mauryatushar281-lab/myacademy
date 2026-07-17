
import "./Certificate.css";

const Certificate = () => {

  const certificateData = {
    studentName: "Tushar Maurya",
    courseName: "React Development",
    instructor: "My-Academy",
    date: "21 June 2026",
    certificateId: "MYA-2026-00123",
  };

  const handlePrint = () => {
    window.print();
  };


  return (
    <div className="certificate-page">

      <div className="certificate-card">

        <div className="certificate-header">
          <h1>My-Academy</h1>
          <p>Certificate of Completion</p>
        </div>


        <div className="certificate-body">

          <p className="cert-text">
            This certificate is proudly presented to
          </p>


          <h2 className="student-name">
            {certificateData.studentName}
          </h2>


          <p className="cert-text">
            for successfully completing the course
          </p>


          <h3 className="course-name">
            {certificateData.courseName}
          </h3>


          <p className="description">
            Demonstrating dedication, consistency, and successful
            completion of all required lessons and assessments.
          </p>


          <div className="certificate-info">

            <div>
              <span>Instructor</span>
              <strong>
                {certificateData.instructor}
              </strong>
            </div>


            <div>
              <span>Date</span>
              <strong>
                {certificateData.date}
              </strong>
            </div>


            <div>
              <span>ID</span>
              <strong>
                {certificateData.certificateId}
              </strong>
            </div>

          </div>


          <div className="signature">

            <div>
              <div className="line"></div>
              <p>Director</p>
            </div>

            <div>
              <div className="line"></div>
              <p>Instructor</p>
            </div>

          </div>


        </div>


        <button 
          className="download-btn"
          onClick={handlePrint}
        >
          Download Certificate
        </button>


      </div>


    </div>
  );
};


export default Certificate;