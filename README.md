# wca-components
The React Component Library for the WCA

# Usage
1. Install the library as a npm package with `npm install @thewca/wca-components`
2. Import the component you want to use with `import { CubingIcon } from "@thewca/wca-components"`

# Contributing
The Components are written using typescript, so they can provide useful type information for developers.   
When you are transitioning a Rails Component to React and want to add it to the Component Library follow these steps
1. Fork the repository
2. Create a new Folder in the components folder
3. Write your component and provide type information for its props
   1. If your component has a state that would make sense to communicate to a parent component make sure to provide callback functions that are triggered on state changes
4. Write tests for your components using jest  
   4.1 You can also add a Story to your component using Storybook to more easily visualize how arguments affect your component and how to interact with it
5. Create an index.ts in your directory to export your component and add its desired exported name to [src/components/index.ts](src%2Fcomponents%2Findex.ts)
6. Create a PR with your changes