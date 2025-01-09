import Nubbies from '../assets/image/webp/nubbies.webp'
import Nekozuma from '../assets/image/webp/nekozuma.webp'
import Galactium from '../assets/image/webp/galactium.webp'
import FrenzForever from '../assets/image/webp/frenz-forever.webp'
import { Consultation, MarketingIcon, NftIcon, SmartContractIcon, WebThreeIcon } from './icons'

export const HEADER_LIST = [
    {
        name: 'Home',
        link: '#home'
    },
    {
        name: 'Services',
        link: '#services'
    },
    {
        name: 'Projects',
        link: '#projects'
    },
    {
        name: 'About',
        link: '#about'
    },
]
export const UPCOMING_PROJECTS =[
    {
        image : Nubbies ,
        name : 'Nubbies',
        time : '15 : 54 : 12',
        type : 'NFT'
    },

    {
        image : Nekozuma ,
        name : 'Nekozuma',
        time : '15 : 54 : 12',
        type : 'NFT'
    },

    {
        image : Galactium ,
        name : 'Nubbies',
        time : '15 : 54 : 12',
        type : 'NFT'
    },

    {
        image : FrenzForever ,
        name : 'Nubbies',
        time : '15 : 54 : 12',
        type : 'NFT'
    },
]
export const SERVICES_LIST = [
    {logo : <SmartContractIcon/> ,
    heading : 'Smart Contract ',
    description : 'Tailored smart contracts to fit your needs , no matter the size. No idea is too big, too small, or too degen... '
    },
    // 
    {
        logo : <WebThreeIcon/>,
        heading : 'Web3 Services',
        list : [
            'Metmask integration', 'NFT s' , 'Dapps' , 'Tokenomics' , 'Metaverse AR/VR' , 'SDK Gaming Integration'
        ]
    },

    {
        logo : <MarketingIcon/>,
        heading : 'Marketing / Media',
        description : 'We have worked with some of the spaces most reputable figures to drive audiences.',
    },

    {
        logo : <Consultation/>,
        heading : 'Consultation',
        description : 'Have an idea but not sure where to start? Hop on a call with us and we will help you to put plans into action.',
    },

    {
        logo : <NftIcon/>,
        heading : 'NFT Services',
        description : 'NFT solutions from start to finish. From Initial Concept to Secondary market listings, we will guide you every step of the way to ensure your project is a successfully and seemlessly delivered come mint day.',
    },
]