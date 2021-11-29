import Navbar from "./components/Navbar";
import CartoFooter from './components/CartoFooter';
import {
  Grommet,
  Box,
  Heading,
  Button,
  Carousel,
  Image,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Stack
} from 'grommet';

import {
  Group,
  Target,
  Notification,
  Trigger,
} from 'grommet-icons'

function About() {
  return (
    <div>
      <Navbar />
      <Box background="#1c1c1c">
        <Box height="400px" width="2000px" background="url('./bayarea-ss.png')" align="center" pad="large">
          <Notification color="white" size="100px"/>
          <Heading size="medium" margin={{top:"50px", bottom:"10px"}}>Our Mission</Heading>
          <Heading color="#999999" textAlign="center" alignSelf="center" size="small" margin="none" >Providing Accurate Navigation in Campuses,</Heading>
          <Heading color="#999999" textAlign="center" alignSelf="center" size="small" margin="none" >but also Bringing Together Communities</Heading>
        </Box>
      </Box>
      <Box pad="large" alignContent="center" textAlign="center" alignSelf="center" align="center" gap="large" direction="row" background="black">
        <Card background="light-1" align="center" alignContent="center" round="large">
          <CardHeader margin={{ top: "30px" }}>
            <Trigger size="45px" color="red" />
            <Heading size="40px">Who We Are</Heading>
          </CardHeader>
          <CardBody margin={{ left: "50px", right: "50px", bottom: "30px" }}>
            <Heading alignContent="center" textAlign="center" size="20px">Carto-Campus is an interactive application that provides students and teachers a platform to navigate from class to class without any difficulties. With schools being augmented, traversing through school campuses has become harder than ever before. While there are some programs and maps already available for students, they are more likely to obfuscate the students than to actually help them. Because of this, there are problems for temporary visitors of the school campus, such as substitute teachers, parents, or maybe even students, because they might have trouble finding particular classrooms.</Heading>
          </CardBody>
        </Card>
        <Card background="light-1" align="center" alignContent="center" round="large">
          <CardHeader margin={{ top: "30px" }}>
            <Group size="45px" color="red" />
            <Heading size="40px">Student Involvement</Heading>
          </CardHeader>
          <CardBody margin={{ left: "50px", right: "50px", bottom: "30px" }}>
            <Heading alignContent="center" textAlign="center" size="20px">Through our project students will be able to find the most optimal route for their classes and also find directions for places on campus. Our project will help students find clubs and other extracurricular activities, providing opportunities for students to explore and develop their interests. We hope to expand our project, and along with that, our team as well. For example, students may join our programming team and help us build our technology, giving students valuable experience in a growing field as well as helping to make our project better and easier to use.</Heading>
          </CardBody>
        </Card>
        <Card background="light-1" align="center" alignContent="center" round="large">
          <CardHeader margin={{ top: "30px" }}>
            <Target size="45px" color="red" />
            <Heading size="40px">Vision</Heading>
          </CardHeader>
          <CardBody margin={{ left: "50px", right: "50px", bottom: "30px" }}>
            <Heading alignSelf="center" textAlign="center" size="20px">Through Carto-Campus, we hope to create a community where students throughout the district (or maybe even the county) are able to navigate their schools with ease, and hopefully find some of their interests through clubs and other extracurriculars. Additionally, we would like to include many students in our project to provide them with experience in programming and cartography, inspiring them to create projects of their own.</Heading>
          </CardBody>
        </Card>
        
      </Box>
      <CartoFooter />
    </div>
  );
}

export default About;
