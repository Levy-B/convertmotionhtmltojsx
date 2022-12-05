import styles from "./Changepassword.module.css";

const Changepassword = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
        <div>
        <img src="/images/forgot.png" width={650} height={500} />
        </div>
        
        <div className={styles.content}>
        <div className={styles.right}>
        <img src="images/logo-dark.svg" alt="error" />
          <h1>MOTION DETECTOR</h1>
          <form action="">
            <input type="oldpassword" placeholder="     Old Password" /> <br />
            <input type="newopassword" placeholder="     New Password" /> <br />
            <input type="confirmpassword" id={styles.myInput} placeholder="     Confirm Password" /> <br />
            <button type="submit" className={styles.sub}>SUBMIT</button> <br />
         
            <a href="http://localhost:3000/Login">BACK</a>
        
          </form>

    
        </div>
      </div>
      
    </div>
  );
};

export default Changepassword;
