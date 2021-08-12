import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'


function Navbar() {
    return (
        <nav className="flex  items-center w-full sticky  text-gray-200 bg-gray-600">
            <div className="ml-2">
                <Button color="" buttonType="outline" iconOnly={true} rounded={true} ripple="light"
                    className=" h-10 w-10   hover:bg-gray-800 border-0">
                    <svg width="20" height="16" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H13M1 5H13M1 9H13" stroke="#ABAFD1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Button>
            </div>
            <div className="ml-1">
                PORTRAY
            </div>


            <div className="flex items-center ml-10">
                <Button color="" buttonType="outline" iconOnly={true} rounded={true} ripple="light"
                    className="h-10 w-10 pr-1 hover:bg-gray-800 border-0">
                    <svg width="12" height="17" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.549174 8.98985C0.197544 9.25776 0 9.62112 0 10C0 10.3789 0.197544 10.7422 0.549174 11.0102L11.7992 19.5816C12.5314 20.1395 13.7186 20.1395 14.4508 19.5816C15.1831 19.0237 15.1831 18.1192 14.4508 17.5613L4.52665 10L14.4508 2.43872C15.1831 1.88083 15.1831 0.976311 14.4508 0.418419C13.7186 -0.139473 12.5314 -0.139473 11.7992 0.41842L0.549174 8.98985Z" fill="#ABAFD1" />
                    </svg>
                </Button>
                <Button color="" buttonType="outline" iconOnly={true} rounded={true} ripple="light"
                    className="h-10 w-10 pl-1  hover:bg-gray-800 border-0">
                    <svg width="12" height="17" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.20082 19.5816L14.4508 11.0102C15.1831 10.4523 15.1831 9.54774 14.4508 8.98985L3.20083 0.418419C2.46859 -0.139473 1.28141 -0.139473 0.549176 0.418419C-0.183057 0.976311 -0.183057 1.88083 0.549176 2.43872L10.4733 10L0.549175 17.5613C-0.183058 18.1192 -0.183058 19.0237 0.549175 19.5816C1.28141 20.1395 2.46859 20.1395 3.20082 19.5816Z" fill="#ABAFD1" />
                    </svg>
                </Button>


            </div>
            <div className="flex flex-grow ml-4 items-center ">
                {/* <input className="flex-grow  text-base bg-transparent outline-none" placeholder="/Breadcrumb/" /> */}
            </div>
            <div className="">
                <img src="/img/profile.jpg" alt="profile"
                    className="w-10 rounded-full  border-gray-800 hover:border-2" />
            </div>
            <div className="items-center flex ">
                <Button color="" buttonType="outline" iconOnly={true} rounded={true} ripple="light"
                    className="h-10 w-10  hover:bg-gray-800 border-0">
                    <Icon name="more_vert" size="3xl" />
                </Button>
            </div>
        </nav>
    )
}

export default Navbar
