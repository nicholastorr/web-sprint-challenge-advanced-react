import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const checkoutFormHeader = screen.getByText(/Checkout Form/i);
    const firstName = screen.getByText(/First Name/i);
    const lastName = screen.getByText(/Last Name/i);
    const address = screen.getByText(/Address/i);
    const city = screen.getByText(/City/i);
    const state = screen.getByText(/State/i);
    const zip = screen.getByText(/Zip/i);
    const button = screen.getByRole("button", { name: /checkout/i });

    //Act
    expect(checkoutFormHeader).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();
    expect(button).toBeInTheDocument();



});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);


  //Arrange
  const firstName = screen.getByLabelText(/First Name/i);
  const lastName = screen.getByLabelText(/Last Name/i);
  const address = screen.getByLabelText(/Address/i);
  const city = screen.getByLabelText(/City/i);
  const state = screen.getByLabelText(/State/i);
  const zip = screen.getByLabelText(/Zip/i);
  const button = screen.getByRole("button", { name: /checkout/i };

      //Act
      userEvent.type(firstName, "nicholas");
      userEvent.type(lastName, "torres");
      userEvent.type(address, "704 sweetbriar dr");
      userEvent.type(city, "oldsmar");
      userEvent.type(state, "FL");
      userEvent.type(zip, "34677");
      userEvent.click(button);


  expect(orderProcessedMessage).toBeTruthy();
  expect(customerDetails).toBeTruthy();

  expect(orderProcessedMessage).toBeVisible();
  expect(customerDetails).toBeVisible();
});
