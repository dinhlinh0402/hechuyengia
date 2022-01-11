//dependency
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

//component
import Footer from '../components/footer';
import Header from '../components/header';

//data
import rulesResult from '../data/rules'

export default function Result() {
    const { params } = useParams();
    const navigate = useNavigate();

    const result = rulesResult(params);

    // console.log(params.length);
    console.log("result: ", result);
    const heading = "Trang kết quả dự đoán";
    const subHeading = "Kết quả kiểm tra";
    const contentHeading = "Kết quả của bài kiểm tra này là kết quả của việc sàng lọc dựa trên câu trả lời bạn đưa ra trong bài kiểm tra trước đó.";

    function saveHasil() {
        navigator.clipboard.writeText(window.location.href);
    }

    useEffect(() => {
        if (params.length < 23) {
            navigate('/'); //redirect
        }
    }, [navigate, params.length]);

    return (
        <main className="flex flex-col h-full">
            <Header heading={heading} subHeading={subHeading} contentHeading={contentHeading} />
            <div className="container content-center mx-auto">
                <div className="lg:w-1/2 mx-auto">
                    {/* Card 1 */}
                    <div className="container content-center mx-auto p-4">
                        <div className="p-4 m-5 bg-white rounded-xl shadow-md">
                            <div className="p-2">
                                <div className="lg:text-2xl text-lg font-medium text-black">Dự đoán rối loạn lo âu</div>
                            </div>
                            {result.map((value, i) => {
                                return (
                                    <div key={i}>
                                        <div className="flex items-center space-x-4 p-1">
                                            <div className="flex-shrink-0 content-start">
                                                <span className="text-center align-middle">&#9866;</span>
                                            </div>
                                            <div>
                                                <p className="text-gray-700 text-justify lg:text-lg">
                                                    {value}
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                );
                            })}
                            <div className="text-right">

                                <button className=" bg-green-400 p-2 pl-4 pr-4 ml-4 mt-2 font-bold rounded-md transition duration-600 hover:bg-green-500 text-white" onClick={() => saveHasil()}>
                                    Save
                                </button>
                                <div className="text-xs text-gray-500 pr-2">copy link to clipboard*</div>
                            </div>
                        </div>
                        <div className="lg:mb-10">
                            <div className="font-bold text-center lg:text-2xl p-4">
                                Bạn có thể làm gì với kết quả này?
                            </div>
                            <div className="text-justify text-gray-500 lg:text-xl">
                                Kết quả của bài test này là kết quả của một bài test sàng lọc nhằm phát hiện khả năng rối loạn lo âu có thể thuộc sở hữu của một người, vì vậy để có được kết quả chẩn đoán chính xác cần có sự tư vấn và xét nghiệm thêm của bác sĩ hoặc nhà tâm lý học.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 flex flex-1">
                <div className="container p-5 text-center m-auto flex-1">
                    <div className="text-center">
                        <p className="font-medium lg:text-3xl text-xl text-yellow-500 p-6"></p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}