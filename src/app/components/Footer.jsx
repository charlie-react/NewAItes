export default function Footer(){
    return(
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900
 ">
            <div className="flex flex-col gap-3 p-6 ">
                <a>
                    Contact us
                </a>
                <a>
                    Newsletter
                </a>
                <a>
                    About
                </a>
                Privacy
            </div>
            <ul className="ms-auto gap-3 flex flex-col">
                <li>
                    <a>
                        Instagram
                    </a>
                </li>
                <li>
                    <a>
                       X
                    </a>
                </li>
                <li>
                    <a>
                        Github
                    </a>
                </li>
                <li>
                    <a>
                        Instagram
                    </a>
                </li>
            </ul>
        </div>
    )
}