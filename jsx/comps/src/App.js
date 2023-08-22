// import Button from './components/Button';
// import { GoBell, GoHome, GoHubot } from 'react-icons/go';
import Accordion from './components/Accordion';



function App() {


    const items = [
        {
            id:"asdfasdf",
            label: "Can I use React on a project?",
            content: "You can use React on any project.You can use React on any project"
        },
        {
            id:"asdfassddf",
            label: "Can I use JS on a project?",
            content: "You can use React on any project.You can use React on any project"
        },
        {
            id:"asdfafewsdf",
            label: "Can I use CSS on a project?",
            content: "You can use React on any project.You can use React on any project"
        },
    ]

    return <Accordion items={items}/>

}

export default App;



// return <div>
// <div>
//     <Button success rounded className="mb-5">
//         <GoBell />
//         Buy Now</Button>
// </div>
// <div>
//     <Button secondary outline>
//         <GoHome />
//         Clik Me</Button>
// </div>
// <div>
//     <Button warning outline>
//         <GoHubot />
//         See Deal</Button>
// </div>
// <div>
//     <Button danger>Hide Ads</Button>
// </div>
// <div>
//     <Button primary rounded >Primary</Button>
// </div>
// </div>;