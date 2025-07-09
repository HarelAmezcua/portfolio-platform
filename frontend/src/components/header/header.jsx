const Header = () => {
  return (
    <>
      <header>
        <div className="pt-10 pb-10">
          <span className="flex justify-between mr-30 ml-30 bg-white p-5 rounded-2xl">
            <div>
              <a className="ml-5" href="">
                HOME
              </a>
            </div>
            <div className="flex">
              <a className="mr-2" href="1">
                EDUCATION
              </a>
              <a className="ml-2 mr-2" href="2">
                SKILLS
              </a>
              <a className="ml-2 mr-2" href="3">
                EXPERIENCE
              </a>
              <a className="ml-2 mr-2" href="">
                PROFILES
              </a>
              <a className="ml-2 mr-2" href="">
                PORTFOLIO
              </a>
              <a className="ml-2 mr-10" href="">
                CONTACT
              </a>
            </div>
          </span>
        </div>
      </header>
    </>
  );
};
export default Header;
