import Accordion from '../components/Accordion';

function AccordionPage(){
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

export default AccordionPage;