//dependency
import React from 'react';

//assets
import avatar from "../assets/avatar.webp";

//component
import Footer from "../components/footer";
import Header from "../components/header";

export default function Contributor() {
  const heading = "Halaman Kontribusi";
  const subHeading = "Orang-orang yang berkontribusi dalam projek";
  const contentHeading = "Orang yang terdapat pada halaman ini adalah orang-orang yang berkontribusi dalam pengerjaan projek ini.";

  return (
    <main className="flex flex-col h-full">
      <Header heading={heading} subHeading={subHeading} contentHeading={contentHeading}/>

      {/* konten 1 */}
      <div>
        <div className="container p-5 text-center m-auto">
          <p className="text-xl font-bold">Lecturer</p>

          <div className="mx-auto flex lg:flex-row md:flex-col justify-evenly min-w-max w-1/2">
            {/* card 1 */}
            <div className="flex flex-col flex-1 m-2 p-6 items-center">
              <img className="h-40 w-40 object-cover rounded-full m-1 hover:scale-110 transform duration-300" src={avatar} alt="question logo" />
              <div className="text-lg font-medium text-black">
                Seng Hansun
              </div>
              <p className="text-gray-500 text-center">
                Expert System Lecturer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* konten 2 */}
      <div className="bg-gray-50">
        <div className="container p-5 text-center m-auto">
          <p className="text-xl font-bold">Expert</p>

          <div className="mx-auto flex lg:flex-row flex-col justify-evenly min-w-max w-1/2">
            {/* card 1 */}
            <div className="flex flex-col flex-1 m-2 p-6 items-center">
              <img className="h-40 w-40 object-cover rounded-full m-1 hover:scale-110 transform duration-300" src={avatar} alt="question logo" />
              <div className="text-lg font-medium text-black">
                Deny Surya Saputra
              </div>
              <p className="text-gray-500 text-center">
                Expert 1
              </p>
            </div>

            {/* card 2 */}
            <div className="flex flex-col flex-1 m-2 p-6 items-center">
              <img className="h-40 w-40 object-cover rounded-full m-1 hover:scale-110 transform duration-300" src={avatar} alt="question logo" />
              <div className="text-lg font-medium text-black">
                Salma Dias Saraswati
              </div>
              <p className="text-gray-500 text-center">
                Expert 2
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Konten 3 */}
      <div className="flex-1 flex">
        <div className="container p-5 text-center m-auto">
          <p className="text-xl font-bold">Development Team</p>

          <div className="mx-auto flex lg:flex-row flex-col justify-evenly min-w-max w-1/2">
            {/* card 1 */}
            <div className="flex flex-col flex-1 m-2 p-6 items-center">
              <img className="h-40 w-40 object-cover rounded-full m-1 hover:scale-110 transform duration-300" src={avatar} alt="question logo" />
              <div className="text-lg font-medium text-black">
                Devina Winaya
              </div>
              <p className="text-gray-500 text-center">
                Team Leader
              </p>
            </div>

            {/* card 2 */}
            <div className="flex flex-col flex-1 m-2 p-6 items-center">
              <img className="h-40 w-40 object-cover rounded-full m-1 hover:scale-110 transform duration-300" src={avatar} alt="question logo" />
              <div className="text-lg font-medium text-black">
                Arvendo Manuel L
              </div>
              <p className="text-gray-500 text-center">
                Team Member
              </p>
            </div>

            {/* card 3 */}
            <div className="flex flex-col flex-1 m-2 p-6 items-center">
              <img className="h-40 w-40 object-cover rounded-full m-1 hover:scale-110 transform duration-300" src={avatar} alt="question logo" />
              <div className="text-lg font-medium text-black">
                Maurice Marvin
              </div>
              <p className="text-gray-500 text-center">
                Team Member
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
}