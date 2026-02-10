import { useState } from 'react';

function CopyrightText() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return <small className="text-neutrals-300 text-xs">&copy; {currentYear} Nithin Richard</small>;
}

export { CopyrightText };
