/* eslint-disable no-unused-vars */
import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import AWS from '../assets/aws.png'

const Skills = () => {
    return (
        <div
            name="skills"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
                        Skills
                    </p>
                    <p className="py-4">
                        These are the technologies I've worked with{' '}
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={HTML}
                            alt="HTML icon"
                        />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={CSS}
                            alt="HTML icon"
                        />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={JavaScript}
                            alt="HTML icon"
                        />
                        <p className="my-4">JAVASCRIPT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={ReactImg}
                            alt="HTML icon"
                        />
                        <p className="my-4">REACT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={GitHub}
                            alt="HTML icon"
                        />
                        <p className="my-4">GITHUB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Node}
                            alt="HTML icon"
                        />
                        <p className="my-4">NODE JS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Mongo}
                            alt="HTML icon"
                        />
                        <p className="my-4">MONGO DB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={Tailwind}
                            alt="HTML icon"
                        />
                        <p className="my-4">TAILWIND</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={AWS}
                            alt="HTML icon"
                        />
                        <p className="my-4">AWS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={
                                'data:image/png;base64,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'
                            }
                            alt="HTML icon"
                        />
                        <p className="my-4">METAMASK</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={
                                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA4VBMVEX/////8E312gwjIyMVGR//8U323BT12AAdHiH12gD/90//8k3/8Ej/9E7/9k4AAB0AACD67ab99s3/7z786Tz/8n4AABr//vf78bH//vb+++ft30n05kv+7Ub54yz/96n/8lf9+Nj78rkRFh/56oX89cP/8mH/7zn23jP9+d/453gACR0wLyXh1EfNwUP23i0KER734E//83n/96f/9ZT45WmelTloYy69sz8iJSH67JNwbC61qz6onzr7767441n/82+EfjNHRieRiTZaVyqAejI+PSVTTys4NiZrZi356oqc2KW4AAALUUlEQVR4nO2daVviShOGTwJJkwQIEIZNRBbZRAVUFLfRcZbjO///B72dPUqSrqQTgufq55oPcxxPrNuq7qrq7jT//MPExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExPTfUrtTa508fHud9IvadDrVNKH/enVzfTKed7I2jVrNzvj6asJpmlbUJXCWBP2/9K/2X29ag3bWZsZV7fqKm+poXLAEA3RyM/xy3pyfvOpwIWxeYcwpdzP+Qr4cvMLpXG9qwnXWhkM1nEbFs6S9Zm06TINpPD6s4lXWxoM0ielBw4u1rK0HaKDFB+SK37I2H6ATGkJOy9p8gG4ogpTjpl8gZdAMQ+zDQdb2E1Q7kwQyRpiKNwfM2K7OEOrTAWJEbTJsZo3iq86phCRpRgtoMArXhzcc5xsk8VjULrQgpzeHVYvbfNIx5Sj0MGoHxNg+M/l4XkzIhTbjgcTqg82XpAstxpOs4bCGIuJtJepCQ1p/nDFf58VxIHZhN1kX6ipqV5mG6rWHD7swcT6DcdrKjK+zRh6+xEehI+01o1n1u+R1YHK5cFfF4jADvuYL+siXmgt1TfffNw6WnxyYogt1Ffvz/QK2Pkcoj5KoSMMQtb3mjVP02YG8lKoLdU1v9sa3MwR1LdMGxHPqvgZje3cIYhemD4gjdbKXxnHO+wCmULD5InJ7yIwDX0CpDkwVAkeVU4pc6lPqYGcSjZQqBOFOoEPUUkasBQAugYTybeNWpiHkhHRX44IAofWMctQoVI4UOsRiiojzAEBwkMp3i8Lojs6JOFBTm246gYDAZFjeNvKFXGVbpkQUUkL0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'
                            }
                            alt="HTML icon"
                        />
                        <p className="my-4">HARDHAT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={
                                'data:image/png;base64,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'
                            }
                            alt="HTML icon"
                        />
                        <p className="my-4">TRUFFLE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
