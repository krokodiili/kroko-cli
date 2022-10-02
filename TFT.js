//TODO: if tsx, import the given function and render it with react testing lib

const getTFTTemplate = ({ name, fileType, functionName }) => {
  const shouldGenerateRender = fileType.includes("x") && functionName;

  return processTemplate(`
  ${shouldGenerateRender && `import ${name} from './${name}'`}
  ${shouldGenerateRender && `import {render} from 'react-testing-library'`}

describe("${name}", () => {

${
  functionName &&
  `
describe("${functionName}", () => {
${shouldGenerateRender && `const view = render(<${name} />)`}

})
`
}
})
  `);
};

export { getTFTTemplate };
