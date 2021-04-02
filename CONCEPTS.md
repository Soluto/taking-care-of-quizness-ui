# Concepts for Quizness

This doc gives a brief explanation of the concepts used in the quizness application, and a link to the relevant documentation to understand more.

## [Material UI](https://material-ui.com/) Components Used

### [Box](https://material-ui.com/components/box/)

Box is a basic wrapping HTML component. It is the semantically correct way to get a `div` element when using material ui. You can change the functionality to provide a different native component with the `component` prop.

### [Container](https://material-ui.com/components/container/)

Containers are the most basic of the layout elements. They center your content horizonally. Containers can be nested, but it may not be required. Fluid containers (what we use in this application) can have a bounded width by setting the `maxWidth` prop.

### [Grid](https://material-ui.com/grid/)

MUI Grids are responsive and adapt to screen size and orientation. Uses CSS flexbox under the hood. Item widths are set in percentages so that they are always relative to their parent element.

### [ThemeProvider](https://material-ui.com/customization/theming/#theme-provider)

### [Typography](https://material-ui.com/components/typography/)

Provides a typographic scale to ensure consistency in typographic rendering across components.

### [LinearProgress](https://material-ui.com/components/progress/)

MUI provides multiple progress indicators. We use the `LinearProgress` component in the QuizView header and the `CircularIndeterminate` component in the QuizView when we are waiting on a response from the API.

### [Card](https://material-ui.com/components/cards/)

Cards are surfaces that display content and actions on a single subject. They should be easy to scan for info and should also visually indicate heirarchy.

### [CardContent](https://material-ui.com/api/card-content/)

A wrapper API for defining the content in a card.

### [makeStyles](https://material-ui.com/styles/basics/)

We use the hook api for defining styles since we wanted to emphasize the importance of hook in modern react in this tutorial.

## [React](reactjs.org) Concepts

### [useState Hook](https://reactjs.org/docs/hooks-state.html)

The `useState` hook allows us to control a single components internal state.

### [useEffect Hook](https://reactjs.org/docs/hooks-effect.html)

The `useEffect` hook allows us to perform side edffects in function components. This could be things like lifecycle methods from a class component, or do things like fetch data from APIs.

### [function Components](https://reactjs.org/docs/components-and-props.html)

Components are small, reusable pieces of a user interface. Describing our code this way can reduce duplication, and also allow us to logically separate our code in a way that matches the theoretical concepts behind our applications domain of knowledge. Function components allow a more concise syntax that is also easier to read and understand.
