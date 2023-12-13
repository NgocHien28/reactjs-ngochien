import "../css/Info.css"


export default function Info(props){
    const {name,phone,age}=props;
    return (
        <div className="title">
            <p>Name: {name}</p>
            <p>Name: {age}</p>
            <p>Name: {phone}</p>
        </div>
    )
}