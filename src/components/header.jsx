//dependency
import React from 'react';

export default function Header(props) {
    return (
        <div>
            {/* header */}
            <div className="bg-gray-100 lg:h-52 h-62">
                <div className="container content-center mx-auto p-2">
                    <div>
                        <p className="font-semibold text-3xl text-yellow-500 text-center pt-3">{props.heading}</p>
                        <p className="font-semibold text-l text-gray-400 text-center pb-3">{props.subHeading}</p>
                        <p className="text-gray-600 pt-1 pb-3 text-xl text-justify lg:w-4/6 p-2 mx-auto">
                            {props.contentHeading}
                        </p>
                    </div>
                </div>
            </div>
            <hr />  {/* batas antara header dengan content*/}
        </div>
    )
}