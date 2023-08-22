import Button from '../components/Button';
import { GoBell, GoHome, GoHubot } from 'react-icons/go';


function ButtonPage() {


    return <div>
        <div>
            <Button success rounded className="mb-5">
                <GoBell />
                Buy Now</Button>
        </div>
        <div>
            <Button secondary outline>
                <GoHome />
                Clik Me</Button>
        </div>
        <div>
            <Button warning outline>
                <GoHubot />
                See Deal</Button>
        </div>
        <div>
            <Button danger>Hide Ads</Button>
        </div>
        <div>
            <Button primary rounded >Primary</Button>
        </div>
    </div>;
}

export default ButtonPage;