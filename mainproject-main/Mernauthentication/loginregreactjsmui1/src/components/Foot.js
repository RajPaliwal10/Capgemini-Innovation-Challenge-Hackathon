import { getToken } from "../services/LocalStorageService";
const Foot = () => {
  const token = getToken("token");
  return (
    <>
      <footer>
               <div class="content-wrapper-sm display-flex-between">
                    <small>&copy; Copyright by Raj,<br></br>
                        Since 2022</small>
                    <div class="social-links">
                         <ul>
                              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i class="fa fa-snapchat-square" aria-hidden="true"></i></a></li>
                              <li><a href="#" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                         </ul>
                    </div>
               </div>
          </footer>
    </>
  );
};

export default Foot;