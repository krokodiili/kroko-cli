const getRFCTemplate = ({ name }) => {
  return `
import React from 'react'

const ${name}: React.FC = () => {
  return (
    <div>
      moro
    </div>
  )
}

export default ${name};
  `;
};

export { getRFCTemplate };
