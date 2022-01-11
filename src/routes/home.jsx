//dependency
import React from 'react';
import { NavLink } from 'react-router-dom';

//components
import Footer from '../components/footer'

//assets
import question from '../assets/question.svg'
import clock from '../assets/clock.svg'
import list from '../assets/list.svg'
import Header from '../components/header';


export default function Home() {
    const heading = "Phát hiện rối loạn lo âu";
    const subHeading = "Phát hiện dựa trên một loạt các câu hỏi ngắn";
    const contentHeading = "Andect là một hệ thống chuyên gia hữu ích để phát hiện các rối loạn lo âu có khả năng thuộc sở hữu của bạn dựa trên một loạt các câu hỏi đã được tham khảo ý kiến các chuyên gia.";

    return (
        <main className="flex flex-col h-full">
            <Header heading={heading} subHeading={subHeading} contentHeading={contentHeading} />

            {/* content 1 */}
            <div>
                <div className="container content-center mx-auto">
                    <div className="lg:w-1/2 mx-auto">
                        {/* Card 1 */}
                        <div className="container content-center mx-auto p-6">
                            <div className="p-6 max-w-2xl bg-white rounded-xl shadow-md flex items-center space-x-4 transition hover:bg-gray-50 transform hover:scale-105 duration-500">
                                <div className="flex-shrink-0 content-start">
                                    <img className="h-12 w-12 col fill-current text-black" src={question} alt="question logo" />
                                </div>
                                <div>
                                    <div className="text-xl font-medium text-black">
                                        Rối loạn lo âu là gì?</div>
                                    <p className="text-gray-500 text-justify">
                                        Rối loạn lo âu tổng quát là sự xuất hiện của sự lo lắng quá mức và không kiểm soát được hoặc lo lắng về những điều và điều kiện khác nhau. Tình trạng này sẽ ảnh hưởng đến các hoạt động hàng ngày của người bệnh.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="container content-center mx-auto p-6 flex flex-row-reverse">
                            <div className="p-6 max-w-2xl bg-white rounded-xl shadow-md flex space-x-4 w-full transition hover:bg-gray-50 transform hover:scale-105 duration-500">
                                <div className="flex-shrink-0">
                                    <img className="h-12 w-12 col fill-current text-black" src={clock} alt="question logo" />
                                </div>
                                <div>
                                    <div className="text-xl font-medium text-black">Tại sao sử dụng ANDECT?</div>
                                    <p className="text-gray-500 text-justify">
                                        ANDECT nhanh chóng và dễ sử dụng, bằng cách sử dụng ANDECT, bạn có thể làm xét nghiệm sàng lọc để phát hiện các rối loạn lo âu tiềm ẩn mà bạn có thể mắc phải.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="container content-center mx-auto p-6 ">
                            <div className="p-6 max-w-2xl bg-white rounded-xl shadow-md flex items-center space-x-4 transition hover:bg-gray-50 transform hover:scale-105 duration-500">
                                <div className="flex-shrink-0">
                                    <img className="h-12 w-12 col fill-current text-black" src={list} alt="question logo" />
                                </div>
                                <div>
                                    <div className="text-xl font-medium text-black">ANDECT hoạt động như thế nào?</div>
                                    <p className="text-gray-500 text-justify">
                                        ANDECT hoạt động bằng cách xử lý câu trả lời từ bài kiểm tra bạn đưa ra cho hệ thống, nơi câu trả lời được xử lý bằng thuật toán chuỗi chuyển tiếp để nó có thể cung cấp kết quả thích hợp.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* content 2 */}
            <div className="bg-gray-50 flex flex-1">
                <div className="container p-5 text-center m-auto flex-1">
                    <NavLink to="/test">
                        <button className=" bg-yellow-300 p-3 font-semibold rounded-md m-2 transition duration-500 hover:bg-yellow-400">
                            Kiểm Tra
                        </button>
                    </NavLink>
                    <p className="animate-pulse font-medium text-xl text-yellow-500 ">Kiểm Tra Ngay!</p>
                    <p className="text-gray-500 text-xs">Chỉ 10 phút</p>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </main>
    );
}