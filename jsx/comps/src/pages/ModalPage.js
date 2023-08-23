import { useState } from 'react';
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam tellus, ornare malesuada tincidunt eu, dignissim sit amet mi. Etiam fringilla sapien mi, tincidunt condimentum diam condimentum sollicitudin. Curabitur sapien lacus, scelerisque ac erat id, porttitor dapibus purus. Integer porta enim eu eleifend commodo. Proin accumsan nisl in dolor mollis, et mattis metus fringilla. Nunc vitae viverra purus, in ullamcorper odio. Sed magna lorem, sagittis efficitur faucibus lobortis, dapibus sed libero. Phasellus ut pulvinar eros. Curabitur semper posuere ante, eu gravida dui mattis sit amet. Fusce id nunc quam. Fusce ac sem eu diam sagittis sollicitudin convallis nec nisl. Nulla enim nibh, volutpat a consectetur id, rhoncus at diam. Morbi quis bibendum risus, ut ultricies magna.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam tellus, ornare malesuada tincidunt eu, dignissim sit amet mi. Etiam fringilla sapien mi, tincidunt condimentum diam condimentum sollicitudin. Curabitur sapien lacus, scelerisque ac erat id, porttitor dapibus purus. Integer porta enim eu eleifend commodo. Proin accumsan nisl in dolor mollis, et mattis metus fringilla. Nunc vitae viverra purus, in ullamcorper odio. Sed magna lorem, sagittis efficitur faucibus lobortis, dapibus sed libero. Phasellus ut pulvinar eros. Curabitur semper posuere ante, eu gravida dui mattis sit amet. Fusce id nunc quam. Fusce ac sem eu diam sagittis sollicitudin convallis nec nisl. Nulla enim nibh, volutpat a consectetur id, rhoncus at diam. Morbi quis bibendum risus, ut ultricies magna.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam tellus, ornare malesuada tincidunt eu, dignissim sit amet mi. Etiam fringilla sapien mi, tincidunt condimentum diam condimentum sollicitudin. Curabitur sapien lacus, scelerisque ac erat id, porttitor dapibus purus. Integer porta enim eu eleifend commodo. Proin accumsan nisl in dolor mollis, et mattis metus fringilla. Nunc vitae viverra purus, in ullamcorper odio. Sed magna lorem, sagittis efficitur faucibus lobortis, dapibus sed libero. Phasellus ut pulvinar eros. Curabitur semper posuere ante, eu gravida dui mattis sit amet. Fusce id nunc quam. Fusce ac sem eu diam sagittis sollicitudin convallis nec nisl. Nulla enim nibh, volutpat a consectetur id, rhoncus at diam. Morbi quis bibendum risus, ut ultricies magna.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam tellus, ornare malesuada tincidunt eu, dignissim sit amet mi. Etiam fringilla sapien mi, tincidunt condimentum diam condimentum sollicitudin. Curabitur sapien lacus, scelerisque ac erat id, porttitor dapibus purus. Integer porta enim eu eleifend commodo. Proin accumsan nisl in dolor mollis, et mattis metus fringilla. Nunc vitae viverra purus, in ullamcorper odio. Sed magna lorem, sagittis efficitur faucibus lobortis, dapibus sed libero. Phasellus ut pulvinar eros. Curabitur semper posuere ante, eu gravida dui mattis sit amet. Fusce id nunc quam. Fusce ac sem eu diam sagittis sollicitudin convallis nec nisl. Nulla enim nibh, volutpat a consectetur id, rhoncus at diam. Morbi quis bibendum risus, ut ultricies magna.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam tellus, ornare malesuada tincidunt eu, dignissim sit amet mi. Etiam fringilla sapien mi, tincidunt condimentum diam condimentum sollicitudin. Curabitur sapien lacus, scelerisque ac erat id, porttitor dapibus purus. Integer porta enim eu eleifend commodo. Proin accumsan nisl in dolor mollis, et mattis metus fringilla. Nunc vitae viverra purus, in ullamcorper odio. Sed magna lorem, sagittis efficitur faucibus lobortis, dapibus sed libero. Phasellus ut pulvinar eros. Curabitur semper posuere ante, eu gravida dui mattis sit amet. Fusce id nunc quam. Fusce ac sem eu diam sagittis sollicitudin convallis nec nisl. Nulla enim nibh, volutpat a consectetur id, rhoncus at diam. Morbi quis bibendum risus, ut ultricies magna.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam tellus, ornare malesuada tincidunt eu, dignissim sit amet mi. Etiam fringilla sapien mi, tincidunt condimentum diam condimentum sollicitudin. Curabitur sapien lacus, scelerisque ac erat id, porttitor dapibus purus. Integer porta enim eu eleifend commodo. Proin accumsan nisl in dolor mollis, et mattis metus fringilla. Nunc vitae viverra purus, in ullamcorper odio. Sed magna lorem, sagittis efficitur faucibus lobortis, dapibus sed libero. Phasellus ut pulvinar eros. Curabitur semper posuere ante, eu gravida dui mattis sit amet. Fusce id nunc quam. Fusce ac sem eu diam sagittis sollicitudin convallis nec nisl. Nulla enim nibh, volutpat a consectetur id, rhoncus at diam. Morbi quis bibendum risus, ut ultricies magna.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam tellus, ornare malesuada tincidunt eu, dignissim sit amet mi. Etiam fringilla sapien mi, tincidunt condimentum diam condimentum sollicitudin. Curabitur sapien lacus, scelerisque ac erat id, porttitor dapibus purus. Integer porta enim eu eleifend commodo. Proin accumsan nisl in dolor mollis, et mattis metus fringilla. Nunc vitae viverra purus, in ullamcorper odio. Sed magna lorem, sagittis efficitur faucibus lobortis, dapibus sed libero. Phasellus ut pulvinar eros. Curabitur semper posuere ante, eu gravida dui mattis sit amet. Fusce id nunc quam. Fusce ac sem eu diam sagittis sollicitudin convallis nec nisl. Nulla enim nibh, volutpat a consectetur id, rhoncus at diam. Morbi quis bibendum risus, ut ultricies magna.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam tellus, ornare malesuada tincidunt eu, dignissim sit amet mi. Etiam fringilla sapien mi, tincidunt condimentum diam condimentum sollicitudin. Curabitur sapien lacus, scelerisque ac erat id, porttitor dapibus purus. Integer porta enim eu eleifend commodo. Proin accumsan nisl in dolor mollis, et mattis metus fringilla. Nunc vitae viverra purus, in ullamcorper odio. Sed magna lorem, sagittis efficitur faucibus lobortis, dapibus sed libero. Phasellus ut pulvinar eros. Curabitur semper posuere ante, eu gravida dui mattis sit amet. Fusce id nunc quam. Fusce ac sem eu diam sagittis sollicitudin convallis nec nisl. Nulla enim nibh, volutpat a consectetur id, rhoncus at diam. Morbi quis bibendum risus, ut ultricies magna.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam tellus, ornare malesuada tincidunt eu, dignissim sit amet mi. Etiam fringilla sapien mi, tincidunt condimentum diam condimentum sollicitudin. Curabitur sapien lacus, scelerisque ac erat id, porttitor dapibus purus. Integer porta enim eu eleifend commodo. Proin accumsan nisl in dolor mollis, et mattis metus fringilla. Nunc vitae viverra purus, in ullamcorper odio. Sed magna lorem, sagittis efficitur faucibus lobortis, dapibus sed libero. Phasellus ut pulvinar eros. Curabitur semper posuere ante, eu gravida dui mattis sit amet. Fusce id nunc quam. Fusce ac sem eu diam sagittis sollicitudin convallis nec nisl. Nulla enim nibh, volutpat a consectetur id, rhoncus at diam. Morbi quis bibendum risus, ut ultricies magna.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam tellus, ornare malesuada tincidunt eu, dignissim sit amet mi. Etiam fringilla sapien mi, tincidunt condimentum diam condimentum sollicitudin. Curabitur sapien lacus, scelerisque ac erat id, porttitor dapibus purus. Integer porta enim eu eleifend commodo. Proin accumsan nisl in dolor mollis, et mattis metus fringilla. Nunc vitae viverra purus, in ullamcorper odio. Sed magna lorem, sagittis efficitur faucibus lobortis, dapibus sed libero. Phasellus ut pulvinar eros. Curabitur semper posuere ante, eu gravida dui mattis sit amet. Fusce id nunc quam. Fusce ac sem eu diam sagittis sollicitudin convallis nec nisl. Nulla enim nibh, volutpat a consectetur id, rhoncus at diam. Morbi quis bibendum risus, ut ultricies magna.
        </p>

    </div>
};

export default ModalPage;
