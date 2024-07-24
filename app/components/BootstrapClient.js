'use client'

import { useEffect } from 'react';

function BootstrapClient() {
   useEffect(() => {
      require('bootstrap/dist/css/bootstrap.min.css');
   }, []);

   return null;
}

export default BootstrapClient;
