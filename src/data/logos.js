import abaya2Logo from '../assets/images/logos/abaya.png'
import abayaLogo from '../assets/images/logos/abaya-2.png'
import beautySalon2Logo from '../assets/images/logos/beautySalon.png'
import beautySalonLogo from '../assets/images/logos/beautySalon-2.png'
import weddingsLogo from '../assets/images/logos/weddings.svg'
import weddings2Logo from '../assets/images/logos/weddings-2.png'
import accessoriesLogo from '../assets/images/logos/accessories.png'
import logo from '../assets/images/logos/logo.png'
import { home, weddings, accessories, abayas, beautySalon } from '../assets/utils/environments'

export const logos = [
{
    pageName: home,
    logo:logo,
},
{
    pageName: weddings,
    logo:weddingsLogo,
    scrollLogo:weddings2Logo,
},
{
    pageName: abayas,
    logo:abayaLogo,
    scrollLogo:abaya2Logo,
},
{
    pageName: beautySalon,
    logo:beautySalonLogo,
    scrollLogo:beautySalon2Logo,
},
{
    pageName: accessories,
    logo:accessoriesLogo,
},
]