

const Footer = ({ user }) => {


  return (
    <div>
        <footer className={`text-center bg-sky-900 text-white py-8`}>
            <p className="text-lg">
                &copy; 2023 Yersain Castaño Arenas
            </p>
            <ul className="w-full flex justify-center gap-4 text-xl z-10">
                <li>
                    <a
                        href="https://www.linkedin.com/in/yersain-castaño-arenas-engineer-develop/"
                        target="_blank"
                        rel="noreferrer"
                        >
                        <i className="bx bxl-linkedin-square"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/yersain1993" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                </li>
            </ul>
            <p className="text-sm">
            All rights reserved &#174;
            </p>  
        </footer>
    </div>
  )
}

export default Footer
