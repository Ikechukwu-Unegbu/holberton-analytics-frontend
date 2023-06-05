import React from 'react';
import DashMenu from '../../components/DashMenu';
import './Sites.css' 
type NewsiteProps = {
  // Define the props you want to pass to the component
};

const Newsite: React.FC<NewsiteProps> = (props) => {
  // Access and use the props within the component
  return (
    <div> 
        <DashMenu/>
        <div className="container p-4">
            <form action="" method="post">
                <div className="form-group mt-2">
                    <h4 className="text-dark text-center">Add Site to Track</h4>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Url</label>
                    <input type="text" placeholder='https://' className="form-control" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Site type:</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Primary site</option>
                        <option value="1">Add-on</option>
                        
                    </select>
                </div>
                <div className="form-group mt-3">
                    <button  className="btn float_btn btn-primary">Add New Site</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Newsite;
