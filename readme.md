# Dichotomy Method Web Application

A simple web application that demonstrates the Dichotomy Method (or Bisection Method) for finding the roots of a function. Users can input parameters dynamically, including the mathematical function to be evaluated, and visualize the process step-by-step.

## Features

- **Dynamic Function Input**: Users can define the mathematical function of `x` to be used in the dichotomy method.
- **Customizable Interval and Precision**: Input values for the interval `[a, b]` and the desired precision `l`.
- **Adjustable Delay**: A customizable delay between steps allows users to follow the process visually in real time.
- **Interactive Output**: The result and all intermediate steps are displayed on the web page.

## Live Demo

A demo of the project can be run locally by opening the `index.html` file in your browser.

## How It Works

The Dichotomy Method is used to find the root of a continuous function within a specified interval `[a, b]`. The function repeatedly divides the interval in half and checks whether the root lies in the left or right subinterval, gradually narrowing down the search range until it achieves the desired precision `l`.

### Steps:

1. Define your function as a mathematical expression.
2. Provide the interval `[a, b]` where the root is expected.
3. Set the precision level `l` (smaller values will give more accurate results but take longer).
4. Optionally, set the sleep duration (delay) between the steps to visualize the process.
5. The app iterates and calculates the interval center until the precision is met.

## Usage

### Input Fields:

- **a**: Lower bound of the interval.
- **b**: Upper bound of the interval.
- **l**: Precision of the result (small value for high precision).
- **Sleep Duration**: Delay in milliseconds between steps (useful for visualizing the process).
- **Function**: Enter your function in terms of `x` (for example, `x*x*x + 2*x - 8`).

### Example:

1. Set `a = 1`, `b = 2`, `l = 0.25`, and `Sleep Duration = 1000` (1 second delay).
2. Enter the function: `x*x*x + 2*x - 8`.
3. Click on "Start Dichotomy" to begin the process.
4. Follow the step-by-step output, and the result will be displayed when the precision is met.

### Sample Code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dichotomy Method Example</title>
    <script>
      // Add JavaScript code for the Dichotomy Method here
    </script>
  </head>
  <body>
    <h1>Dichotomy Method Example with Inputs</h1>

    <!-- Add your HTML structure here -->
  </body>
</html>
```

## Installation

To run this project locally:

1. Clone or download the repository.
2. Open the `index.html` file in your browser.
3. Start using the application by entering your desired values and function.

### Prerequisites

This project runs directly in the browser. No additional libraries or installations are needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

---

### Author

**Abdelhakim Sahifa**

---
