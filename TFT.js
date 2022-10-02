const getTFTTemplate = ({ name, fileType, functionName }) => {
  return `
describe(${name}, () => {

${
  functionName
    ? `
describe(${functionName}, () => {

})
`
    : ""
}
})
  `;
};

export { getTFTTemplate };
