# React Form (Polaris Components)

A simple form built using Shopify's Polaris components. This was my first experience using their component library and took some getting used to but, once I wrapped my head around it, became quite intuitive and easy to customise.

## Process

I initially built the form as a class-based component but quickly found that this removed a lot of the built-in functionality that Polaris components provided. After struggling to implement the features offered in the supplied useCallback functions, I made the switch to a functional component which simplified the process significantly.

### Handling data

As the focus of the exercise was not to persist data, I put the supplied data in a dedicated file to be used in state across the components. From there I supplied it to the form component through the useState hook and passed it to child components through props.

### Editing information

I knew that I didn't want input fields to always be in an editable state so I created the isEditing state tied to the button component to allow for editing and saving data.

### Birthday - TextField vs DatePicker

In the first iteration of the birthday input, I attempted to use the date picker Polaris component but found it didn't fit well with my requirements. Changing to a text field component with the date input type allowed me to reassign the birthday value in the userData state. I found a regular expression solution online to ensure that the data output by the component on save would match the format provided in the sample data, which was then implemented through the built-in functionality provided by the text field component.

## Installation

In the project directory, you can run:

### `yarn install` / `npm install`

Install all necessary dependencies to be able to run the project.

### `yarn start` / `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
