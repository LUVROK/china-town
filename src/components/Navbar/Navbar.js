import "./Navbar.scss";
import nigga from "../../media/nigga.png";
import { useState, useEffect } from "react";
import { MorphReplace } from "react-svg-morph";

const SearchSvg = () => (
  <svg width="23" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.95072 1.99141C1.79204 3.14838 1.11812 4.70363 1.06631 6.34023C1.0145 7.97682 1.58868 9.57159 2.67185 10.7995C3.75503 12.0275 5.26567 12.7962 6.89594 12.9491C8.49648 13.0991 10.0941 12.6444 11.3749 11.6766L14.7061 15.0085L14.7061 15.0085C14.789 15.0914 14.8873 15.1571 14.9955 15.2019C15.1038 15.2468 15.2198 15.2698 15.3369 15.2698C15.4541 15.2698 15.5701 15.2468 15.6783 15.2019C15.7866 15.1571 15.8849 15.0914 15.9678 15.0085C16.0506 14.9257 16.1163 14.8274 16.1611 14.7191C16.206 14.6109 16.229 14.4949 16.229 14.3777C16.229 14.2606 16.206 14.1446 16.1611 14.0363C16.1163 13.9281 16.0506 13.8298 15.9678 13.7469L15.9677 13.7469L12.636 10.416C13.6013 9.13496 14.0539 7.53846 13.903 5.93943C13.7493 4.31054 12.9808 2.80139 11.7539 1.719C10.5269 0.636623 8.93373 0.0623154 7.29838 0.11292C5.66303 0.163525 4.10838 0.835233 2.95072 1.99141ZM2.95072 1.99141L3.02138 2.06217L2.95072 1.99141ZM10.7887 3.25366C11.2263 3.68416 11.5743 4.19703 11.8127 4.76269C12.051 5.32835 12.175 5.93561 12.1775 6.54944C12.18 7.16327 12.061 7.77152 11.8272 8.3391C11.5935 8.90669 11.2497 9.42238 10.8156 9.85642C10.3816 10.2905 9.86589 10.6343 9.29831 10.868C8.73072 11.1018 8.12248 11.2208 7.50865 11.2183C6.89482 11.2158 6.28756 11.0918 5.7219 10.8535C5.15623 10.6151 4.64336 10.2671 4.21287 9.82954C3.35255 8.95509 2.87263 7.77613 2.87762 6.54944C2.88262 5.32275 3.37213 4.14773 4.23954 3.28033C5.10694 2.41292 6.28196 1.92341 7.50865 1.91841C8.73533 1.91342 9.9143 2.39335 10.7887 3.25366Z"
      // strokeWidth="0.2"
    />
  </svg>
);

