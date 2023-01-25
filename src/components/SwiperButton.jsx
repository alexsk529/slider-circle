import Button from "./Button.jsx";
import MaterialIcon from "./MaterialIcon.jsx";

const SwiperButton = (props) => {
    return (
        <Button
            onClick={props.onClick}
            size={'40px'}
            color={'#3877EE'}
            background={'#FFFFFF'}
            shadow={'0px 0px 15px rgba(56, 119, 238, 0.1)'}
            position={'absolute'}
            top={'181px'}
            left={props.left}
            innerRef={props.innerRef}
        >
            <MaterialIcon>{props.span}</MaterialIcon>
        </Button>
    );
}

export default SwiperButton;