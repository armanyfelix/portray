import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'


function Navbar() {
    return (
        <nav className="flex items-center">
            <Button color="gray" buttonType="outline" iconOnly={true} rounded={true} ripple="dark"
                className="md:inline-flex h-20 w-20 border-0">
                <Icon name="menu" size="3xl" />
            </Button>

        </nav>
    )
}

export default Navbar
