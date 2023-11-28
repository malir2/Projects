import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Accordion } from "flowbite-react";

function About() {
  return (
    <div className=" bg-gradient-to-tl from-pink-200 via-gray-300 to-yellow-200">
      <Navbar />

      <div className=" bg-[url('../../images/g.jpg')] w-full h-[300px] bg-cover bg-center relative ">
        <div className=" absolute h-full w-[100%] bg-black/50 backdrop-blur-md flex justify-center items-center flex-col">
          <h1 className="text-4xl sm:text-2xl text-center font-bold text-white underline">
            About
          </h1>
          <p className="text-center w-[70%] sm:w-[90%] sm:text-[12px] mx-auto mt-[20px] sm:mt-[10px] text-gray-400 text-lg">
            Welcome to United Proposals, where love knows no boundaries, and
            relationships transcend borders. We are more than just a matrimonial
            platform; we are the bridge that connects hearts from around the
            world.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-center pt-[30px] font-bold text-primary underline sm:text-2xl">
          Mission
        </h1>
        <p className="text-center w-[70%] sm:w-[90%] mx-auto mt-[20px] text-gray-700 text-lg sm:text-[12px]">
          Is to help individuals find their life partners and soulmates,
          regardless of geographical, cultural, or ethnic differences.
        </p>
        <h1 className="text-4xl text-center pt-[30px] font-bold text-primary underline sm:text-2xl">
          Our Vision
        </h1>
        <p className="text-left w-[70%] sm:w-[90%] sm:text-[12px] mx-auto mt-[20px] text-gray-700 pb-11 text-lg">
          At United Proposals, we envision a world where love is celebrated in
          all its diversity. We believe that everyone deserves the chance to
          find a life partner who understands and cherishes them for who they
          are. Our platform is designed to break down barriers and bring people
          together, creating lifelong bonds and happy families. Who We Are We
          are a passionate team of professionals who understand the significance
          of finding the right life partner. With years of experience in the
          field of matchmaking and a deep commitment to our users, we strive to
          make your journey to love as smooth and enjoyable as possible. Our
          team consists of skilled developers, relationship experts, and
          customer support specialists, all dedicated to your success in finding
          true love. What Sets Us Apart <br /> 1. Global Reach: We understand
          that love knows no borders. Our platform connects individuals from
          around the world, giving you access to a diverse pool of potential
          matches. <br /> 2. Safety and Privacy: Your security is our top
          priority. We employ advanced security measures to protect your
          personal information and ensure a safe online environment for your
          search. <br /> 3. Compatibility Matching: Our cutting-edge matchmaking
          algorithms consider not just your preferences but also your values,
          beliefs, and life goals to find the perfect match.
          <br /> 4. Diverse Community: We celebrate diversity and inclusivity.
          Our platform welcomes people of all backgrounds, cultures, and
          religions, fostering an environment of respect and acceptance.
          <br /> 5. Supportive Community: We offer guidance and support
          throughout your journey. Our blog is filled with relationship advice,
          success stories tips to help you along the way. Our Commitment At
          United Proposals, we are committed to helping you find your life
          partner and experience the joy of a loving relationship. We take pride
          in the countless success stories that have originated on our platform,
          and we look forward to being a part of your unique love story. Join us
          today and embark on a journey of love and companionship that knows no
          boundaries. Let us help you find the person with whom you'll create a
          lifetime of cherished memories. Thank you for choosing United
          Proposals as your trusted partner in the quest for love.
        </p>
        <Accordion collapseAll className="w-[90%] mx-auto bg-primary mb-[30px]">
          <Accordion.Panel>
            <Accordion.Title className="text-gray-400 hover:text-primary  ">
              What is Flowbite?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-300">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-300">
                Check out this guide to learn how to&nbsp;
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  get started&nbsp;
                </a>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-gray-400 hover:text-primary ">
              Is there a Figma file available?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-300">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-300">
                Check out the&nbsp;
                <a
                  href="https://flowbite.com/figma/"
                  className="text-white hover:underline dark:text-cyan-500"
                >
                  Figma design system&nbsp;
                </a>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-gray-400 hover:text-primary ">
              What are the differences between Flowbite and Tailwind UI?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-300">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-300">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-300">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 text-white">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}

export default About;
