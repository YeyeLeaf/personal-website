import "../style/tag.css";

function Tag(props){
    const { text } = props;
    return (
        <>
            <button>{text}</button>
        </>
    );
}

export default Tag;
