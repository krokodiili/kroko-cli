import { processTemplate } from './utils';

describe('utils', () => {
  describe('process template', () => {
    it('works', async () => {
      const mockTemplate = `
    import joo from "that"
    undefined

    const stuff = () => {
      return "asdf"
    }

    export default stuff
`;

      const expectedResult = `import joo from 'that';

const stuff = () => {
  return 'asdf';
};

export default stuff;
`;

      const result = await processTemplate(mockTemplate);

      expect(result).toEqual(expectedResult);
    });
  });
});
