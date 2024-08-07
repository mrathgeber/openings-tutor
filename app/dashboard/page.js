import React from 'react';

import Navbar from './../components/Navbar'
import styles from './../components/dashboard.module.css';

export default function Dashboard() {

  const DashboardHeader = () => {
    return (
      <div className={styles.dashboardHeader}>
        <h1 className={styles.dashboardTitle}><b>Hi, Matteo</b></h1>
        <div className={styles.dashboardHeaderBar}>
          <i className={`bi bi-gear ${styles.dashIcon}`}></i>
          <i className={`bi bi-sliders2 ${styles.dashIcon}`}></i>
          <i className={`bi bi-box-arrow-right ${styles.dashIcon}`}></i>
        </div>
      </div>
    );
  }

  const Card = ( {id} ) => {
    return (
      <div className={`card ${styles.card} ${styles[id]}`}>
          <div className={`${styles.cardBody}`}>
            <h1 className={`${styles.cardTitle}`}>{id}</h1>
            <p className={styles.cardText}>This is some text within a card body.</p>
          </div>
        </div>
    );
  }


  return (
    <div className="container">
      <Navbar />

      <div className={styles.dashboardWrapper}>

        <DashboardHeader />

        <div className={styles.dashboard}>
          <Card id='card-1' />
          <Card id='card-2' />
          <Card id='card-3' />
          <Card id='card-4' />
          <Card id='card-5' />
          <Card id='card-6' />
        </div>
        
      </div>
    </div>
  );
}
