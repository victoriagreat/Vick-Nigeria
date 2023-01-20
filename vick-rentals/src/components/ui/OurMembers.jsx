import React from 'react'
import '../../styles/our-member.css'
import { Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import boy from '../../assets/all-images/boy.jpg'
import boy1 from '../../assets/all-images/boy1.webp'
import girl from '../../assets/all-images/girl.webp'
import girl1 from '../../assets/all-images/girl1.jpg'


const OUR__MEMBERS = [
    {
        name: 'John Doe',
        experience: '5 years of experience',
        fbUrl:'https://www.facebook.com/profile.php?id=100081156494575',
        twitUrl:'https://twitter.com/victoriaekene76',
        instUrl:'#',
        linkedinUrl:'https://www.linkedin.com/in/victoria-ekene-ozoanidiobi-72ba33245/',
        imgUrl: boy
    },

    {
        name: 'Amber Stone',
        experience: '5 years of experience',
        fbUrl:'https://www.facebook.com/profile.php?id=100081156494575',
        twitUrl:'https://twitter.com/victoriaekene76',
        instUrl:'#',
        linkedinUrl:'https://www.linkedin.com/in/victoria-ekene-ozoanidiobi-72ba33245/',
        imgUrl: girl1
    },

    {
        name: 'Lewis Ambry',
        experience: '5 years of experience',
        fbUrl:'https://www.facebook.com/profile.php?id=100081156494575',
        twitUrl:'https://twitter.com/victoriaekene76',
        instUrl:'#',
        linkedinUrl:'https://www.linkedin.com/in/victoria-ekene-ozoanidiobi-72ba33245/',
        imgUrl: boy1
    },

    {
        name: 'Ami Nicole',
        experience: '5 years of experience',
        fbUrl:'https://www.facebook.com/profile.php?id=100081156494575',
        twitUrl:'https://twitter.com/victoriaekene76',
        instUrl:'#',
        linkedinUrl:'https://www.linkedin.com/in/victoria-ekene-ozoanidiobi-72ba33245/',
        imgUrl: girl
    }
]

const OurMembers = () =>{
    return (
        <>
            {OUR__MEMBERS.map((item, index) =>(
                <Col lg='3' md='3' sm='4' xs='6' key={index} className='mb-4'>
                    <div className="single__member">
                        <div className="single__member-img">
                            <img src={item.imgUrl} alt="" className='w-100' />
                            <div className="single__member-social">
                                <Link to={item.fbUrl}><i class="ri-facebook-circle-fill"></i></Link>
                                <Link to={item.twitUrl}><i class="ri-twitter-line"></i></Link>
                                <Link to={item.instUrl}><i class="ri-instagram-line"></i></Link>
                                <Link to={item.linkedinUrl}><i class="ri-linkedin-line"></i></Link>
                            </div>
                        </div>

                        <h6 className='text-center mb-0 mt-3'>{item.name}</h6>
                        <p className="section__description text-center">{item.experience}</p>
                    </div>
                </Col>
            ))}
        </>
    );
    }


export default OurMembers
