import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";

function App() { 
  window.title = "listen to the rhythm of the falling rain";
  return (
  
           <RouterProvider router={routes} />
 
    

  );
}

export default App;
