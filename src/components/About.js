import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    // <div className="aboutbg">
    //   <Container>
    //     <Card className="bg-dark text-black text-center" border="info">
    //       <Card.ImgOverlay>
    //         <Card.Text>
    //           <h4>About Us</h4>
    //           <br></br>
    //           <b>
    //             <i>
    //               "We created this app to find and share recipes. This is our
    //               final Milestone project for a software development bootcamp.
    //               We hope you enjoy it!
    //               <br></br>
    //               The idea for this application began when one member of the
    //               team was eating dinner and thought about the diversity of this
    //               team and how many amazing recipes they might have to share
    //               between them."
    //             </i>
    //           </b>
    //         </Card.Text>
    //       </Card.ImgOverlay>
    //     </Card>
    //   </Container>
    // </div>
    <div className="intro-main">
      <Card>
        <Card.Header>
          <h3>About Us</h3>
        </Card.Header>
        <Card.Body>
          <b>
            <i>
              "We created this app to find and share recipes. This is our final
              Milestone project for a software development bootcamp. We hope you
              enjoy it!
              <br></br>
              The idea for this application began when one member of the team
              was eating dinner and thought about the diversity of this team and
              how many amazing recipes they might have to share between them."
            </i>
          </b>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
