export const User = (props) => {
    let image = <img src={props.user.photos.small?props.user.photos.small:'https://dummyimage.com/50x50/efefef/000000.jpg'} alt="" />
    return (
    <div>
        
        <div>
            {image}
            {props.user.name}
        </div>
        <div>
            {props.user.city}
            {props.user.country}
        </div>
        <button>
            Subscribe
        </button>
        <hr/>
    </div>
    )
}