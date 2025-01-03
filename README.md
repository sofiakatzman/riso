# Riso Generator React Component

A React-based risograph generator that allows you to create risograph-style effects from SVG images. This project is inspired by the original concept and reimagined as a modular React component for easy integration into modern web applications.

## Features

- **Reusable React Component**: Simplifies adding risograph effects to SVG images.
- **Dynamic Rendering**: Refresh the page to "restamp" and see new randomized results.
- **Customizable Styles**: Easily modify container sizes, blending modes, and opacity.
- **Lightweight & Performant**: Uses pure CSS and React for rendering.

Demo
-----

Check out the sandbox html version on [CodePen](https://codepen.io/Sofia-Katzman/pen/wBwPGrp).

Installation
-----

1. Clone the repository or download the project files.
2. Install dependencies:
   `npm install`
3. Start the development server:
   `npm start`

Usage
-----

### File Structure

-   **`App.jsx`**: Main entry point, renders multiple `Risograph` components with predefined data.
-   **`Risograph` Component**: Core component for generating risograph effects.
-   **`risographs` Directory**: Contains SVG data files (e.g., `RISO1`, `RISO2`, `RISO3`).
-   **CSS Files**: Define global and component-specific styles.

### Example Usage

In `App.jsx`, use the `Risograph` component with your data:

`<Risograph data={RISO1} />`

To add more risographs, simply import the SVG data using object templates and instanciate:

`<Risograph data={RISO4} />`

Styling
-------

-   **Root Styles**: Defined in `index.css` for global application styling.
-   **Component-Specific Styles**: Adjust `App.css` to customize layout and container dimensions.

Key style definitions:

-   `.riso-container`: Container for each risograph, proportional and responsive.
-   `.riso-layer`: Each layer inside a container. Handles the risograph effect with `mix-blend-mode: multiply` and adjustable opacity.

Development
-----------

-   Install additional dependencies as needed:

    `npm install [package-name]`

-   Make edits in the `Risograph` component or create new SVG layers to experiment with different effects.

Future Enhancements
-------------------

-   Support for uploading custom SVG files.
-   Adjustable risograph parameters via a user interface.
-   Export functionality to download generated risographs.

License
-------

This project is licensed under the MIT License. Feel free to use and modify it as needed.