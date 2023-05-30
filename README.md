# wca-components
The React Component Library for the WCA

# Usage
1. Install the library as a npm package with `npm install @thewca/wca-components`
2. Import the component you want to use with `import { CubingIcon } from "@thewca/wca-components"`

# Contributing
## Working on Existing Components
If you want to work on an existing component the easiest way is to run `npm run storybook`
and navigate to the component. It will update with changes in the code
## Creating new Components
The Components are written using typescript, so they can provide useful type information for developers.   
When you are transitioning a Rails Component to React or you are building a new React Component you can add it to the Component Library following these steps
1. Fork the repository
2. Create a new Folder in the components folder
3. Write your component and provide type information for its props
   1. If your component has a state that would make sense to communicate to a parent component make sure to provide callback functions that are triggered on state changes
4. Write tests for your components using jest  
   1. You can also add a Story to your component using Storybook to more easily visualize how arguments affect your component and how to interact with it. See an example in [EventSelector.stories.ts](src%2Fcomponents%2FEventSelector%2FEventSelector.stories.ts) 
5. Create an index.ts in your directory to export your component and add its desired exported name to [src/components/index.ts](src%2Fcomponents%2Findex.ts)
6. Create a PR with your changes