const CloseSvg = () => (
  <svg width="17" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.8457 3.84613L15.1535 15.1539" stroke="black" strokeWidth="2" strokeLinecap="round" />
    <path d="M15.1543 3.84613L3.84653 15.1539" stroke="black" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Navbar = () => {
  const [activeSearch, setActiveSearch] = useState(true);
  const [timeoutSearchID, settimeoutSearchID] = useState(false);

  useEffect(() => {
    const doc_nvb_links = document.querySelector(".nvb_Links");
    const SearchInput = document.querySelector(".SearchInput");
    let timeoutSearch;
    if (timeoutSearchID) {
      clearTimeout(timeoutSearchID);
    }
    if (!activeSearch) {
      doc_nvb_links.style.opacity = 0;
      timeoutSearch = setTimeout(() => {
        doc_nvb_links.style.visibility = "hidden";
        SearchInput.style.opacity = 1;
        SearchInput.style.visibility = "visible";
        SearchInput.style.width = "90%";
      }, 500);
    } else {
      timeoutSearch = setTimeout(() => {
        doc_nvb_links.style.visibility = "visible";
        SearchInput.style.width = "0%";
        SearchInput.style.visibility = "hidden";
        SearchInput.style.opacity = 0;
      }, 0);
      doc_nvb_links.style.opacity = 1;
    }
    settimeoutSearchID(timeoutSearch);
  }, [activeSearch]);

  return (
    <div className="Navbar">
      <div className="Navbar_block">
        <div className="nvb_left">
          <div className="nvb_left_logo_background">
            <svg className="nvb_left_logo" viewBox="0 0 34 41" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: "34px" }}>
              <path d="M17.0331 0.945374L0.296875 10.8637V23.0708L17.0331 32.9891L30.4588 25.3596V28.9836L17.0331 36.9946L0.296875 26.8855V31.2725L17.0331 41L33.7693 31.2725V19.0653L20.3435 26.8855V23.0708L33.7693 15.0599V10.8637L17.0331 0.945374Z" />
            </svg>
          </div>
          <svg width="26" className="menu" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H21" stroke="white" stroke-width="2.4" stroke-linecap="round" />
            <path d="M4 10H21" stroke="white" stroke-width="2.4" stroke-linecap="round" />
            <path d="M4 16H21" stroke="white" stroke-width="2.4" stroke-linecap="round" />
          </svg>
          <div className="nvb_Links" style={{ opacity: 1, visibility: "visible", width: "100%" }}>
            <div className="nvb_link fromleftborder menuLink">Laptops</div>
            <div className="nvb_link fromleftborder menuLink">Desktop PCs</div>
            <div className="nvb_link fromleftborder menuLink">Networking Devices</div>
            <div className="nvb_link fromleftborder menuLink">Printers & Scanners</div>
            <div className="nvb_link fromleftborder menuLink">PC Parts</div>
            <div className="nvb_link fromleftborder menuLink">All Other Products</div>
            <div className="nvb_link fromleftborder menuLink">Repairs</div>
            <div className="nvb_link fromleftborder btnLink">Our Deals</div>
          </div>
          <div className="SearchInput" style={{ opacity: 0, visibility: "hidden", width: "0%" }}>
            <input type={"text"} placeholder="Search here" />
            <svg width="17" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.95072 1.99141C1.79204 3.14838 1.11812 4.70363 1.06631 6.34023C1.0145 7.97682 1.58868 9.57159 2.67185 10.7995C3.75503 12.0275 5.26567 12.7962 6.89594 12.9491C8.49648 13.0991 10.0941 12.6444 11.3749 11.6766L14.7061 15.0085L14.7061 15.0085C14.789 15.0914 14.8873 15.1571 14.9955 15.2019C15.1038 15.2468 15.2198 15.2698 15.3369 15.2698C15.4541 15.2698 15.5701 15.2468 15.6783 15.2019C15.7866 15.1571 15.8849 15.0914 15.9678 15.0085C16.0506 14.9257 16.1163 14.8274 16.1611 14.7191C16.206 14.6109 16.229 14.4949 16.229 14.3777C16.229 14.2606 16.206 14.1446 16.1611 14.0363C16.1163 13.9281 16.0506 13.8298 15.9678 13.7469L15.9677 13.7469L12.636 10.416C13.6013 9.13496 14.0539 7.53846 13.903 5.93943C13.7493 4.31054 12.9808 2.80139 11.7539 1.719C10.5269 0.636623 8.93373 0.0623154 7.29838 0.11292C5.66303 0.163525 4.10838 0.835233 2.95072 1.99141ZM2.95072 1.99141L3.02138 2.06217L2.95072 1.99141ZM10.7887 3.25366C11.2263 3.68416 11.5743 4.19703 11.8127 4.76269C12.051 5.32835 12.175 5.93561 12.1775 6.54944C12.18 7.16327 12.061 7.77152 11.8272 8.3391C11.5935 8.90669 11.2497 9.42238 10.8156 9.85642C10.3816 10.2905 9.86589 10.6343 9.29831 10.868C8.73072 11.1018 8.12248 11.2208 7.50865 11.2183C6.89482 11.2158 6.28756 11.0918 5.7219 10.8535C5.15623 10.6151 4.64336 10.2671 4.21287 9.82954C3.35255 8.95509 2.87263 7.77613 2.87762 6.54944C2.88262 5.32275 3.37213 4.14773 4.23954 3.28033C5.10694 2.41292 6.28196 1.92341 7.50865 1.91841C8.73533 1.91342 9.9143 2.39335 10.7887 3.25366Z" />
            </svg>
          </div>
        </div>
        <div className="nvb_right">
          <div className="profile">
            <MorphReplace width={17} height={16} onClick={() => setActiveSearch((prev) => !prev)}>
              {activeSearch ? <SearchSvg key="SearchSvg" /> : <CloseSvg key="CloseSvg" />}
            </MorphReplace>
            <svg width="17" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5834 16.8334C12.1359 16.8334 12.6658 16.6139 13.0566 16.2232C13.4473 15.8325 13.6667 15.3026 13.6667 14.75C13.6667 14.1975 13.4473 13.6676 13.0566 13.2769C12.6658 12.8862 12.1359 12.6667 11.5834 12.6667C11.0309 12.6667 10.501 12.8862 10.1103 13.2769C9.71957 13.6676 9.50008 14.1975 9.50008 14.75C9.50008 15.3026 9.71957 15.8325 10.1103 16.2232C10.501 16.6139 11.0309 16.8334 11.5834 16.8334ZM4.29174 16.8334C4.84428 16.8334 5.37418 16.6139 5.76488 16.2232C6.15558 15.8325 6.37508 15.3026 6.37508 14.75C6.37508 14.1975 6.15558 13.6676 5.76488 13.2769C5.37418 12.8862 4.84428 12.6667 4.29174 12.6667C3.73921 12.6667 3.20931 12.8862 2.81861 13.2769C2.4279 13.6676 2.20841 14.1975 2.20841 14.75C2.20841 15.3026 2.4279 15.8325 2.81861 16.2232C3.20931 16.6139 3.73921 16.8334 4.29174 16.8334ZM17.873 2.16981C18.133 2.16142 18.3796 2.05223 18.5606 1.86531C18.7416 1.6784 18.8428 1.42842 18.8428 1.16825C18.8428 0.908074 18.7416 0.658098 18.5606 0.471184C18.3796 0.284271 18.133 0.175074 17.873 0.166687H16.674C15.7345 0.166687 14.922 0.81877 14.7178 1.73544L13.4126 7.61252C13.2084 8.52919 12.3959 9.18127 11.4563 9.18127H3.63133L2.12924 3.17085H11.8636C12.1212 3.1591 12.3644 3.0485 12.5425 2.86205C12.7206 2.67561 12.82 2.42767 12.82 2.16981C12.82 1.91195 12.7206 1.66401 12.5425 1.47757C12.3644 1.29113 12.1212 1.18052 11.8636 1.16877H2.12924C1.82473 1.16868 1.5242 1.23802 1.25051 1.37151C0.976816 1.50501 0.737162 1.69915 0.549763 1.93917C0.362364 2.17919 0.232155 2.45878 0.169035 2.75668C0.105913 3.05458 0.111544 3.36295 0.185495 3.65835L1.68758 9.66669C1.79586 10.1002 2.046 10.4851 2.39821 10.7601C2.75042 11.0351 3.18447 11.1845 3.63133 11.1844H11.4563C12.368 11.1845 13.2524 10.8737 13.9636 10.3032C14.6748 9.73281 15.1701 8.93687 15.3678 8.04689L16.674 2.16981H17.873Z" />
            </svg>
            <img src={nigga} alt="" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
