import "./style.css";

export default function Statement() {
    return (
        <div className="statement">
            <div className="statement__top">
                <h4 className="statement__title">Demonstrativo comercial</h4>
                <div className="statement__icons">
                    <span>x</span>
                    <span>x</span>
                </div>
            </div>
            <div className="statement__gallery">
                <img className="statement__img" src="https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/7.jpg" alt="" />
                <img className="statement__img" src="https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/7.jpg" alt="" />
                <img className="statement__img" src="https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/7.jpg" alt="" />
                <img className="statement__img" src="https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/7.jpg" alt="" />
            </div>
        </div>
    );
}