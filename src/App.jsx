import "./style/App.css";


function App() {
  return (
    <div class='container'>
        <div class='list1'>
            <h4>FREE</h4>
            <h1>$0/month</h1>
            <hr></hr>
            <p>✔ Single User</p>
            <p>✔ 50GB Storage</p>
            <p>✔ Unlimited Public Projects</p>
            <p>✔ Community Access</p>
            <span>
              <p>✘ Unlimited Private Projects</p>
              <p>✘ Dedicated Phone Support</p>
              <p>✘ Free Subdomain</p>
              <p>✘ Monthly Status Reports</p>
            </span>
            
            <button type="button" class='btn1' disabled >BUTTON</button>
            
        </div>
            <Card2/>
            <Card3/>
    </div>
    
  )
}

const Card2=()=>{
  return (
    <div class='list2'>
        <h4>PLUS</h4>
        <h1>$9/month</h1>
        <hr></hr>
        <p>✔ 5 User</p>
        <p>✔ 50GB Storage</p>
        <p>✔ Unlimited Public Projects</p>
        <p>✔ Community Access</p>
        <p>✔ Unlimited Private Projects</p>
        <p>✔ Dedicated Phone Support</p>
        <p>✔ Free Subdomain</p>
        <span><p>✘ Monthly Status Reports</p></span>
        
        <button type="button" class="btn2" disabled>BUTTON</button>
    </div>
  )
}

const Card3=()=>{
  return (
    <div class='list3'>
        <h4>PRO</h4>
        <h1>$49/month</h1>
        <hr></hr>
        <p>✔ Unlimited User</p>
        <p>✔ 50GB Storage</p>
        <p>✔ Unlimited Public Projects</p>
        <p>✔ Community Access</p>
        <p>✔ Unlimited Private Projects</p>
        <p>✔ Dedicated Phone Support</p>
        <p>✔ Free Subdomain</p>
        <p>✔ Monthly Status Reports</p>
        
        <button>BUTTON</button>
    </div>
  )
}

export default App;
