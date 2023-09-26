import medicalGuideline from "../services/config";

function Home() {
    console.log('home',medicalGuideline.getData());
    return (
      <div>
        <h1>This is the home page</h1>
      </div>
    );
  }
  
  export default Home;