import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

import weatherImg from '../assests/images/weather.png'
import guideImg from '../assests/images/guide.png'
import customizationImg from '../assests/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "calculate Weather",
        desc: "Travel is the movement of people between distant geographical locations. "
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Travel is the movement of people between distant geographical locations. "
    },
    {
        imgUrl: customizationImg,
        title: "customization",
        desc: "Travel is the movement of people between distant geographical locations. "
    },

];

const ServiceList = () => {
  return (
    <>
    {servicesData.map((item, index) => ( 
    <Col lg='3' key={index}>
        <ServiceCard item={item} />
        </Col>
        ))}
    </>
  );
};

export default ServiceList