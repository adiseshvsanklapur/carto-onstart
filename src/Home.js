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
} from 'grommet';
import {
    FormLock,
    Deploy,
    Trigger,
} from 'grommet-icons'
import Navbar from './components/Navbar';
import CartoFooter from './components/CartoFooter';

function Home() {
    return (
        <div>
            <Navbar />
            <Grommet>
                <Box background="black">
                    <Heading margin={{ top: "100px", bottom: "none" }} alignSelf="center" textAlign="center" color="white">Accurate Navigation for</Heading>
                    <Heading alignSelf="center" textAlign="center" margin={{ top: "5px", bottom: "10px" }}>Students and Visitors</Heading>
                    <Heading size="small" margin={{ top: "none", bottom: "50px" }} alignSelf="center" textAlign="center" color="gray">Going the Extra Mile</Heading>
                    <Button height="100px" href="https://carto-campus.vercel.app" target="_blank" margin={{ bottom: "100px" }} primary alignSelf="center" textAlign="center" label="Start Navigating For Free" color="red" />
                </Box>
                <Box height="500px" background="#2b2b2b" alignContent="center">
                    <Box align="center">
                        <Carousel margin={{ top: "50px", bottom: "50px" }} controls={false} play={5000}>
                            <Box pad="none" background="none" direction="row" alignContent="center">
                                <Box margin={{ right: "25px" }} alignContent="center" width="600px">
                                    <Image fit="cover" src="./carto-screenshot.png" height="50px" />
                                </Box>
                                <Box margin={{ left: "25px" }} alignContent="center" width="600px">
                                    <Heading margin={{ bottom: "10px" }} size="small" alignSelf="center" textAlign="center" >Accurate Navigation</Heading>
                                    <Heading margin={{ top: "10px" }} color="gray" size="20px" alignSelf="center" textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</Heading>
                                </Box>
                            </Box>
                            <Box pad="none" background="none" direction="row" alignContent="center">
                                <Box margin={{ right: "25px" }} alignContent="center" width="600px">
                                    <Heading margin={{ bottom: "10px" }} size="small" alignSelf="center" textAlign="center" >Easy Usage</Heading>
                                    <Heading margin={{ top: "10px" }} color="gray" size="20px" alignSelf="center" textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</Heading>
                                </Box>
                                <Box margin={{ left: "25px" }} alignContent="center" width="600px">
                                    <Image fit="cover" src="https://cdn.businessyab.com/assets/uploads/9f8e3903c0d35df62c05818124ec9182_-united-states-california-alameda-county-pleasanton-foothill-road-4375-foothill-high-school-pool.jpg" />
                                </Box>
                            </Box>
                            <Box pad="none" background="none" direction="row" alignContent="center">
                                <Box margin={{ right: "25px" }} alignContent="center" width="600px">
                                    <Image fit="cover" src="https://www.facilitron.com/directimages/5b0d80ff15fde700273c258a/open_graph" />
                                </Box>
                                <Box margin={{ left: "25px" }} alignContent="center" width="600px">
                                    <Heading margin={{ bottom: "10px" }} size="small" alignSelf="center" textAlign="center">Many Schools</Heading>
                                    <Heading margin={{ top: "10px" }} color="gray" size="20px" alignSelf="center" textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</Heading>
                                </Box>
                            </Box>
                        </Carousel>
                    </Box>
                </Box>
                <Box pad="large" alignContent="center" textAlign="center" alignSelf="center" align="center" gap="large" direction="row" background="black">
                    <Card background="light-1" align="center" alignContent="center" round="large">
                        <CardHeader margin={{top:"30px"}}>
                            <Deploy size="45px" color="red" />
                            <Heading size="40px">Fast</Heading>
                        </CardHeader>
                        <CardBody margin={{left:"50px", right:"50px", bottom:"30px"}}>
                            <Heading alignContent="center" textAlign="center" size="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Heading>
                        </CardBody>
                    </Card>
                    <Card background="light-1" align="center" alignContent="center" round="large">
                        <CardHeader margin={{top:"30px"}}>
                            <FormLock size="45px" color="red" />
                            <Heading size="40px">Safe</Heading>
                        </CardHeader>
                        <CardBody margin={{left:"50px", right:"50px", bottom:"30px"}}>
                            <Heading alignSelf="center" textAlign="center" size="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Heading>
                        </CardBody>
                    </Card>
                    <Card background="light-1" align="center" alignContent="center" round="large">
                        <CardHeader margin={{top:"30px"}}>
                            <Trigger size="45px" color="red" />
                            <Heading size="40px">Reliable</Heading>
                        </CardHeader>
                        <CardBody margin={{left:"50px", right:"50px", bottom:"30px"}}>
                            <Heading alignContent="center" textAlign="center" size="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Heading>
                        </CardBody>
                    </Card>
                </Box>
            </Grommet>
            <CartoFooter />
        </div>
    );
}

export default Home;
