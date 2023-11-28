import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./counter";
import { Alert } from "flowbite-react";

import { Table } from "flowbite-react";

function Cart() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cartItem.value);
  return (
    <>
      <Alert
        className="hidden w-full fixed bottom-0 z-10 "
        id="alert"
        color="failure"
        withBorderAccent
        onDismiss={() => {
          document.getElementById("alert").style.display = "none";
        }}
      >
        <span>
          <p>
            <span className="font-medium">Info! </span>
            Item is removed from cart.
          </p>
        </span>
      </Alert>
      <div className="container mx-auto mt-24 min-h-screen overflow-auto ">
        <Table>
          <Table.Head>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {count.map((e) => {
              const { id, title, price, image, category, description } = e;
              return (
                <Table.Row
                  key={id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>
                    <img
                      src={image}
                      alt="productImage"
                      width="20px"
                      height="50px"
                    />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {title}
                  </Table.Cell>
                  <Table.Cell>{category}</Table.Cell>
                  <Table.Cell>Rs. {price}</Table.Cell>

                  <Table.Cell>
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(id));
                        document.getElementById("alert").style.display =
                          "block";
                      }}
                      id="remove"
                      className="font-medium text-red-600 hover:underline"
                    >
                      <p>Remove</p>
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default Cart;
