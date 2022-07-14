import imgaside from '../../assets/side-image.jpg'


export function Aside() {
    return (
        <aside className="aside" >
            <img className="aside__img-side" src={imgaside}></img>
        </aside>
    );
}