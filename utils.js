import prettier from 'prettier';

export const processTemplate = async (template) => {
  const options = await prettier.resolveConfig('./.prettierrc');
  return prettier.format(template.replace('undefined', '').trim(), options);
};
