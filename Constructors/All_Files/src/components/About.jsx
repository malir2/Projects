import React from "react";
import { Accordion } from "flowbite-react";

function About() {
  return (
    <div className="w-full h-full md:h-auto bg-primary absolute top-0">
      <div className=" mx-auto pt-[80px]">
        <div className="mt-[30px] w-[90%] mx-auto">
          <h1 className="text-3xl font-bold text-white border-b-4  w-[150px]">
            About Us:
          </h1>
          <p className="mt-[20px] text-gray-400 w-[80%] md:w-[95%] mb-[20px] md:text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde
            quaerat vel tenetur facere sapiente sequi temporibus perspiciatis
            iste ducimus. Enim exercitationem, culpa facere impedit dolore quod
            ipsa temporibus perferendis similique nostrum distinctio suscipit,
            ipsum magni laboriosam, corporis accusamus aperiam! Commodi in sequi
            debitis voluptatum vitae sint porro placeat et voluptatibus
            provident similique, expedita totam dolorem necessitatibus, eligendi
            iste modi quasi omnis eius dignissimos eum! Id distinctio minima
            repudiandae. Eaque iste sed nostrum numquam, quia facilis quis
            architecto adipisci, libero non magnam aliquid asperiores?
            Laudantium doloribus quod quia. Voluptatibus, consectetur animi odit
            illo deserunt nemo dicta quae dolorum consequuntur tenetur
            exercitationem quis itaque a accusamus rem! Commodi veritatis dolore
            quidem cumque obcaecati deserunt cupiditate nobis illum alias
            tenetur sunt neque explicabo libero, repellendus nostrum velit.
            Quaerat ducimus aliqua.
          </p>
          <h1 className="text-md text-white font-bold">Address:</h1>
          <p className="text-gray-400">xyz,block-12,lahore</p>
          <p className="text-gray-400">xyz,block-12,lahore</p>
        </div>
        <div className="bg-black/50  pt-[20px] mt-[50px] pb-[50px]">
          <div className="flex flex-wrap w-[90%] justify-around mx-auto md:gap-[20px]">
            <div className="sm:mb-[20px]">
              <h3 className="text-center text-white text-xl sm:text-sm">10+</h3>
              <h1 className="text-center text-white text-2xl font-bold sm:text-lg">
                Branches
              </h1>
            </div>
            <div>
              <h3 className="text-center text-white text-xl sm:text-sm">
                2000+
              </h3>
              <h1 className="text-center text-white text-2xl font-bold sm:text-lg">
                Customers
              </h1>
            </div>
            <div>
              <h3 className="text-center text-white text-xl sm:text-sm">
                150+
              </h3>
              <h1 className="text-center text-white text-2xl font-bold sm:text-lg ">
                Products
              </h1>
            </div>
            <div>
              <h3 className="text-center text-white text-xl sm:text-sm">10+</h3>
              <h1 className="text-center text-white text-2xl font-bold sm:text-lg">
                Years
              </h1>
            </div>
          </div>
        </div>
        <div className="pt-[30px] pb-[30px] bg-primary">
          <div className="w-[90%] mx-auto">
            <h1 className="text-white text-5xl font-bold mb-[40px] border-b-4 border-white pb-[5px] w-[100px] sm:text-2xl sm:w-[50px]">
              FAQ
            </h1>
            <Accordion className="bg-black/50 mb-[30px]">
              <Accordion.Panel>
                <Accordion.Title className="hover:bg-primary hover:text-white focus:bg-white focus:text-primary">
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to&nbsp;
                    <a
                      href="https://flowbite.com/docs/getting-started/introduction/"
                      className="text-secondary hover:underline dark:text-cyan-500"
                    >
                      get started&nbsp;
                    </a>
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="hover:bg-primary hover:text-white focus:bg-white focus:text-primary">
                  Is there a Figma file available?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out the
                    <a
                      href="https://flowbite.com/figma/"
                      className="text-secondary hover:underline "
                    >
                      Figma design system
                    </a>
                    based on the utility classes from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="hover:bg-primary hover:text-white focus:bg-white focus:text-primary">
                  What are the differences between Flowbite and Tailwind UI?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 ">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                    <li>
                      <a
                        href="https://flowbite.com/pro/"
                        className="text-secondary"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        className="text-secondary"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
