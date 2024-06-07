import { AddIcon, TriangleDownIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import AllFunctions from "./functions";
import houseImage from "../assets/home-page-brown-2.png";
import eyeIcon from "../assets/eye-icon.png";
import noUsers from "../assets/No-users-3.png";
// import AllFunctions from "../components/functions";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import BasicUsage from "./modal";

const HouseTemplate = (props) => {
  const tenantsNames = props.tenantsNames;
  const tenantDetails = props.tenantDetails;
  // badd way to implement house names will change later
  const { houseNames } = AllFunctions();
  const houseId = tenantsNames[1][0] - 1;
  // console.log(houseId);
  // console.log(houseNames[houseId]);

  return (
    <Box className="flex flex-col  justify-center px-6  sm:pb-32  ">
      <Box className="ml-[-14px] pt-2">
        {" "}
        <BasicUsage />{" "}
      </Box>

      <Box className="  flex flex-col gap-4 justify-center items-center w-full mobile:mb-12">
        <Box className="mobile:text-2xl bread-words sm:text-5xl text-[rgba(220,239,214,.95)] font-bold">
          {houseNames[houseId][1][0]}
        </Box>
        <Box className="sm:text-xs mobile:text-[12px]">
          <span className=" text-[rgba(288,232,32,0.8)]">Location: </span>
          <span className="italic font-medium tracking-wider text-[rgba(222,235,199,.9)]">
            {houseNames[houseId][1][1]}
          </span>
        </Box>
      </Box>

      <Box className="flex mobile:flex-col sm:flex-col-reverse gap-8">
        {/* <Box className=" flex justify-center">
          <Box className="text-white flex flex-col gap-4 w-[70%]">
            <Box className="flex gap-4 mobile:pl-4  items-center  ">
              <span>Appartments</span>{" "}
              <AddIcon
                className="bg-[rgba(22,221,132,.5)] p-2 font-bold rounded-full"
                boxSize={6}
              />
            </Box>

            <Box
              className=" flex flex-col  mobile:justify-center mobile:items-start
         lgMobile:justify-start lgMobile:items-start 
         sm:justify-start sm:items-start  gap-6 p-1  overflow-x-scroll   "
              sx={{
                "&::-webkit-scrollbar": {
                  height: "6px", // Change the height of the scrollbar
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: " rgba(81, 90, 85, 0.4)", // Change the color of the scrollbar thumb
                  borderRadius: "4px", // Change the border radius of the scrollbar thumb
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "transparent", // Change the color of the scrollbar track
                },
              }}
            >
              <Box className=" flex mobile:gap-5   sm:gap-4     ">
                {tenantsNames[0] &&
                  tenantsNames[0]?.map((items, index) => {
                    return (
                      <div
                        key={index}
                        className="  mobile:w-24 mobile:h-24 sm:w-32 sm:h-32 flex flex-col justify-center items-center relative"
                        style={{
                          borderRadius: "36% 37% 27% 30% / 45% 33% 48% 52%",
                          background: "rgba( 81, 90, 85, 0.8 )",
                          // boxShadow: "0 5px 17px 0 rgba( 21, 138, 35, 0.37 )",
                          backdropFilter: "blur( 7.5px )",
                          WebkitBackdropFilter: "blur( 7.5px )",
                        }}
                      >
                        <Box className=" flex justify-center items-center bg-[rgba(22,221,132,.5)] sm:w-10 sm:h-10 mobile:w-6  mobile:h-6 rounded-full p-2 lg:text-[10px] mobile:text-[6px] sm:text-xs font-bold absolute    mobile:top-2 mobile:left-4  ">
                          {items[0]}
                        </Box>
                        <Box className="pt-2 mobile:text-[8px] sm:text-[12px]  mt-4 lg:text-base text-center  font-bold">
                          {items[1]}
                        </Box>
                      </div>
                    );
                  })}
              </Box>
            </Box>
          </Box>
        </Box> */}

        <Tabs
          isFitted
          variant="enclosed"
          display="flex"
          alignItems="center"
          height={{base:"auto" , sm:"auto"}}
          minHeight={{base:"auto", sm:"80vh"}}
           
          gap="8px"
          flexDirection={{ base: "column", sm: "row" }}
        >

          <TabList w={{ base:"auto", sm:"50%"}} height="50vh" display="flex" flexDirection="column"gap="6" className="text-white">
          <Box className="flex gap-4 sm:hidden mobile:pl-4  items-center justify-center ">
              <span> View Tenants</span>{" "}
              <TriangleDownIcon
                className="bg-[rgba(109,75,62,1)] p-2 font-bold rounded-full"
                boxSize={6}
              />

              
            </Box>

            <Box className="flex mobile:hidden gap-4 mobile:pl-4  items-center  ">
              <span>Tenants</span>{" "}
              <AddIcon
                className="bg-[rgba(109,75,62,1)] p-2 font-bold rounded-full"
                boxSize={6}
              />

              
            </Box>
          <Box
            mb="1em"
            display="flex"
            flexDirection="column"
            overflow="scroll"
             w="100%"            
            overflowY="scroll"
            overflowX="hidden"
            justifyContent="start"
            textDecorationLine=""
            sx={{
              "&::-webkit-scrollbar": {
                width: "4px", // Change the height of the scrollbar
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: " rgba(113,82,121,.2)", // Change the color of the scrollbar thumb
                borderRadius: "4px", // Change the border radius of the scrollbar thumb
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent", // Change the color of the scrollbar track
              },
            }}
          >
            <Box className="flex flex-col w-full items-start justify-start">
              {tenantsNames[0] &&
                tenantsNames[0]?.map((items, index) => {
                  return (
                    <Tab
                      key={index}
                      width="100%"
                      color="rgba(250,239,244,.8)"
                      padding="3"
                      className="grid text-white font mobile:min-w-[150px] mobile:text-xs sm:text-base  sm:min-w-[200px] "
                      _selected={{ color: "white", bg: "rgba(250,239,244,.25)", }}
                    >
                      <Box className="w-full flex  items-center justify-between">
                        <Box className="flex w-[66%] items-center justify-start gap-12">
                        <div
                          style={{
                            backgroundImage: `url(${houseImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "40px", // Adjust the width as necessary
                            height: "40px", // Adjust the height as necessary
                          }}
                          className="flex  items-end font-bold py-1 justify-center"
                        >
                          <span>{index + 1}</span>
                        </div>
                        <div> {items[1]}</div>
                        </Box>
                        <div className="w-6 h-6 ">
                          <img src={eyeIcon} alt="eye icon" />
                        </div>
                      </Box>
                    </Tab>
                  );
                })}
            </Box>
          </Box>

          </TabList>

          <TabPanels
            minHeight="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {tenantDetails &&
              tenantDetails?.map((items, index) => {
                if (items[1][0][1]  !=="Empty") {
                return (
                  <TabPanel key={index} minHeight={{mobile:"auto", sm:"100%"}}>


                    <Card
                      direction={{ base: "column", sm: "row" }}
                      overflow="hidden"
                      // variant="outline"
                      height={{base:"auto" , sm:"32rem"}}
                    >
                      <Image
                        bgColor="rgba(36,54,88,.5)"
                        objectFit="cover"
                        maxW={{ base: "100%", sm: "40%" }}
                        src={items[0]}
                        // src={noUsers}
                        alt="Caffe Latte"
                      />
                      <Box
                        display="flex"
                        className="w-full mobile:flex-col mobile:text-xs md:text-xs lg:text-base sm:flex-col justify-between"
                      >
                        <Stack width="100%">
                          <CardBody
                            display="flex"
                            flexDirection="column"
                            gap="12px"
                          >
                            <Heading size="md">
                              Information on tenant in{" "}
                              {`Appartement ${items[1][0][0]}`}
                            </Heading>
                            <Box
                              display="flex"
                              flexDirection="column"
                              gap="12px"
                            >
                              <Box
                                style={{
                                  backgroundColor: "rgb(15,163,130)",
                                  background:
                                    "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,63,130,0.8688725490196079) 46%)",
                                }}
                                className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold"
                              >
                                <span>Name:</span>
                                <span>{items[1][0][1]}</span>
                              </Box>
                              <Box
                                style={{
                                  backgroundColor: "rgb(15,163,130)",
                                  background:
                                    "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,63,130,0.8688725490196079) 46%)",
                                }}
                                className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold"
                              >
                                <span>Rent:</span>
                                <span> {items[1][0][2]}</span>
                              </Box>
                              <Box
                                style={{
                                  backgroundColor: "rgb(15,163,130)",
                                  background:
                                    "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,63,130,0.8688725490196079) 46%)",
                                }}
                                className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold"
                              >
                                {" "}
                                <span>Start Date:</span>
                                <span>{items[1][0][3]}</span>
                              </Box>
                            </Box>
                          </CardBody>

                          <CardFooter paddingTop="0">
                            <Button
                              variant="solid"
                              padding={4}
                              className="bg-gary-200"
                            >
                              Edit
                            </Button>
                          </CardFooter>
                        </Stack>

                        <Stack width="100%">
                          <CardBody
                            display="flex"
                            flexDirection="column"
                            gap="12px"
                          >
                            <Heading size="md">
                              Information on Rent in{" "}
                              {`Appartment  ${items[1][1][0]}`}
                            </Heading>
                            <Box
                              style={{
                                backgroundColor: "rgb(15,163,130)",
                                background:
                                  "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,163,130,0.8688725490196079) 46%)",
                              }}
                              className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold mobile:gap-3"
                            >
                              <span>Rent/month</span>
                              <span>{items[1][1][1]}</span>
                            </Box>

                            <Box
                              style={{
                                backgroundColor: "rgb(15,163,130)",
                                background:
                                  "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,163,130,0.8688725490196079) 46%)",
                              }}
                              className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold mobile:gap-3"
                            >
                              <span>Rent/month</span>
                              <div>{items[1][1][2]}</div>
                            </Box>

                            <Box
                              style={{
                                backgroundColor: "rgb(7,10,9)",
                                background:
                                  " linear-gradient(90deg, rgba(7,10,9,0.780098039215687) 30%, rgba(163,15,50,0.8688725490196079) 46%)",
                              }}
                              className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold mobile:gap-3"
                            >
                              <span>Total rent Not payed</span>
                              <span>{items[1][1][3]}</span>
                            </Box>
                            <Box
                              style={{
                                backgroundColor: "rgb(7,10,9)",
                                background:
                                  " linear-gradient(90deg, rgba(7,10,9,0.780098039215687) 30%, rgba(163,15,50,0.8688725490196079) 46%",
                              }}
                              className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold mobile:gap-3"
                            >
                              <span>Rent Status</span>
                              <span>{items[1][1][4]}</span>
                            </Box>
                          </CardBody>

                          <CardFooter paddingTop="0">
                            <Button
                              variant="solid"
                              padding={4}
                              className="bg-gary-200"
                            >
                              Edit
                            </Button>
                          </CardFooter>
                        </Stack>
                      </Box>
                    </Card>
                  </TabPanel>
                );
              
            }else{
              return (
                <TabPanel key={index} minHeight="100%">


                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    // variant="outline"
                    backgroundColor="blue.900"
                    height={{base:"auto" , sm:"32rem"}}
                    minHeight={{base:"32rem", sm:"auto"}}
                    className="flex items-center justify-center"
                  >
                    <Box
                      display="flex"
                      className="w-full  flex-col mobile:text-xs md:text-xs lg:text-base   justify-center items-center"
                    >
                    <Image
                      bgColor="rgba(36,54,88,.5)"
                      objectFit="cover"
                      maxW={{ base: "50%", sm: "30%" }}
                      src={noUsers}
                      // src={noUsers}
                      alt="Caffe Latte"
                    />

                    <Box className="text-white font-bold sm:text-4xl mobile:text-2xl">
                      Residence Un-used
                    </Box>
                    <Box>

                    <i className="fa fa-frown-o" aria-hidden="true"></i>
                    </Box>

                      
                    </Box>
                  </Card>
                </TabPanel>
              );
            }
              })}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
HouseTemplate.propTypes = {
  tenantsNames: PropTypes.arrayOf(PropTypes.array),
  tenantDetails: PropTypes.arrayOf(PropTypes.array),
};

export default HouseTemplate;