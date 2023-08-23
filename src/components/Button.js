const Button = (props) => {
    return (
        <div>
            <button className='bg-red-400'>{props.name}</button>
        </div>
    );
};

export default Button;