import { processTemplate } from './utils';

const getRFCTemplate = ({ name, localization }) => {
  return processTemplate(`
import React from 'react'
${localization && "import useTranslate from 'i18n-react'"}

interface Props {

}

const ${name}: React.FC<Props> = () => {
${localization && 'const { t } = useTranslate()'}
  return (
    <div>
      moro
    </div>
  )
}

export default ${name};
  `);
};

export { getRFCTemplate };
