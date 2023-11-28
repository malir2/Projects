import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Table } from "flowbite-react";

function Cart() {
  return (
    <div className="w-full h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-red-600">
      <div className="w-[90%] mx-auto">
        <Navbar />
      </div>
      <div className="mt-[50px] ">
        <div className=" w-[90%] mx-auto  min-h-screen overflow-auto ">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="bg-black/50 backdrop-blur-lg text-red-600">
                Product name
              </Table.HeadCell>
              <Table.HeadCell className="bg-black/50 backdrop-blur-lg text-red-600">
                Flavour
              </Table.HeadCell>
              <Table.HeadCell className="bg-black/50 backdrop-blur-lg text-red-600">
                Size
              </Table.HeadCell>
              <Table.HeadCell className="bg-black/50 backdrop-blur-lg text-red-600">
                Price
              </Table.HeadCell>
              <Table.HeadCell className="bg-black/50 backdrop-blur-lg ">
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
              <Table.HeadCell className="bg-black/50 backdrop-blur-lg ">
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-gray-800/50 ">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-300">
                  Muscle-Tech
                </Table.Cell>
                <Table.Cell>Chocolate</Table.Cell>
                <Table.Cell>Large</Table.Cell>
                <Table.Cell>Rs 2000</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-red-600">
                    Delete
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-gray-800/50 ">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-300">
                  MTN-OPS
                </Table.Cell>
                <Table.Cell>Blueberry</Table.Cell>
                <Table.Cell>Medium</Table.Cell>
                <Table.Cell>Rs 1500</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-red-600">
                    Delete
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-gray-800/50 ">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-300">
                  Optimum
                </Table.Cell>
                <Table.Cell>Strawberry</Table.Cell>
                <Table.Cell>Small</Table.Cell>
                <Table.Cell>Rs 800</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-red-600">
                    Delete
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
      <div className="fixed bottom-0 w-[100%]">
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
