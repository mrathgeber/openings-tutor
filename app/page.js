import Login from "./components/Login"

import LoginStyles from "./components/Login.module.css"

import React from 'react';

export default function Home() {
  return (
    <div className="container">
      <Login />
      <div className={LoginStyles.container}></div>
    </div>
  );
}
